import React from 'react';
import './Skills.css';
import IconSkill from '../IconSkill/IconSkill';
import skills from '../../config/skills';
import { h2 } from '../../styles/styles.module.css';

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <h2 className={h2}>Skills</h2>
      <section className='icons-container'>
        {skills.map((skill) => {
          return <IconSkill {...skill} />;
        })}
      </section>
    </section>
  );
};

export default Skills;
