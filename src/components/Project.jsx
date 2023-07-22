import React from "react";
import { Card, Button } from 'react-bootstrap';

const Project = ({ title, imageUrl, deployedLink, githubLink }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant="primary" href={deployedLink}>Deployed Application</Button>{' '}
                <Button variant="secondary" href={githubLink}>GitHub Repository</Button>

            </Card.Body>
        </Card>
    );
};

export default Project;