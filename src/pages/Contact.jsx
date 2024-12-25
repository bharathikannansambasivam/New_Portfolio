import React from "react";
import location from "../assets/social_icons/location.svg";
import phone from "../assets/social_icons/phone.svg";
import mail from "../assets/social_icons/mail.svg";
import github from "../assets/social_icons/github.svg";
import linkedin from "../assets/social_icons/linkedin.svg";
import medium from "../assets/social_icons/medium.svg";
import leetcode from "../assets/social_icons/leetcode.svg";

function Contact() {
  const contact_info = [
    {
      icon: location,
      content: "Kumbakonam, India",
    },
    {
      icon: phone,
      content: "+91 9500630655",
    },
    {
      icon: mail,
      content: "bharathikannansambasivam@gmail.com",
    },
  ];

  const social_info = [
    {
      icon: linkedin,
      platform: "Linkedin",
      url: "https://www.linkedin.com/in/bharathikannan-sambasivam/",
    },
    {
      icon: github,
      platform: "GitHub",
      url: "https://github.com/bharathikannansambasivam",
    },
    {
      icon: leetcode,
      platform: "Leetcode",
      url: "https://leetcode.com/u/bharathikannansambasivam/",
    },
    {
      icon: medium,
      platform: "Medium",
      url: "https://medium.com/@bharathikannansambasivam",
    },
    {
      icon: mail,
      platform: "Mail",
      url: "",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold underline mb-6 text-center">
        Contact Info
      </h1>
      <div className="sm:flex  border-orange-500 sm:justify-between items-center">
        <div className="p-4  sm:w-5/12 flex flex-col gap-4 items-start sm:ml-10">
          {contact_info.map((contact, index) => (
            <div key={index} className="flex gap-3 items-center  w-full">
              <img className="h-6 w-6 " src={contact.icon} alt="" />
              <p className="text-black font-semibold ">{contact.content}</p>
            </div>
          ))}{" "}
          <div className="flex mt-4  p-1 justify-around sm:justify-start sm:gap-5   w-full">
            {social_info.map((social) => {
              return (
                <div className="">
                  <a href={social.url} target="_blank">
                    <img className="h-8" src={social.icon} alt="" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:w-1/2">
          <form className="flex flex-col">
            <input
              className="border p-3 m-3 border-gray-500 rounded-xl text-black font-semibold"
              type="text"
              placeholder="Name"
            />
            <input
              className="border p-3 m-3 border-gray-500 rounded-xl text-black font-semibold"
              type="email"
              placeholder="E-mail"
            />
            <input
              className="border p-3 m-3 border-gray-500 rounded-xl text-black font-semibold"
              type="number"
              placeholder="Mobile No."
            />
            <textarea
              className="border p-3 m-3 border-gray-500 rounded-xl text-black font-semibold"
              name="message"
              rows="5"
              placeholder="Message"
            ></textarea>

            <div className="mb-5 flex justify-center items-center">
              <button
                type="submit"
                className="bg-orange-500 text-center w-32 p-3 rounded-full text-white font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
