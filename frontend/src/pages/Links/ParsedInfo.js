import React, { Component } from 'react';
import {
  Header,
  Container,
  Card,
  Icon,
} from 'semantic-ui-react';

class ParsedInfo extends Component {
  state = {
    parsedContent: []
  }

  componentWillMount() {
    fetch(`/api/v1${this.props.match.url}.json`).then(promise =>{
      return promise.text()
    }).then(response => {
      this.setState({
        parsedContent: JSON.parse(response).data.parsed_content
      })
    })
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