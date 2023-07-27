import React from  "react";

const Contact = () => {
    return (
        <section className="container content contact">
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" required />
                </div>
                <div>
                    <label>Message:</label>
                    <input as="textarea" required />
                </div>
                <button className="btn-primary" variant="primary" type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;