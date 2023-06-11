import React from "react";
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">Frontend Developer</h2>
                <br />
                <div>
                    <Link to="projects" smooth duration={500} className="group text-white w-fit px-4 py-2 my-2 flex items-center rounded-lg bg-gradient-to-r from-gray-800 to-gray-600 cursor-pointer">
                        Projects
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardDoubleArrowRight size={25} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;