import React from "react";
import ExperienceCard from "../utils/ExperienceCard";
import codeSam from "../../assets/CodeSam.png";
import projectCommerce from "../../assets/E-com.png"
import Cp from "../../assets/Cp.png"

const experienceData = [
  {
    heading: "Code Samurai Hacthons",
    title: "Project Link",
    description:
      "In the 2024 Code Samurai hackathon, I collaborated within a team, showcasing my skills in diverse domains. During the preliminary round, I developed a REST API for train management, demonstrating proficiency in backend technologies. In the subsequent round, I engineered a full-stack web application for waste management in Dhaka City, underscoring my prowess in end-to-end project execution. After qualifying for the final round, we implemented an extension of the second round's problem set, further enhancing the full-stack web application.",
    img: codeSam,
    date: "2024",
    links: [
      {
        title: "Code",
        url: "https://github.com/Ajor-Saha/cs24-p2-Team_Nande",
      },
      {
        title: "LiveApp",
        url: "https://cs24-p2-team-nande-rvfw.vercel.app/",
      },
    ],
  },
  {
    heading: "E-commerce-Project",
    title: "Project Link",
    description:
      "FashionFleet is a full-stack web application built with MERN stack, providing users with a seamless shopping experience for clothes. It features user authentication, responsive web design, dark mode/light mode, sections for different clothing categories (men, women, kids), sections for new arrivals and shopping list, advanced search functionality, payment gateway integration with Stripe, user profile management, and an admin dashboard for managing products, orders, users, and comments.",
    img: projectCommerce,
    date: "5/2/2024-20/3/2024",
    links: [
      { title: "FashionFleet", url: "https://github.com/Ajor-Saha/E-commerce-App" },
    ],
  },
  {
    heading: "Competitive Programming",
    title: "Online Judges Link",
    description:
      "Engaging in competitive programming platforms like CodeChef, Codeforces, and V-Judge, I've delved into a myriad of Data Structures and Algorithms topics. Through rigorous practice and participation in coding contests, I've honed my problem-solving skills and gained proficiency in tackling complex coding challenges efficiently. This experience has not only expanded my technical knowledge but also enhanced my ability to analyze problems and devise optimal solutions.",
    img: Cp,
    date: "2022-2023",
    links: [
      { title: "CodeChef", url: "https://www.codechef.com/users/ajor_63" },
      { title: "CodeForces", url: "https://codeforces.com/profile/Ajor" },
      { title: "V-Judge", url: "https://vjudge.net/user/2020331063_Ajor" },
    ],
  },
];

const Experience = () => {
  return (
    <div className="py-10 px-10 bg-orange-50 dark:bg-[#111827]" id="experience">
      <div className="gap-1 flex flex-col items-center">
        <span className="font-bold text-2xl py-2">Experience</span>
        <span className="border-b-4 border-blue-950 dark:border-blue-400 w-40"></span>
        <p className="lg:px-10 font-serif ml-2 py-2">
          Throughout my journey as a{" "}
          <span className="font-semibold">full stack developer</span>, I've
          spearheaded projects from conceptualization to deployment,
          demonstrating expertise in both front-end and back-end development.{" "}
          <span className="font-semibold">Engaging in hackathons</span>, I
          further sharpened my{" "}
          <span className="font-semibold">problem-solving</span> and web
          development skills, thriving under pressure. Grounded in{" "}
          <span className="font-semibold">competitive programming</span> and
          proficient in{" "}
          <span className="font-semibold">data structures & algorithms</span>, I
          offer over a year of adeptness in tackling intricate coding challenges
          with ingenuity and accuracy
        </p>
      </div>
      <div className="py-5 gap-10">
      {experienceData.map((experience, index) => (
          <ExperienceCard key={index} data={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
