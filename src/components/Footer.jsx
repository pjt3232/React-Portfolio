import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGitHub, FaLinkedIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-4 bg-light">
            <Container>
                <Row className="text-center">
                    <Col>
                        <a href="https://github.com/pjt3232" className="text-dark mx-2">
                            <FaGitHub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/peyton-tranel-878b83278/" className="text-dark mx-2">
                            <FaLinkedIn size={24} />
                        </a>
                        <a href="https://instagram.com/tranel_32" className="text-dark mx-2">
                            <FaInstagram size={24} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
