import React from 'react';
import './About.css';
import { h3, description } from '../../styles/styles.module.css';

const About = () => {
  return (
    <aside className='about-section'>
      <h3 className={h3}>About me</h3>
      <p className={description}>
        I am a frontend developer, I am interested in learning new technologies
        and working on different types of projects. I am a quick learner and am
        able to work independently. I am also interested in team collaboration
        and enjoy working in a team environment.
      </p>
    </aside>
  );
};

export default About;
