import logo from './bear.svg';
import React from 'react';
import './App.css';
import { Login } from "./components/login";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

<>
  <style type="text/css">
    {`
    .btn-flat {
      background-color: blue;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button variant="flat" size="xxl">
    flat button
  </Button>
</>

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: true, 
    }
  }

  render() {
    const { isLoginActive } = this.state;
    return (
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
            Bear Pals
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link href="#signup">Signup</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container>
        <Row>
          <Col>
              <h1></h1>
            <h1>Bear Pals</h1>
            <p>On a mission to make study groups better</p>
          </Col>
          <Col>          
            <Form>
            <h1></h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={{ order: 'first' }}>
            <h1></h1>
              <h3>Be more productive</h3>
              <p>When you study with strangers, you're distracted less and more productive than when studying with friends.</p>
            </Col>
            <Col xs>
            <h1></h1>
            <h3>Get homework help</h3>
              <p>Work with people who are taking the same classes, and get your questions answered working your peers.</p>
            </Col>
            <Col xs={{ order: 'last' }}>
            <h1></h1>
            <h3>Fast and secure</h3>
              <p>See other classmates from your course looking for study partners, and study groups and reach out easily without giving out personal contact information.</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  
}

export default App;
