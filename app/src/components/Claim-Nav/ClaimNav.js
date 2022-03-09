import React from 'react'

import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'

function ClaimNav() {
  return (
    <div className="Navbar">
      <Navbar bg="primary" variant='light' expand="lg">
  <Container>

    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="me-auto">
        
      <NavDropdown title='Comprehensive' id="basic-nav-dropdown" bg='light' class='me-auto'>

        <NavDropdown.Item href="/claim">Policy 1011234567</NavDropdown.Item>
        <NavDropdown.Item href="/claim">Policy 1011233445</NavDropdown.Item>

        </NavDropdown>

        <Nav.Link href="#link"><p class ='text-light'>Third-Party Fire and theft</p></Nav.Link>
        <Nav.Link href="#link"><p class ='text-light'>Third-Party Property Damage</p></Nav.Link>
        <Nav.Link href="#link"><p class ='text-light'>Mechanical Breakdown</p></Nav.Link>
        
        
      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default ClaimNav