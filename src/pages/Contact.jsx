import React from  "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
    return (
        <section className="container content contact">
            <form>
                <div className="mb-3">
                    <label>Name:</label>
                    <input type="text" required />
                </div>
                <div className="mb-3">
                    <label>Email:</label>
                    <input type="email" required />
                </div>
                <div className="mb-3">
                    <label>Message:</label>
                    <input as="textarea" required />
                </div>
                <button className="btn btn-primary" variant="primary" type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;