import React from 'react';
import Icon from '../Icon/Icon';
import './Aside.css';

const Aside = () => {
  return (
    <aside className='aside-links'>
      <Icon
        toUrl={'https://github.com/camilonore'}
        src={'./github.svg'}
        alt={'GitHub'}
      />
      <Icon
        toUrl={'https://www.linkedin.com/in/camilo-nore/'}
        src={'./linkedin.svg'}
        alt={'Linkedin'}
      />
      <Icon
        toUrl={'mailto:caminore22@gmail.com'}
        src={'./mail.svg'}
        alt={'Gmail'}
      />
    </aside>
  );
};

export default Aside;
