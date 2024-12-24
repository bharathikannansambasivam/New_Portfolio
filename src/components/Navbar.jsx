import React, { useState } from "react";
import { Link } from "react-router-dom";
import hamburgerMenu from "../assets/hamburgerMenu.svg";
function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <>
      <div className="flex bg-gray-50 justify-between text-xl px-5 p-3 ">
        <div className="font-lato">
          <h1>Portfolio</h1>
        </div>
        <div>
          <div className=" hidden  sm:block ">
            <ul className="flex gap-3 ">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <img
              onClick={handleToggle}
              src={hamburgerMenu}
              alt=""
              className=" sm:hidden  "
            />
          </div>
        </div>
      </div>
      {toggle && (
        <div className="    w-full flex flex-col items-end ">
          <ul className=" gap-1  w-1/2  bg-gray-200  flex flex-col justify-center items-center p-3">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
