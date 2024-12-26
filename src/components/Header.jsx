import React from "react";

function Header() {
  const button = [
    {
      content: "Hire Me",
      link: "https://www.linkedin.com/in/bharathikannan-sambasivam/",
    },
    {
      content: "Resume",
      link: "../../public/resume.pdf",
    },
  ];

  return (
    <div id="home" className="bg-blue-50 pl-12 p-5">
      <div className="flex flex-col ">
        <h3 className="font-bold text-xl  sm:text-4xl ">Hello! I'm</h3>
        <h1 className="font-extrabold text-3xl sm:text-6xl  text-violet-700">
          Bharathikannan
        </h1>{" "}
        <p className="text-lg font-semibold text-gray-600 mt-2">
          University Rank Holder 🎓🚀
        </p>
      </div>
      <p className="text-lg font-rubik text-gray-600 mt-4 sm:w-10/12">
        Aspiring MERN Stack Developer, currently pursuing my MCA, focused on
        creating modern, user-friendly web applications.
      </p>

      <div className="flex  gap-5">
        {button.map((btn, index) => (
          <button
            key={index}
            className="bg-orange-500 p-3 rounded-full px-5 text-white font-semibold hover:bg-violet-700 mt-5 "
          >
            <a href={btn.link} target="_blank">
              {btn.content}
            </a>{" "}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Header;
