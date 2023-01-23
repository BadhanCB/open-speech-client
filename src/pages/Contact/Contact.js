import React from 'react';
import './Contact.css';
import SocialOption from '../../components/SocialOption/SocialOption';

const Contact = () => {
    return (
        <div className='contact'>
            <h1>Please Contact with Us</h1>
            <div className='contact-us-options'>
                <SocialOption />
            </div>
        </div>
    );
};

export default Contact;