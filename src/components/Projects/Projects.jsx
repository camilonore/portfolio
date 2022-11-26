import React from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from '../../config/projects';
import { h2 } from '../../styles/styles.module.css';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h2 className={h2}>Projects</h2>
      {projects.map((project) => {
        return <ProjectCard {...project} />;
      })}
    </section>
  );
};

export default Projects;
