import React from 'react';
import { FaGitHub, FaLinkedIn, FaInstagram } from 'react-icons';

const Footer = () => {
    return (
        <footer className='bg-dark text-white py-4'>
            <div className='container text-center'>
                <ul className='list-inline'>
                    <li className='list-inline-item'>
                        <a href='https://github.com/pjt3232' target='_blank' rel='noopener noreferrer' className='text-white'>
                            <FaGitHub size={24} />
                        </a>
                    </li>
                    <li className='list-inline-item'>
                        <a href='https://www.linkedin.com/in/peyton-tranel-878b83278/' target='_blank' rel='noopener noreferrer' className='text-white'>
                            <FaLinkedIn size={24} />
                        </a>
                    </li>
                    <li className='list-inline-item'>
                        <a href='https://instagram.com/tranel_32' target='_blank' rel='noopener noreferrer' className='text-white'>
                            <FaInstagram size={24} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;