import React from 'react';
import './Contact.css';

const Contact = () => {
  const url = 'mailto:caminore22@gmail.com';
  function handleSubmit(evt) {
    evt.preventDefault();
    const subject = evt.target[0].value;
    const body = evt.target[1].value;
    window.open(`${url}?subject=${subject}&&body=${body}`);
  }
  return (
    <footer className='contact' id='contact'>
      <h2>Contact</h2>
      <p>Do you want to know more about my work?</p>
      <form onSubmit={handleSubmit} className='contact-form'>
        <label htmlFor='subject'>Subject:</label>
        <input
          type='text'
          name='subject'
          id='subject'
          placeholder='I will hire you'
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
