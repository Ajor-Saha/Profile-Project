import SkillCard from '../utils/SkillCard';
import { FaReact, FaCss3Alt, FaHtml5, FaDatabase } from 'react-icons/fa'; // Import icons from Font Awesome
import { SiRedux, SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiDocker, SiGit, SiGithub, SiPostman, SiVisualstudiocode, SiVercel, SiCplusplus, SiC, SiJavascript, SiPostgresql  } from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb";
import { DiJava, DiNodejs } from "react-icons/di";
import { SiTypescript } from "react-icons/si";


const frontendData = [
  { text: "React.js", icon: FaReact },
  { text: "Redux", icon: SiRedux},
  { text: "HTML5", icon: FaHtml5 }, // Use FaHtml5 from Font Awesome
  { text: "CSS3", icon: FaCss3Alt },
  { text: "Tailwind CSS", icon: SiTailwindcss },
  { text: "JavaScript", icon: SiJavascript },
  { text: "Next.js", icon: TbBrandNextjs },
];

const backendData = [
    { text: "Node Js", icon: DiNodejs },
    { text: "Express Js", icon: SiExpress},
    { text: "MongoDB", icon: SiMongodb }, // Use FaHtml5 from Font Awesome
    { text: "MySQL", icon: SiMysql },
    { text: "Postgresql", icon: SiPostgresql },
];

const ProgrammingData = [
    { text: "Java", icon: DiJava },
    { text: "C++", icon: SiCplusplus},
    { text: "C", icon: SiC},
    { text: "TypeScript", icon: SiTypescript },
    { text: "Data Structure", icon: FaDatabase},
    { text: "Algorithm", icon: FaDatabase },
    
];

const othersData = [
    { text: "Docker", icon: SiDocker },
    { text: "Git", icon: SiGit },
    { text: "Github", icon: SiGithub }, // Use FaHtml5 from Font Awesome
    { text: "Vercel", icon: SiVercel },
    { text: "Postman", icon: SiPostman },
    { text: "VS Code", icon: SiVisualstudiocode },
];

const Skills = () => {
  return (
    <div className='py-16 flex flex-col  justify-center items-center px-10 bg-orange-50 dark:text-gray-50 dark:bg-[#101214]' id="skills">
      <h1 className='text-center text-3xl font-bold py-5'>Skills</h1>
      <p className='text-sm px-10 font-semibold py-2'>As a full stack developer, I possess a versatile skill set encompassing both front-end and back-end technologies, enabling me to craft dynamic and comprehensive web solutions.</p>
      <div className='flex flex-wrap justify-center items-center gap-10 lg:gap-20 py-5'>
        <SkillCard skills={frontendData} heading="Frontend"/>
        <SkillCard skills={backendData} heading="Backend"/>
        <SkillCard skills={ProgrammingData} heading="Programming"/>
        <SkillCard skills={othersData} heading="Others"/>
      </div>
    </div>
  )
}

export default Skills;
