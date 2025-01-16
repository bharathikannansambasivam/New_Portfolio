import React from "react";
import sslc from "../assets/education_icons/sslc.svg";
import hsc from "../assets/education_icons/hsc.svg";
import ug from "../assets/education_icons/ug.svg";
import pg from "../assets/education_icons/pg.svg";

function About() {
  const education = [
    {
      instituteName: "Annai College Of Arts & Science ",
      place: "Kovilachery,Kumbakonam",

      course: "Master of Computer Applications (MCA)",
      duration: "08/2024 - Present",
      grade: "Pursuing",
      image: pg,
    },
    {
      instituteName: "Government Arts College (Autonomous)",
      place: "Kumbakonam",

      course: "Bachelor of Science (BSc) in Computer Science",
      duration: "09/2021 - 03/2024",
      grade: "9.23/10 CGPA",
      image: ug,
    },
    {
      instituteName: "Little Flower Higher Secondary School",
      place: "Kumbakonam",
      course: "HSC (Higher Secondary Certificate)",
      duration: "2020-2021",
      grade: "85%",
      image: hsc,
    },

    {
      instituteName:
        "Sri Kumara Gurubarar Matriculation Higher Secondary School",
      place: "Thiruppanandal",
      course: "SSLC (Secondary School Leaving Certificate)",
      duration: "2018-2019",
      grade: "81%",
      image: sslc,
    },
  ];

  return (
    <div id="education">
      <h1 className="text-3xl font-bold underline  text-center  sm:ml-10 sm:text-start">
        Educations
      </h1>

      <div
        id="about"
        className="flex flex-col flex-row-reverse justify-center items-center p-5 sm:p-2 "
      >
        <div className="relative border-l-4 border-orange-500 top-6  ">
          {education.map((edu, index) => (
            <div
              key={index}
              className="mb-6 ml-6 border-2 bg-blue-50 p-4  flex items-center gap-4 rounded-lg"
            >
              {" "}
              <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-2.5 "></div>
              <img
                className="h-16 w-16 rounded-full"
                src={edu.image}
                alt={`${edu.course} logo`}
              />
              <div className=" flex flex-col gap-2">
                <h1 className="text-xl font-bold">{edu.course}</h1>
                <p className="text-sm">
                  <b className="text-base">InstituteName </b>:{" "}
                  {edu.instituteName}
                </p>

                <p className="text-sm">
                  <b className="text-base"> Place</b>: {edu.place}
                </p>
                <p className="text-sm italic">
                  {" "}
                  <b className="text-base">Duration </b> : {edu.duration}
                </p>
                {edu.grade && (
                  <p className="text-sm">
                    <b className="text-base">Grade </b>: {edu.grade}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
