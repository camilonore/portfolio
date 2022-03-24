import Icon from '../Icon/Icon';
import './ProjectCard.css';
import styles from '../../styles/styles.module.css';

const ProjectCard = ({ imgUrl, title, description, repository, website }) => {
  return (
    <section className='card'>
      <a
        title={website}
        href={website}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={imgUrl} alt={title} loading='lazy' />
      </a>
      <aside className='project-description'>
        <h3 className={styles.h3}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Icon toUrl={website} src={'/safari.svg'} alt={'Website'} />
        <Icon toUrl={repository} src={'/github.svg'} alt={'GitHub'} />
      </aside>
    </section>
  );
};

export default ProjectCard;
