import React from "react";
import javascript from "../assets/skills_icon/javascript.svg";
import html from "../assets/skills_icon/html.svg";
import css from "../assets/skills_icon/css.svg";
import react from "../assets/skills_icon/react.svg";
import mongodb from "../assets/skills_icon/mongodb.svg";
import mongoose from "../assets/skills_icon/mongoose.svg";
import expressjs from "../assets/skills_icon/expressjs.svg";
import node from "../assets/skills_icon/nodejs.svg";
import figma from "../assets/skills_icon/figma.svg";
import tailwindcss from "../assets/skills_icon/tailwind.svg";
import github from "../assets/skills_icon/github.svg";
import postman from "../assets/skills_icon/postman.svg";

function Skills() {
  const skills = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "Tailwind CSS", icon: tailwindcss },
    { name: "React", icon: react },
    { name: "Node.js", icon: node },
    { name: "Express.js", icon: expressjs },
    { name: "MongoDB", icon: mongodb },
    { name: "Mongoose", icon: mongoose },
    { name: "Postman", icon: postman },
    { name: "Figma", icon: figma },
    { name: "GitHub", icon: github },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold underline  mb-2">Skills</h1>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {skills.map((skill) => (
          <div className=" p-3">
            <img
              key={skill.name}
              className="h-16 w-16  hover:scale-110 transition-transform duration-200"
              src={skill.icon}
              alt={`${skill.name} icon`}
            />
            <p className="text-center  pt-5">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
