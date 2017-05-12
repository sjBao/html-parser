import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Form } from 'semantic-ui-react';

class ParserForm extends Component {
  state = {
    url: '',
    redirect: false,
  }

  handleChange = (e) =>  {
    this.setState(prevState => ({
      url: this.refs.urlInput.value
    }));
  }

  handleSubmit = e => {
    console.log(Redirect)
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
      this.setState({ redirect: `/links/${JSON.parse(response).data.id}` })
    })
  }

  render() {
    let { url, redirect } = this.state
    const form = () => (
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
    return (
        redirect ? <Redirect to={redirect} /> : form()
    )
  }
}

export default ParserForm;