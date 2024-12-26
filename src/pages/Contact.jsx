import React from "react";
import location from "../assets/social_icons/location.svg";
import phone from "../assets/social_icons/phone.svg";
import mail from "../assets/social_icons/mail.svg";
import github from "../assets/social_icons/github.svg";
import linkedin from "../assets/social_icons/linkedin.svg";
import medium from "../assets/social_icons/medium.svg";
import leetcode from "../assets/social_icons/leetcode.svg";
import { useFormik } from "formik";
import validationSchema from "../schema/validationSchema.js";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const response = await fetch("https://formspree.io/f/xnnnjgdb", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Message sent successfully!");

        formik.resetForm();
      } else {
        alert("Failed to send message. Please try again.");
      }
    },
  });

  const contact_info = [
    {
      icon: location,
      content: "Chidambaranathapuram,India       ",
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
    <div id="contact">
      <h1 className="text-3xl sm:text-start sm:ml-10 font-bold underline mb-6 text-center">
        Contact Info
      </h1>
      <div className="sm:flex   sm:justify-between items-center">
        <div className="p-4  sm:w-5/12 flex flex-col gap-4 items-start sm:ml-10">
          {contact_info.map((contact, index) => (
            <div key={index} className="flex gap-3 items-center  w-full">
              <img className="h-6 w-6 " src={contact.icon} alt="" />
              <p className="text-black font-semibold ">{contact.content}</p>
            </div>
          ))}{" "}
          <div className="flex mt-4  p-1 justify-around sm:justify-start sm:gap-5   w-full">
            {social_info.map((social, index) => {
              return (
                <div key={index}>
                  <a href={social.url} target="_blank">
                    <img className="h-8" src={social.icon} alt="" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:w-1/2">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col"
            method="POST"
          >
            <input
              className="border p-3 m-3 border-gray-500 rounded-xl text-black font-semibold"
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Name"
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            ) : null}
            <input
              className="border p-3 m-3 border-gray-500 rounded-xl text-black font-semibold"
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            ) : null}
            <input
              className="border p-3 m-3 border-gray-500 rounded-xl text-black font-semibold"
              type="number"
              name="mobile"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobile}
              placeholder="Mobile No."
            />
            {formik.touched.mobile && formik.errors.mobile ? (
              <p className="text-red-500 text-sm">{formik.errors.mobile}</p>
            ) : (
              ""
            )}

            <textarea
              className="border p-3 m-3 border-gray-500 rounded-xl text-black font-semibold"
              name="message"
              rows="5"
              placeholder="Message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <p className="text-red-600 ">{formik.errors.message}</p>
            ) : (
              ""
            )}
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
