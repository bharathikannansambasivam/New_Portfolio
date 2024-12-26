import React, { useState } from "react";
import hamburgerMenu from "../assets/hamburgerMenu.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="flex bg-gray-50 justify-between text-xl px-5 p-3">
        <div className="font-lato">
          <h1 className="font-bold text-4xl">
            <span className="text-orange-500">Port</span>folio
          </h1>
        </div>
        <div>
          <div className="hidden sm:block">
            <ul className="flex gap-3">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#education">Educations</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <img
              onClick={handleToggle}
              src={hamburgerMenu}
              alt="Hamburger Menu"
              className="sm:hidden"
            />
          </div>
        </div>
      </div>
      {toggle && (
        <div className="w-full flex flex-col items-end absolute ">
          <ul className="gap-1 w-1/2 font-bold rounded-lg bg-orange-50 flex flex-col  justify-center items-center p-3">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#education">Educations</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
