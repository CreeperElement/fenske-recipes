import React from 'react';
import './App.scss';
import { Col, Container, FloatingLabel, Form, Nav, Navbar, Row } from 'react-bootstrap';
import SearchBar from './SearchBar';
import RecipeContent from './RecipeContent';

function App() {
  const RootURL = window.location.origin;
  const Home = RootURL;
  const Recipes = RootURL + "/Recipes";
  const Phragmites = RootURL + "/Phragmites";

  return (
    <div>
      <Navbar bg="secondary">
        <Container>
          <Navbar.Brand>Fenske</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={Home}>Home</Nav.Link>
            <Nav.Link href={Recipes}>Recipes</Nav.Link>
            <Nav.Link href={Phragmites}>Phragmites</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <SearchBar>
        <Row>
          <Col>
            <FloatingLabel label="Search by keyword">
              <Form.Control type="input"/>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Show recipes by user:">
              <Form.Select>
                <option>Choose one from below</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
      </SearchBar>
      <RecipeContent/>
    </div>
  );
}

export default App;
