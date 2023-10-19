import React from 'react'
import { NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import useLogout from '../Hooks/useLogout';
function Header() {
      let navigate= useNavigate();
      let Logout= useLogout();
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  onClick={()=>navigate('/dashboard')} >dashboard</Nav.Link>
            <Nav.Link onClick={()=>navigate('/')}>createUser</Nav.Link>
            <NavItem><Button variant="outline-primary" onClick={()=>Logout()}>Logout</Button></NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header