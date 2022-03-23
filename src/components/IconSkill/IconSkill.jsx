import React from 'react';
import './IconSkill.css';

const IconSkill = ({ iconUrl, text }) => {
  return (
    <div className='skill-icon'>
      <img src={iconUrl} alt={text} loading='lazy' />
      <p>{text}</p>
    </div>
  );
};

export default IconSkill;
