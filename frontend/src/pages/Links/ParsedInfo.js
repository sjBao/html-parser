import React, { Component } from 'react';
import {
  Header,
  Container,
  Card,
  Icon,
} from 'semantic-ui-react';

class ParsedInfo extends Component {
  state = {
    parsedContent: [
      { "id": 1,
      "tag_type": "h1",
      "body": "Stanford just abandoned Java in favor of JavaScript for its intro CS course.",
      "link_id": 1,
      "created_at": "2017-05-10T19:24:21.059Z",
      "updated_at": "2017-05-10T19:24:21.059Z" },
      { "id": 2,
      "tag_type": "h3",
      "body": "Thought of the day:",
      "link_id": 1,
      "created_at": "2017-05-10T19:24:21.062Z",
      "updated_at": "2017-05-10T19:24:21.062Z" },
      {
        "id": 3,
        "tag_type": "h3",
        "body": "Funny of the day:",
        "link_id": 1,
        "created_at": "2017-05-10T19:24:21.065Z",
        "updated_at": "2017-05-10T19:24:21.065Z" },
      {
        "id": 4,
        "tag_type": "h3",
        "body": "Study group of the day:",
        "link_id": 1,
        "created_at": "2017-05-10T19:24:21.067Z",
        "updated_at": "2017-05-10T19:24:21.067Z" },
      {
        "id": 5,
        "tag_type": "h3",
        "body": "Quincy Larson",
        "link_id": 1,
        "created_at": "2017-05-10T19:24:21.070Z",
        "updated_at": "2017-05-10T19:24:21.070Z" },
      {
        "id": 6,
        "tag_type": "h3",
        "body": "freeCodeCamp",
        "link_id": 1,
        "created_at": "2017-05-10T19:24:21.073Z",
        "updated_at": "2017-05-10T19:24:21.073Z" }
    ]
  }

  render() {
    let { parsedContent } = this.state;
    return (
      <Container>
        <Header as="h1" textAlign="center">Parsed Headers</Header>
        <hr/>
        {this.props.match.url}
        {
          parsedContent.map(content => (
            <Card fluid key={content.id}>
              <Card.Content extra>
                {`<${content.tag_type}>`}
              </Card.Content>
              <Card.Content description={content.body} />
              <Card.Content extra>
                {`</${content.tag_type}>`}
              </Card.Content>
            </Card>
          ))
        }
      </Container>
    )
  }
}

export default ParsedInfo;