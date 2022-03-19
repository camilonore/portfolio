import React from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from '../../projects';

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <h2>Projects</h2>
      {projects.map((project) => {
        return (
          <ProjectCard
            imgUrl={project.imgUrl}
            title={project.title}
            description={project.description}
            repository={project.repository}
            website={project.website}
          />
        );
      })}
    </div>
  );
};

export default Projects;
