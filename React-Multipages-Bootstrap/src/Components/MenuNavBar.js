import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./MenuNavBar.css";
import logo from './fashio.gif'

export default function MenuNavBar() {
  return (
    <Navbar class="navbar" fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="/">
      <div class="logo">
          <img src={logo}/>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/aboutus">Aboutus</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/contactus">Contactus</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="search for products..."
            className="mr-sm-2"
          />
          <Button variant="outline-success">search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
