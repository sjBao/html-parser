import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Segment, Form } from 'semantic-ui-react';

class PastLink extends Component {
  state = {
    editing: false,
    url: this.props.linkInfo.url,
  }

  toggleEdit = () => {
    this.setState(prevState => ({
      editing: !prevState.editing,
      url: this.props.linkInfo.url
    }))
  }

  handleChange = e => {
    this.setState({ url: this.refs.editForm.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let payload = JSON.stringify({ url: this.refs.editForm.value });
    fetch(`/api/v1/links/${this.props.linkInfo.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: payload
    }).then(promise=> {
      return promise.text()
    }).then(response => {
      this.setState({ redirect: `/links/${JSON.parse(response).data.id}` })
    })
  }

  handleDelete = () => {
    fetch(`/api/v1/links/${this.props.linkInfo.id}`, {
      method: 'DELETE'
    }).then(promise => {
      return promise
    }).then(response => {
      this.props.updateLinks();
    })
  }

  render () {
    console.log(this.state)
    let { editing, url } = this.state
    return (
      <Segment raised>
        {
          editing ? <Form
            onBlur={this.handleSubmit}
            onSubmit={this.handleSubmit}>
          <input
            ref="editForm"
            onChange={this.handleChange}
            name='url'
            value={url} />
          </Form>:
          <strong onClick={this.toggleEdit}>{url}</strong>
        }

        <br/>
        <br/>
        <Link
          className="ui primary button"
          to={`/links/${this.props.linkInfo.id}`}>
          View Parsed Tags
        </Link>

        <Button
          className="ui button"
          onClick={this.toggleEdit}>
          { editing ? 'Cancel' : 'Edit' }
        </Button>

        <Button
          className="ui button"
          onClick={this.handleDelete}>
          Delete
        </Button>
      </Segment>
    )
  }
}

export default PastLink;