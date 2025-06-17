import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
//import { FaFacebook } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer footer-center px-10 py-16 bg-base-200 text-base-content rounded dark:text-gray-50 dark:bg-[#101214]">
      <nav className="grid grid-flow-col gap-4">
        <a href="/#about" className="link link-hover">About me</a>
        <a href="/#contact" className="link link-hover">Contact</a>
        <a href="/#projects" className="link link-hover">Projects</a>
        <a href="/#experience" className="link link-hover">Experience</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/ajor-saha-9219b2204/" target="_blank">
            <BsLinkedin  size={25}/>
          </a>
          <a href="https://github.com/Ajor-Saha" target="_blank">
            <FaGithubSquare size={27}/>
          </a>
          <a  href="mailto:sokarama79@gmail.com" target="_blank">
            <AiOutlineMail  size={25}/>
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Ajor Saha</p>
      </aside>
    </footer>
  );
};

export default Footer;
