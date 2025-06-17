import  { useEffect, useState } from 'react'
import ProjectCard from '../utils/ProjectCard'
import axios from 'axios';
import PropTypes from 'prop-types';
import { BASE_URL } from '../../config';

const AllProjects = ({ category }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/project/getProjectByCategory?category=${category}`);
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

AllProjects.propTypes = {
  category: PropTypes.string.isRequired
}

export default AllProjects
