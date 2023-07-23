import React from  "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" required />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
};

export default Contact;