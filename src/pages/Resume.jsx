import React from "react";
import { Container } from "react-bootstrap";

const Resume = () => {
    return (
        <section className="container">
            <Container>
                <p>
                    Download my resume:
                    <a href="my-resume.pdf">Resume.pdf</a>
                </p>
                <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                    <li>MongoDB</li>
                    <li>GitHub</li>
                </ul>
            </Container>
        </section>
    );
};

export default Resume;