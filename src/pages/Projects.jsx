import React from "react";
import interactiveCard from "../assets/project_icons/interactiveCard.jpg";
import findmydocs from "../assets/project_icons/fmd-1.png";
import bookstore from "../assets/project_icons/bookstore.png";
import netflixgpt from "../assets/project_icons/Netflixgpt.png";
import github from "../assets/skills_icon/github.svg";
import live from "../assets/project_icons/live.svg";
import playstore from "../assets/project_icons/playstore.svg";
import dictionary from "../assets/project_icons/dictionary.jpg";

function Projects() {
  const projects = [
    {
      img: findmydocs,
      project_name: "FindMyDocs – MERN Document Store",
      Technologies:
        "MongoDB, Express.js, React, Node.js, Tailwind CSS, React Quill, Formik, Yup, Axios, JWT, OpenRouter (Mistral-7B Instruct).",
      github_repo:
        "https://github.com/bharathikannansambasivam/text-editor-frontend",
      live_url: "https://text-editor-frontend-teal.vercel.app",
      Playstore_URL:
        "https://play.google.com/store/apps/details?id=app.vercel.text_editor_frontend_teal.twa&hl=en_IN",
      features:
        "Full-stack document management app with CRUD, JWT authentication, dynamic variables ({{name}}), search by title, document preview, editing, downloading, and TWA deployment with Play Store support.",
    },

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
      img: netflixgpt,
      project_name: "NetflixGPT – AI Movie Recommendation App",
      Technologies:
        "React, Redux Toolkit, Tailwind CSS, Firebase Authentication, TMDB API, Axios, OpenRouter (Mistral-7B Instruct).",
      github_repo: "https://github.com/bharathikannansambasivam/Netflix-GPT",
      live_url: "https://bk-netflixgpt.web.app/",
      features:
        "Netflix-inspired AI movie recommendation app with Firebase authentication and GPT-powered movie suggestions using TMDB posters.",
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
    {
      img: dictionary,
      project_name: "Dictionary web app- Frontend Mentor Challenge",
      Technologies: "React, Tailwind CSS, Dictionary API, Unsplash API",
      github_repo:
        "https://github.com/bharathikannansambasivam/Dictionary-web-app",
      live_url: "https://dictionarymaster.netlify.app/",
      features:
        "Search word meanings with audio pronunciation and related images.",
    },
  ];

  return (
    <div
      id="projects"
      className="container mx-auto px-4 py-8 overflow-hidden max-w-full"
    >
      <h1 className="text-3xl font-bold underline mb-6 text-center sm:text-start  sm:ml-5">
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

      <div className="w-full flex justify-center  text-center">
        {" "}
        <a
          target="_blank"
          className="bg-orange-500 flex gap-3 p-3 rounded-full px-5 text-white font-semibold hover:bg-violet-700 mt-5 "
          href="https://www.frontendmentor.io/profile/bharathikannansambasivam"
        >
          {" "}
          More Projects
        </a>
      </div>
    </div>
  );
}

export default Projects;
