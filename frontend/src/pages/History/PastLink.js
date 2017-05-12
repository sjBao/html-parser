import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';

const PastLink = (props) => {
  const handleClick = () => [
    fetch(`/api/v1/links/${props.linkInfo.id}`, {
      method: 'DELETE'
    }).then(promise => {
      return promise
    }).then(response => {
      props.updateLinks();
    })
  ]

  return (
    <Segment raised>
      <strong>{props.linkInfo.url}</strong>
      <br/>
      <br/>
      <Link
        className="ui primary button"
        to={`/links/${props.linkInfo.id}`}>
        View Parsed Tags
      </Link>

      <Link
        className="ui button"
        to={`/links/${props.linkInfo.id}`}>
        Edit
      </Link>

      <Button
        className="ui button"
        onClick={handleClick}>
        Delete
      </Button>
    </Segment>
  )
}

export default PastLink;