import React from "react";
import interactiveCard from "../assets/project_icons/interactiveCard.jpg";
import entertainment from "../assets/project_icons/entertainment.jpg";
import bookstore from "../assets/project_icons/bookstore.png";
import todo from "../assets/project_icons/todo.jpg";
import github from "../assets/skills_icon/github.svg";
import live from "../assets/project_icons/live.svg";
import playstore from "../assets/project_icons/playstore.svg";

function Projects() {
  const projects = [
    {
      img: bookstore,
      project_name: "MERN Bookstore Web App",
      Technologies:
        "MongoDB, Express.js, React, Node.js, Tailwind CSS, Formik, Yup.",
      github_repo: "https://github.com/bharathikannansambasivam/MERN-Bookstore",
      live_url: "https://mern-bookstore-one.vercel.app/",
      features:
        "Full-stack CRUD app for managing books with MongoDB, Express, React, and Node.js.",
    },

    {
      img: entertainment,
      project_name: "MERN Entertainment Web App - Frontend Mentor Challenge",
      Technologies: "MongoDB, Express.js, React, Node.js, Tailwind CSS.",
      github_repo:
        "https://github.com/bharathikannansambasivam/EntertainmentApp",
      live_url: "https://entertainment-app-navy.vercel.app/",
      features:
        "Lazy loading, bookmarking, and Storybook implementation for an entertainment app.",
    },

    {
      img: todo,
      project_name: "Todo - TWA",
      Technologies: "React, Tailwind CSS, Material UI",
      github_repo: "https://github.com/bharathikannansambasivam/Drag-drop",
      live_url: "https://drag-drop-beryl-three.vercel.app/",
      Playstore_URL:
        "https://play.google.com/store/apps/details?id=app.vercel.drag_drop_2.twa&pcampaignid=web_share",
      features:
        "TWA-based to-do app with task management and local storage, available for Play Store installation.",
    },

    {
      img: interactiveCard,
      project_name: "Interactive Form - Frontend Mentor Challenge",
      Technologies: "React, Tailwind CSS, Formik, Yup.",
      github_repo:
        "https://github.com/bharathikannansambasivam/Interactive-credit-card",
      live_url: "https://joyful-longma-53a307.netlify.app/",
      features:
        "Interactive credit card form using Formik and Yup for form validation and handling.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 overflow-hidden max-w-full">
      <h1 className="text-3xl font-bold underline mb-6 text-center">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border h-full p-4 rounded-lg shadow-lg">
            <img
              className="h-56 w-full mb-4 rounded object-fill "
              src={project.img}
              alt={`Preview of ${project.project_name}`}
            />
            <h2 className="text-xl font-semibold mb-2">
              {project.project_name}
            </h2>
            <p className="text-gray-700 mb-2 text-sm sm:text-base">
              <b>Technologies Used: </b>
              {project.Technologies}
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              <b>Features: </b>
              {project.features}
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href={project.github_repo}
                target="_blank"
                className="text-blue-500 hover:underline flex items-center gap-2"
              >
                <img className="h-5 w-5 object-contain" src={github} alt="" />
                GitHub Repo
              </a>
              <a
                href={project.live_url}
                target="_blank"
                className="text-blue-500 hover:underline flex items-center gap-2"
              >
                <img className="h-5 w-5 object-contain" src={live} alt="" />
                Live Demo
              </a>
              {project.Playstore_URL && (
                <a
                  href={project.Playstore_URL}
                  target="_blank"
                  className="text-blue-500 hover:underline flex items-center gap-2"
                >
                  <img
                    className="h-5 w-5 object-contain"
                    src={playstore}
                    alt=""
                  />
                  Play Store
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
