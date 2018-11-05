import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#profile">LT</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#profile">
                            Perfil
                        </NavItem>
                        <NavItem eventKey={2} href="#skills">
                            Habilidades
                        </NavItem>
                        <NavItem eventKey={3} href="#blog">
                            Blog
                        </NavItem>
                        <NavItem eventKey={4} href="#portfolio">
                            Portfólio
                         </NavItem>
                         <NavItem eventKey={5} href="#about">
                            Mais Informações
                        </NavItem>
                        <NavItem eventKey={6} href="#contact">
                            Contato
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}
export default Header;