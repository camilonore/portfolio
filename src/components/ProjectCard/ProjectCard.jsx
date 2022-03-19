import React from 'react';
import Icon from '../Icon/Icon';
import './ProjectCard.css';

const ProjectCard = ({ imgUrl, title, description, repository, website }) => {
  return (
    <section className='card'>
      <a
        title={website}
        href={website}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={imgUrl} alt={title} />
      </a>
      <aside className='project-description'>
        <h3>{title}</h3>
        <p>{description}</p>
        <Icon toUrl={website} src={'./public/safari.svg'} alt={'Website'} />
        <Icon toUrl={repository} src={'./public/github.svg'} alt={'GitHub'} />
      </aside>
    </section>
  );
};

export default ProjectCard;
