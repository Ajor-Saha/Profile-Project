import React from "react";
import { Button } from "flowbite-react";

// eslint-disable-next-line react/prop-types
const SkillCard = ({ skills, heading }) => {
  return (
    <div className="flex flex-col h-auto lg:h-[480px]   dark:border-gray-700 dark:bg-gray-900 bg-slate-50 w-[350px] lg:w-[450px] gap-5 border-2 shadow-xl rounded-xl py-10 px-8   cursor-pointer transform-gpu transition-transform duration-400 hover:-translate-y-2 hover:shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">{heading}</h2>
      <div className="flex flex-wrap justify-evenly gap-5">
        
        {skills.map((skill, index) => (
          <Button outline gradientDuoTone="purpleToBlue" size="lg" key={index}>
            <span className="text-black dark:text-white mt-1 px-2 font-bold">
              {React.createElement(skill.icon)}
            </span>
            <span className="">{skill.text}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
