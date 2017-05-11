import React from 'react';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

const PastLink = (props) => (
  <Segment raised>
    <strong>{props.linkInfo.url}</strong>
    <br/>
    <br/>
    <Link
      className="ui primary button"
      to={`/links/${props.linkInfo.id}`}>
    View Parsed Tags</Link>

    <Link
      className="ui button"
      to={`/links/${props.linkInfo.id}`}>Edit</Link>

    <Link
      className="ui button"
      to={`/links/${props.linkInfo.id}`}>Delete</Link>
  </Segment>
)

export default PastLink;