import React, { Component, PropTypes } from 'react'
import { Container, Col, Row } from 'reactstrap';

class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children, inputValue } = this.props
    return (
      <Container>
        <Row>
          <Col md={{size: 8, offset: 2}}>
            <h1>VQuizLite</h1>
          </Col>
        </Row>
        {children}
      </Container>
    )
  }
}

export default App
