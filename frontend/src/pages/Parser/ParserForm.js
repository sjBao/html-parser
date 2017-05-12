import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ParserForm extends Component {
  state = {
    url: ''
  }

  handleChange = (e) =>  {
    this.setState(prevState => ({
      url: this.refs.urlInput.value
    }));
  }

  handleSubmit = e => {
    e.preventDefault();
    let payload = JSON.stringify({ url: this.refs.urlInput.value });
    console.log(payload)
    fetch('/api/v1/links', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: payload
    }).then(promise=> {
      return promise.text()
    }).then(response => {
      location.href = `/links/${JSON.parse(response).data.id}`
    })
  }

  render() {
    const { url } = this.state
    return(
      <Form onSubmit={ this.handleSubmit }>
        <Form.Field>
          <Form.Group>
            <input
              ref="urlInput"
              placeholder='enter url here'
              name='url' value={url}
              onChange={this.handleChange}
            />
            <Form.Button content='Parse!' />
          </Form.Group>
        </Form.Field>
      </Form>
    )
  }
}

export default ParserForm;