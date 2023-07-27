import React from "react";

const Header = () => {
    return (
        <header>
            <div expand="lg">
                <div>
                    <h1>Peyton Tranel</h1>
                        <nav className="ms-auto">
                            <a href="/">About Me</a>
                            <a href="/portfolio">Portfolio</a>
                            <a href="/contact">Contact</a>
                            <a href="/resume">Resume</a>
                        </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;