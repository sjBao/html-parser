import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

import PastLink from './PastLink';

class History extends Component {
  state = {
    links: []
  }

  componentWillMount = () => {
    this.setState({
      links : [{"id":1,"url":"https://medium.freecodecamp.com/stanford-just-abandoned-java-in-favor-of-javascript-for-its-intro-cs-course-fe40543e81d8","created_at":"2017-05-10T17:50:24.734Z","updated_at":"2017-05-10T17:50:24.734Z"},
      {"id":2,"url":"https://medium.freecodecamp.com/stanford-just-abandoned-java-in-favor-of-javascript-for-its-intro-cs-course-fe40543e81d8","created_at":"2017-05-10T17:50:24.734Z","updated_at":"2017-05-10T17:50:24.734Z"},
      {"id":3,"url":"https://medium.freecodecamp.com/stanford-just-abandoned-java-in-favor-of-javascript-for-its-intro-cs-course-fe40543e81d8","created_at":"2017-05-10T17:50:24.734Z","updated_at":"2017-05-10T17:50:24.734Z"}]
    })
  }

  render() {
    let { links } = this.state;
    return (
      <Container>
        <Header as='h2' textAlign="center">Past Links</Header>
        <hr/>
        { links.map( link => (
          <PastLink key={link.id} linkInfo={link} />
        ))}
      </Container>
    )
  }
}

export default History;