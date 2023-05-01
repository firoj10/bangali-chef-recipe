import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
           

          
      <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">Banglai-Shef-recipe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
          <Link className='p-2' to='/'>Home</Link>
          <Link  className='p-2' to='/blog'>Blog</Link>
            
          </Nav>
         
        </Navbar.Collapse>
        </Navbar>
      </Container>
     
  
        </div>
    );
};

export default Header;