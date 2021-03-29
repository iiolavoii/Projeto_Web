import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

/**
 * Importamos da framework "reactstrap" os componentes que vamos usar para criar um navbar.
 * Criamos uma função TopNavBar para gerar um navabar quando for invocado pela App.
 * Dentro dessa função utilizamos o useState, uma hook da biblioteca React, para 
 * criar uma variavel de estado boleano que diga quando o utilizador clicar no "NavBarToogler",
 * ele expanda o menu se for true e vice-versa
 */


export default function TopNavbar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">MoonFall</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Produtos">Produtos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contactos">Contactos</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
