import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ project }) => {
  let frontendTech, backendTech1, backendTech2;
   

   frontendTech = project.frontendStack[0].split(", ")[0]; // Selecting the first element
   backendTech1 = project.backendStack[0].split(", ")[0]; // Selecting the first element
   backendTech2 = project.backendStack[0].split(", ")[1];

   if (project.category == "frontend") {
    frontendTech = project.frontendStack[0].split(", ")[0];
    backendTech1 = project.frontendStack[0].split(", ")[1];
    backendTech2 = project.frontendStack[0].split(", ")[2];
   }

   if (project.category == "backend") {
    frontendTech = project.backendStack[0].split(", ")[0];
    backendTech1 = project.backendStack[0].split(", ")[1];
    backendTech2 = project.backendStack[0].split(", ")[2];
   }
   
  // Selecting the second element
  const descriptionWords = project.description.split(" ");
  const truncatedDescription = descriptionWords.slice(0, 9).join(" ");

  const projectId = project._id;

  return (
    <div className="card w-80 lg:w-[350px] bg-base-100 shadow-xl dark:text-gray-50 dark:bg-gray-800">
      <Link to={`project/${projectId}`}>
        <img
          src={project.projectImages[0]}
          className="h-52 w-full"
          alt="Shoes"
        />
      </Link>

      <div className="card-body">
        <Button.Group outline className="grid grid-cols-3">
          <Button gradientDuoTone="cyanToBlue" className="text-sm">
            {frontendTech}
          </Button>
          <Button gradientDuoTone="cyanToBlue">{backendTech1}</Button>
          <Button gradientDuoTone="cyanToBlue">{backendTech2}</Button>
        </Button.Group>
        <div className="flex justify-evenly">
          <a href={project.sourceCode} target="_blank" rel="noreferrer" className="link link-primary dark:text-white">
            Code
          </a>
          <a href={project.liveWebsiteLink} target="_blank" rel="noreferrer" className="link link-primary dark:text-white">
            LiveApp
          </a>
        </div>
        <h3 className="text-center text-lg font-semibold">
          <Link to={`project/${projectId}`}>{project.name}</Link>
        </h3>
        <p className="text-sm">{truncatedDescription}..</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    frontendStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    backendStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    projectImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    sourceCode: PropTypes.string.isRequired,
    liveWebsiteLink: PropTypes.string.isRequired
  }).isRequired
};

export default ProjectCard;
