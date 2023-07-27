import React from "react";
import { Link } from "react-router-dom";

// creates header and nav using Link to handle page redirection
const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <h1>Peyton Tranel</h1>
                        <nav>
                            <Link to="/">About Me</Link >
                            <Link to="/portfolio">Portfolio</Link >
                            <Link to="/contact">Contact</Link >
                            <Link to="/resume">Resume</Link >
                        </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;