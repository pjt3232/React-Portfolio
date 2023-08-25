import React from "react";

// resume page with link to my resume.pdf and a list of my proficiencies
const Resume = () => {
    return (
        <section className="container content resume">
            <div>
                <p>
                    Download my resume:
                    <a href="https://drive.google.com/file/d/1L12gwHwC6VXInYsOa8Omqnm9jUDzYhsU/view?usp=sharing"> Resume.pdf</a>
                </p>
                <h2>Proficiencies:</h2>
                <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                    <li>MongoDB</li>
                    <li>Bootstrap</li>
                    <li>GitHub</li>
                </ul>
            </div>
        </section>
    );
};

export default Resume;