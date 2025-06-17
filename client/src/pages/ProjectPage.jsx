import axios from "axios";
import{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../config";

const ProjectPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/project/getProjectById/${projectId}`
        );
        setProject(response.data.data);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchProject();
  }, [projectId]);

  //console.log(project);

  return (
    <div className="py-20 min-h-screen px-3 bg-orange-50 dark:bg-[#111827] dark:text-gray-50">
      <div className="font-sans">
        <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
          {project && (
            <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3 bg-gray-100 dark:bg-gray-600 w-full lg:sticky top-0 text-center p-8">
                <img
                  src={project.projectImages[0]}
                  alt="Product"
                  className="w-4/5 rounded object-cover mx-auto"
                />
                <hr className="border-white border-2 my-6" />
                <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center mx-auto">
                  {project.projectImages.slice(1).map((pic, index) => (
                    <img
                      src={pic}
                      alt={`Product${index + 2}`}
                      className="w-24 cursor-pointer"
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white">
                  Project Name: {project.name}
                </h2>
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-50">
                    Project Feature
                  </h3>
                  <ul className="space-y-3 list-disc mt-4 pl-4 text-gray-800 dark:text-gray-50">
                    {project.feature}
                  </ul>
                </div>
                {project.category === "frontend" && (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-50">
                      Frontend TechStack
                    </h3>
                    <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800 dark:text-gray-50">
                      {project.frontendStack.map((techStack, index) =>
                        techStack
                          .split(",")
                          .map((tech, subIndex) => (
                            <li key={`${index}-${subIndex}`}>{tech.trim()}</li>
                          ))
                      )}
                    </ul>
                  </div>
                )}
                {project.category === "backend" && (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-50">
                      Backend TeachStack
                    </h3>
                    <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800 dark:text-gray-50">
                      {project.backendStack.map((techStack, index) =>
                        techStack
                          .split(",")
                          .map((tech, subIndex) => (
                            <li key={`${index}-${subIndex}`}>{tech.trim()}</li>
                          ))
                      )}
                    </ul>
                  </div>
                )}

                {project.category !== "frontend" &&
                  project.category !== "backend" && (
                    <>
                      <div className="mt-8">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-50">
                          Frontend TechStack
                        </h3>
                        <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800 dark:text-gray-50">
                          {project.frontendStack.map((techStack, index) =>
                            techStack
                              .split(",")
                              .map((tech, subIndex) => (
                                <li key={`${index}-${subIndex}`}>
                                  {tech.trim()}
                                </li>
                              ))
                          )}
                        </ul>
                      </div>
                      <div className="mt-8">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-50">
                          Backend TeachStack
                        </h3>
                        <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800 dark:text-gray-50">
                          {project.backendStack.map((techStack, index) =>
                            techStack
                              .split(",")
                              .map((tech, subIndex) => (
                                <li key={`${index}-${subIndex}`}>
                                  {tech.trim()}
                                </li>
                              ))
                          )}
                        </ul>
                      </div>
                    </>
                  )}

                <div className="mt-8 max-w-md">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-50">
                    Project Description
                  </h3>
                  <div className="space-y-3 mt-4">{project.description}</div>
                  <div className="gap-5 flex">
                    <a
                      href={project.sourceCode}
                      className="w-40 mt-8 px-4 py-2 bg-transparent border-2 dark:border-gray-300 border-gray-800 text-gray-800 dark:text-gray-50 font-bold rounded hover:bg-gray-800 hover:text-white dark:hover:bg-gray-600 text-center"
                    >
                      Souce Code
                    </a>
                    <a
                      href={project.liveWebsiteLink}
                      className="w-40 mt-8 px-4 py-2 bg-transparent border-2 border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-50 font-bold rounded hover:bg-gray-800 dark:hover:bg-gray-600 hover:text-white text-center"
                    >
                      Live Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
