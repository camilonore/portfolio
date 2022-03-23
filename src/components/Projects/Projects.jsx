import React from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from '../../config/projects';

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <h2>Projects</h2>
      {projects.map((project) => {
        return <ProjectCard {...project} />;
      })}
    </div>
  );
};

export default Projects;
