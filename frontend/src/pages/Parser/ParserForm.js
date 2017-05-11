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
    e.preventDefault()
    this.setState({ url: ''});
    window.location.href = '/links/1'
  };

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