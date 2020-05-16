import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

import ActionListing from './ActionListing'

const Project = () => {
  let { id } = useParams();

  const [project, setProject] = useState({
    name: '',
    description: '',
    completed: false,
    actions: []
  });

  useEffect(() => {
    axios.get(`http://192.168.1.214:5000/api/projects/${id}`).then(res => {
      console.log('project data: ', res.data);
      setProject(res.data);
    });
  }, []);

  return (
    <div> 
      <h2>{project.name}</h2>
      <p><strong>Description:</strong> {project.description}</p>
      <p><strong>{project.completed ? 'Complete' : 'Incomplete'}</strong></p>
      <h3>Actions:</h3>
      {project.actions.map(action => (
        <ActionListing key={action.id} action={action} />
      ))}
    </div>
  );
}

export default Project;
