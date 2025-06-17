import  { useEffect, useState } from 'react'
import ProjectCard from '../utils/ProjectCard'
import axios from 'axios';
import PropTypes from 'prop-types';
import { BASE_URL } from '../../config';

const ProjectSkeleton = () => (
  <div className="card w-80 lg:w-[350px] bg-base-100 shadow-xl dark:bg-gray-800 animate-pulse">
    <div className="h-52 w-full bg-gray-200 dark:bg-gray-700"></div>
    <div className="card-body">
      <div className="grid grid-cols-3 gap-2">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
      <div className="flex justify-evenly mt-4">
        <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
      <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mt-4"></div>
      <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mt-2"></div>
    </div>
  </div>
);

const AllProjects = ({ category }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/api/project/getProjectByCategory?category=${category}`);
        setProjects(response.data.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [category]);

  if (loading) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-5 lg:gap-10'>
        {[1, 2, 3, 4].map((index) => (
          <ProjectSkeleton key={index} />
        ))}
      </div>
    );
  }
  
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
