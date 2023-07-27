import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar expand="lg">
                <Container>
                    <h1>Peyton Tranel</h1>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">About Me</Nav.Link>
                            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="/Contact">Contact</Nav.Link>
                            <Nav.Link href="/Resume">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;