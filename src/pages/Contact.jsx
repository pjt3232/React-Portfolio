import React, { useState } from  "react";

// contact page with form and input
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);

        if (newEmail && !validateEmail(newEmail)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !message) {
            alert('All fields are required');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section className="container content contact">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)}
                    required 
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required 
                    />
                    {emailError && <p>{emailError}</p>}
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea 
                    id="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required 
                    />
                </div>
                <button className="btn-primary" type="submit">Submit</button>
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
                </div>
            </form>
        </section>
    );
};

export default Contact;