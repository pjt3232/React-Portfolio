import React from "react";
import { Container } from "react-bootstrap";

const Resume = () => {
    return (
        <section className="container content resume">
            <Container>
                <p>
                    Download my resume:
                    <a href="https://drive.google.com/file/d/1bjg24-T26s-xt1QwPBsn0l4tCXrWfnEc/view?usp=sharing"> Resume.pdf</a>
                </p>
                <h2>Proficiencies:</h2>
                <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                    <li>MongoDB</li>
                    <li>Bootstrap</li>
                    <li>GitHub</li>
                </ul>
            </Container>
        </section>
    );
};

export default Resume;