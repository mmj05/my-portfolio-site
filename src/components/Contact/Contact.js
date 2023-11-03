import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

const Contact = () => {
    // State to manage form input values
    const [state, handleSubmit] = useForm('mvowwkry');

    return (
        <section id='contact' className='contact-section'>
            <h2 className='section-title'>Contact Me</h2>
            <p className='section-description'>
                Have a question or want to work together? Reach out to me using
                the form below.
            </p>
            {state.succeeded ? (
                <div className='success-message'>
                    <p>
                        Thanks for contacting! I'll try to get back to you as
                        soon as possible.
                    </p>
                    <form className='contact-form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='description'>Message:</label>
                    <textarea
                        id='description'
                        name='description'
                        required
                    />
                </div>
                <button type='submit' disabled={state.submitting}>
                    Submit
                </button>
            </form>
                </div>
                
            ) : (
                <form className='contact-form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' id='name' name='name' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' name='email' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='description'>Message:</label>
                        <textarea
                            id='description'
                            name='description'
                            required
                        />
                    </div>
                    <button type='submit' disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            )}
        </section>
    );
};

export default Contact;
