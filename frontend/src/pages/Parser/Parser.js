import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

import ParserForm from './ParserForm'

class Parser extends Component {
  render() {
    return(
      <Container>
        <Header as='h2' textAlign="center">Link Parser</Header>
        <hr/>
        <ParserForm />
      </Container>
    )
  }
}

export default Parser;