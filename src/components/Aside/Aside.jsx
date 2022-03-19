import React from 'react';
import Icon from '../Icon/Icon';
import './Aside.css';

const Aside = () => {
  return (
    <aside className='aside-links'>
      <Icon
        toUrl={'https://github.com/camilonore'}
        src={'./public/github.svg'}
        alt={'GitHub'}
      />
      <Icon
        toUrl={'https://www.linkedin.com/in/camilo-nore/'}
        src={'./public/linkedin.svg'}
        alt={'Linkedin'}
      />
      <Icon
        toUrl={'mailto:caminore22@gmail.com'}
        src={'./public/mail.svg'}
        alt={'Gmail'}
      />
    </aside>
  );
};

export default Aside;
