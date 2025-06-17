
import { IoLogoGithub } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaCode, FaMoon,  } from "react-icons/fa6";
import { IoIosLogIn } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/theme/themeSlice";
import { HiSun } from "react-icons/hi";
import avatar from "../../assets/avatar.avif"


const Header = () => {
  const { currentUser } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className="navbar bg-base-100 fixed w-full z-[100] dark:text-white dark:bg-[#222831]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black dark:bg-gray-600 dark:text-gray-50"
          >
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#skills">Skills</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#experience">Experience</a>
            </li>
            <li>
              <a href="/#education">Education</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl font-bold hover:dark:bg-gray-700 hover:rounded-md">
          Ajor
          <FaCode />
        </Link>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li className="dark:hover:bg-gray-700 hover:rounded-md">
            <a href="/#about">About</a>
          </li>
          <li className="dark:hover:bg-gray-700 hover:rounded-md">
            <a href="/#skills">Skills</a>
          </li>
          <li className="dark:hover:bg-gray-700 hover:rounded-md">
            <a href="/#projects">Projects</a>
          </li>
          <li className="dark:hover:bg-gray-700 hover:rounded-md">
            <a href="/#experience">Experience</a>
          </li>
          <li className="dark:hover:bg-gray-700 hover:rounded-md">
            <a href="/#education">Education</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <a
          className="w-12 h-8  dark:text-white mt-3"
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <HiSun size={20} /> : <FaMoon />}
        </a>
        {currentUser ? (
          <Link to="/dashboard" className="px-2">
            <div className="avatar">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={avatar} alt="profile" />
              </div>
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <IoIosLogIn size={20} />
          </Link>
        )}
        <a className="btn" href="https://github.com/Ajor-Saha">
          <IoLogoGithub />
          Github
        </a>
      </div>
    </div>
  );
};

export default Header;
