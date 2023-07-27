import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="py-4 footer-links">
            <div className="container">
                <div className="text-center">
                    <div>
                        <a href="https://github.com/pjt3232" className="text-dark mx-2">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/peyton-tranel-878b83278/" className="text-dark mx-2">
                        <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://instagram.com/tranel_32" className="text-dark mx-2">
                        <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
