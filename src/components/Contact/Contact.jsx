import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <footer className='contact' id='contact'>
      <h2>Contact</h2>
      <p>Do you want to know more about my work?</p>
      <form action='' method='post' className='contact-form'>
        <label htmlFor='email'>Your email:</label>
        <input
          type='text'
          name='email'
          id='email'
          placeholder='example@gmail.com'
        />
        <label htmlFor='message'>Your message:</label>
        <textarea
          name='message'
          id='message'
          placeholder='I want you on my team!'
          rows='5'
        ></textarea>
        <button type='submit'>Send Message</button>
      </form>
    </footer>
  );
};

export default Contact;
