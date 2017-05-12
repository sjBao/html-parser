import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

import PastLink from './PastLink';

class History extends Component {
  state = {
    links: []
  }

  updateLinks = () => {
    fetch('/api/v1/links.json').then( promise => {
      return promise.text()
    }).then(response =>{
      this.setState({
        links: JSON.parse(response).data
      })
    })
  }

  componentWillMount = () => {
    this.updateLinks();
  }

  render() {
    let { links } = this.state;
    return (
      <Container>
        <Header as='h2' textAlign="center">Past Links</Header>
        <hr/>
        { links.map( link => (
          <PastLink
            updateLinks={this.updateLinks}
            key={link.id}
            linkInfo={link} />
        ))}
      </Container>
    )
  }
}

export default History;