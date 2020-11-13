import React from "react";
// import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, Form, FormControl, Button, NavDropdown, MenuItem } from 'react-bootstrap';

function Header() {
  return (

    <Navbar bg="light" variant="light">
    <Navbar.Brand >Welcome to !</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/product">Product</Nav.Link>
    <Nav.Link href="/about">About Us</Nav.Link>
    </Nav>
    <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-primary">Search</Button>
    </Form>
    </Navbar>
  );
}
export default Header;