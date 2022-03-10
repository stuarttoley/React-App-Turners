
import React from "react";

import {Navbar, Nav, Container, Form, FormControl, Button, NavDropdown} from 'react-bootstrap'



function Navbars() {
  return (
    <div className="Navbar">
      <Navbar bg="primary" variant='light' expand="lg">
  <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/"><p class ='text-light'>Find a Car</p></Nav.Link>
        <Nav.Link href="#link"><p class ='text-light'>How to Buy</p></Nav.Link>
        <Nav.Link href="#link"><p class ='text-light'>Sell your Car</p></Nav.Link>
        <Nav.Link href="#link"><p class ='text-light'>Finance</p></Nav.Link>
        <NavDropdown title='Insurance' id="basic-nav-dropdown" bg='light' class='me-auto'>

          <NavDropdown.Item href="buy-insurance"> Buy Insurance</NavDropdown.Item>
          <NavDropdown.Item href="/http://turners-react.s3-website-ap-southeast-2.amazonaws.com/login">Claim Insurance</NavDropdown.Item>

        </NavDropdown>
        <Nav.Link href="#link"><p class ='text-light'>Careers</p></Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="primary">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}

export default Navbars;