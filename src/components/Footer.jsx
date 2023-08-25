import React from "react";

// creates Footer with links to my github, linkedin, and instagram
// <i> element allows the icons for those platforms to be present using font-awesome
const Footer = () => {
    return (
        <footer className="footer-links">
            <div className="container">
                <div>
                    <div>
                        <a href="https://github.com/pjt3232">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/peyton-tranel">
                        <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://instagram.com/tranel_32">
                        <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
