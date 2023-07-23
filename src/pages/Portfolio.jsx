import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Portfolio = () => {
    const projects = [
        {
            title: "Example Project",
            imageUrl: "exmaple.png",
            deployedLink: "https://example.com",
            githubLink: "https://github.com"
        },
    ];

    return (
        <section className="py-5">
            <Container>
                <Row>
                    {projects.map((project, index) => (
                        <Col md={4} key={index}>
                            <Card>
                                <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Button variant="primary" href={project.deployedLink}>Deployed Application</Button>{' '}
                                    <Button variant="secondary" href={project.githubLink}>GitHub Repository</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Portfolio;