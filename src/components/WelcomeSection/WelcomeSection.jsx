import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <section className='first-section' id='home'>
      <div className='first-section-main'>
        <div className='first-section-text'>
          <h3 className='text-pop'>
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
        <img className='profile-image' src='/profilePic.jpg' alt='' />
      </div>
    </section>
  );
};

export default WelcomeSection;
