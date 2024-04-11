import React, { useEffect, useState } from 'react'
import ProjectCard from '../utils/ProjectCard'
import axios from 'axios';

const AllProjects = ({ category }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`/api/project/getProjectByCategory?category=${category}`);
        setProjects(response.data.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [category]);

  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-5 lg:gap-10'>
      {projects.map(project => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  )
}

export default AllProjects
