import React from  "react";

// contact page with form and input
const Contact = () => {

    return (
        <section className="container content contact">
                <div className="contact-information">
                    <h2>You Can Reach Me Here</h2>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <a href="mailto:20peytra@gmail.com">20peytra@gmail.com</a>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number:</label>
                        <a href="tel:608-509-2031">608-509-2031</a>
                    </div>
                    <div>
                        <label htmlFor="phone">LinkedIn:</label>
                        <a href="https://www.linkedin.com/in/peyton-tranel/">Peyton Tranel</a>
                    </div>
                    <div>
                        <label htmlFor="phone">Resume:</label>
                        <a href="https://drive.google.com/file/d/1L12gwHwC6VXInYsOa8Omqnm9jUDzYhsU/view?usp=sharing">Peyton J Tranel Resume</a>
                    </div>
                </div>
        </section>
    );
};

export default Contact;