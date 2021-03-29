import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

export default function TopNavbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="justify-content-end">
        <LinkContainer to="/" style={{ width: "160px" }}>
          <Navbar.Brand>
            <img
              className="logo-img"
              src="/img/Icon/Asset 3.png"
              alt="MoonFall"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Produtos">
            <Nav.Link>Produtos</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Contactos">
            <Nav.Link>Contactos</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </div>
  );
}
