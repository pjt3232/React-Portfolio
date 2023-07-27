import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Portfolio = () => {
    const projects = [
        {
            title: "Ecopaw Tracker",
            imageUrl: "https://dochub.com/20peytra/mqNjP3BVW1O6k7PR9yGzLk/ecopaw-tracker-screenshot-png?dt=DH4cqfW3AsjXGbTC8yqo",
            deployedLink: "https://ecopaw-tracker-033283e6e802.herokuapp.com/",
            githubLink: "https://github.com/MCunha17/ecopaw-tracker"
        },
        {
            title: "Thirst Traps",
            imageUrl: "https://user-images.githubusercontent.com/124208861/233245572-31c3d049-8850-45d8-8eae-6c9f804bc93c.png",
            deployedLink: "https://annabellefosburgh.github.io/heavy-dolphin/",
            githubLink: "https://github.com/annabellefosburgh/heavy-dolphin"
        },
        {
            title: "PWA Text Editor",
            imageUrl: "https://dochub.com/20peytra/7J4mQvgRv6o83g0Rj2pO5n/pwa-text-editor-screenshot-png?dt=uDZ_atmy7D6sSxEbPckZ",
            deployedLink: "https://jate-quill-892f91be6a60.herokuapp.com/",
            githubLink: "https://github.com/pjt3232/PWA-Text-Editor"
        },
        {
            title: "NoSQL Social Network",
            imageUrl: "https://dochub.com/20peytra/8adOrbPVQEDDXJrV24Mj7D/nosql-social-network-screenshot-png?dt=uLUaX4urSc34zsyjmbCi",
            deployedLink: "https://drive.google.com/file/d/1NpvXVn7bcMkF0VJZVlX5-6kWFfL4PmN6/view",
            githubLink: "https://github.com/pjt3232/NoSQL-Social-Network"
        },
        {
            title: "Business Database",
            imageUrl: "https://dochub.com/20peytra/mqNjP3BVW1OOAQWR9yGzLk/business-database-screenshot-png?dt=StBJagQRkTe5zy66yeFy",
            deployedLink: "https://drive.google.com/file/d/1uyoBdPSWTIw5QIYcmSfOK5386Hb3zmCl/view?usp=sharing",
            githubLink: "https://github.com/pjt3232/Business-Database"
        },
        {
            title: "Weather Dashboard",
            imageUrl: "https://dochub.com/20peytra/oGZeMNnwXOb60ZeVQvbrYd/weather-dashboard-screenshot-png?dt=AZHBcx_FyJw6vB4h5oHy",
            deployedLink: "https://pjt3232.github.io/Weather-Dashboard/",
            githubLink: "https://github.com/pjt3232/Weather-Dashboard"
        },
    ];

    return (
        <section className="py-5 container content">
            <div>
                <div>
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="card">
                                <img variant="top" src={project.imageUrl} alt={project.title} className="project-img"/>
                                <div>
                                    <h2>{project.title}</h2>
                                    <button className="btn btn-primary" variant="primary" href={project.deployedLink}>Deployed Application</button>{' '}
                                    <button className="btn btn-secondary" variant="secondary" href={project.githubLink}>GitHub Repository</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;