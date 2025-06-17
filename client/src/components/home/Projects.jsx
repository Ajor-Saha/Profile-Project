import { Tabs } from "flowbite-react";
import { FaStackExchange } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { LiaNode } from "react-icons/lia";
import { TbBrandReact } from "react-icons/tb";
import AllProjects from "../projects/AllProjects";

const Projects = () => {
  
  return (
    <div
      className="bg-orange-50 dark:text-white dark:bg-[#101214] py-20 px-10 lg:py-24 flex flex-col"
      id="projects"
    >
      <div>
        <h1 className="text-3xl font-bold text-center">Projects</h1>
        <p className="text-md font-semibold py-2 lg:px-32">
          Explore my diverse range of projects showcasing my proficiency across
          the full stack. From dynamic web applications to robust backend
          systems, each project reflects my dedication to innovation and
          problem-solving in the realm of software development.
        </p>
      </div>
      <div className="py-5">
        <Tabs
          aria-label="Tabs with underline"
          style="underline"
          className="flex justify-center items-center"
        >
          <Tabs.Item
            active
            title="Full-Stack"
            icon={FaStackExchange}
            className="flex flex-row"
          >
            <AllProjects category = "full-stack" />
          </Tabs.Item>
          <Tabs.Item
            active
            title="Mern-Stack"
            icon={GoStack}
           
          >
            <AllProjects category = "mern-stack" />
          </Tabs.Item>
          <Tabs.Item
            active
            title="Frontend"
            icon={TbBrandReact}
            
          >
            <AllProjects category = "frontend" />
          </Tabs.Item>
          <Tabs.Item
            active
            title="Backend"
            icon={LiaNode}
            
          >
            <AllProjects category = "backend" />
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
