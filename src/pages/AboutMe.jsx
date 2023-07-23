import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutMe = () => {
    return (
        <section className="py-5">
            <Container>
                <Row>
                    <Col md={4}>
                        <img src="my-picture" alt="Peyton Tranel" className="img-fluid"/>
                    </Col>
                    <Col md={8}>
                        <p>
                            My about me section
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutMe;