import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    // <div className='first-section'>
    <section className='first-section' id='home'>
      <div className='content-text'>
        <h3 className='text_pop'>
          <span>C</span>
          <span>a</span>
          <span>m</span>
          <span>i</span>
          <span>l</span>
          <span>o</span>
          <span>&nbsp;</span>
          <span>N</span>
          <span>o</span>
          <span>r</span>
          <span>e</span>
          <br />
          Web Developer.
        </h3>
        <a
          className='curriculum-button'
          target='_blank'
          rel='noopener noreferrer'
          href='/CamiloNore.pdf'
        >
          View CV
        </a>
      </div>
      <img src='/profilePic.jpg' alt='' />
    </section>
  );
};

export default WelcomeSection;
