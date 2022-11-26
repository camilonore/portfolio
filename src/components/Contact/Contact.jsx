import React from 'react';
import './Contact.css';
import {
  h2,
  description,
  label,
  button,
  input,
} from '../../styles/styles.module.css';

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
      <h2 className={h2}>Contact</h2>
      <p className={description}>Do you want to know more about my work?</p>
      <form onSubmit={handleSubmit} className='contact-form'>
        <label className={label} htmlFor='subject'>
          Subject:
        </label>
        <input
          className={input}
          type='text'
          name='subject'
          id='subject'
          placeholder='I will hire you'
        />
        <label className={label} htmlFor='message'>
          Your message:
        </label>
        <textarea
          className={input}
          name='message'
          id='message'
          placeholder='I want you on my team!'
          rows='5'
        ></textarea>
        <button className={button} type='submit'>
          Send Message
        </button>
      </form>
    </footer>
  );
};

export default Contact;
