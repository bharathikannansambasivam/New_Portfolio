import React from "react";

function Projects() {
  const projects = [
    {
      project_name: "MERN Bookstore Web App",
      Technologies:
        " MongoDB, Express.js, React, Node.js, Tailwind CSS, Formik, Yup.",
      github_repo: "https://github.com/bharathikannansambasivam/MERN-Bookstore",
      live_url: "https://mern-bookstore-one.vercel.app/",
    },
  ];
  return (
    <div>
      {" "}
      <h1 className="text-3xl font-bold underline mb-6">Projects</h1>
      <div></div>
    </div>
  );
}

export default Projects;
