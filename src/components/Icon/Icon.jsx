import React from 'react';
import './Icon.css';

const Icon = ({ toUrl, src, alt }) => {
  return (
    <a href={toUrl} target='_blank' rel='noopener noreferrer'>
      <img title={alt} className='icon' src={src} alt={alt} />
    </a>
  );
};

export default Icon;
