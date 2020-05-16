import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ProjectListing from './ProjectListing';

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.214:5000/api/projects').then(res => {
      console.log('projects from api', res.data);
      setProjects(res.data);
    });
  }, []);

  return (
    <>
      <h2>Projects</h2>
      {projects.map(project => (
        <ProjectListing key={project.id} project={project} />
      ))}

    </>

  );
}

export default Projects;
