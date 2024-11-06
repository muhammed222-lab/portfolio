"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import emailjs from "emailjs-com";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    urgent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      urgent: formData.urgent ? "Yes" : "No",
    };

    // Send email to yourself
    emailjs
      .send(
        "service_k3pv4za", // Your service ID
        "template_1b25bm9", // Your template ID for your email
        templateParams,
        "oU8gvUbQB1fyopx-F" // Your user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);

        // Send confirmation email to user
        emailjs
          .send(
            "service_k3pv4za", // Use the same or different service ID
            "template_xff8jll", // Your confirmation email template ID
            { name: formData.name, email: formData.email },
            "oU8gvUbQB1fyopx-F"
          )
          .then(() => {
            alert(
              "Message sent successfully! You will receive a confirmation email."
            );
          })
          .catch((err) => {
            console.error("Confirmation email failed...", err);
            alert(
              "Message sent, but failed to send confirmation email. Please check your email."
            );
          });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again later.");
      });

    // Reset form
    setFormData({ name: "", email: "", message: "", urgent: false });
  };

  return (
    <div className="bg-white -mt-15 pt-[30px] p-7">
      <div className="contact">
        <div className="me_section mt-[6rem] p-8">
          <div>
            <Image
              src={"/favicon.ico"}
              alt="Muhammed"
              width={"100"}
              height={"100"}
              className="mb-18 border w-[70px] rounded-full bg-gray-300 sticky"
            />
            <h2 className="text-3xl font-bold mt-[20px] mb-[10px] w-[500px]">
              Contact me for your new project, team, hire, or freelancing
              service. Send a message to me.
            </h2>
            <p className="w-[600px] mt-5 text-sm">
              I'm available for instant hiring opportunities.
            </p>
          </div>
        </div>
        <div className="flex justify-between w-[90%]">
          <div>
            <div className="social_media">{/* Social Media Links */}</div>
            <hr className="mt-5" />
            <div className="phone mt-4 mb-4">
              {/* Phone and contact details */}
            </div>
          </div>
          <div className="form mb-5">
            <h1 className="text-[15px] text-gray-700 mb-4 font-bold">
              Contact Me
            </h1>
            <form
              action="#"
              onSubmit={handleSubmit}
              className="flex flex-col p-4 bg-gray-100 rounded-lg w-[400px] border border-gray-300">
              <div>
                <label htmlFor="name" className="text-[13px] text-gray-500">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="my name"
                  id="name"
                  name="name"
                  required
                  onChange={handleChange}
                  className="w-[100%] h-8 pl-4 mb-4 text-[12px] outline-none rounded-md"
                />
              </div>
              <div>
                <label className="text-[13px] text-gray-500" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="myemail@gmail.com"
                  id="email"
                  name="email"
                  required
                  onChange={handleChange}
                  className="w-[100%] h-8 pl-4 mb-4 text-[12px] outline-none rounded-md"
                />
              </div>
              <div>
                <label className="text-[13px] text-gray-500" htmlFor="Message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="Message"
                  required
                  onChange={handleChange}
                  className="w-[100%] h-[200px] pt-2 resize-none pl-4 mb-4 text-[12px] outline-none rounded-md"></textarea>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="urgent"
                  id="urgent"
                  onChange={handleChange}
                />
                <label
                  className="text-[13px] text-gray-500 pl-2"
                  htmlFor="urgent">
                  Mark as urgent
                </label>
              </div>
              <button className="bg-[#009688] p-2 mt-4 text-white rounded-sm">
                Send message
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default page;
