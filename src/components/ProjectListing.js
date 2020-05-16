import React from 'react'
import { Link } from 'react-router-dom';

const ProjectListing = ({ project }) => {
  return (
    <div> 
      <p>
        <Link to={`/projects/${project.id}`}><strong>{project.name}:</strong></Link>
        &nbsp;
        {project.description}
      </p>
    </div>
  );
}

export default ProjectListing;
