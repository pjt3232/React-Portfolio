import React from "react";
import { NavLink } from "react-router-dom";

// creates header and nav using Link to handle page redirection
const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <h1>Peyton Tranel</h1>
                    <nav>
                        <NavLink to="/" activeclassname="active">About Me</NavLink >
                        <NavLink to="/portfolio" activeclassname="active">Portfolio</NavLink >
                        <NavLink to="/contact" activeclassname="active">Contact</NavLink >
                        <NavLink to="/resume" activeclassname="active">Resume</NavLink >
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;