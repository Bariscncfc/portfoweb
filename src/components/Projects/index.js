import React from 'react';
import './projects.scss';
import {projects} from '../../assets/data/projects';

const Projects = () => {
    return (
        <div className="projects" id="projects">
          <div className="projects__title">
            <h1>Projects</h1>
          </div>
            <div className="projects__container">
                {projects.map((project, index) => {
                    return (
                        <div className="projects__item" key={index}>
                            <div className="projects__item-image">
                                <img src={project.image} alt={project.title}/>
                            </div>
                            <div className="projects__item-info">
                                <h2>{project.title}</h2>
                                <p>{project.desc}</p>
                                <div className="projects__item-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;