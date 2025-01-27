"use client";
import React, { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      email: email,
    };

    emailjs
      .send(
        "service_k3pv4za",
        "template_xff8jll",
        templateParams,
        "oU8gvUbQB1fyopx-F"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessage("Thank you for subscribing!");
          setEmail("");
        },
        (err) => {
          console.log("FAILED...", err);
          setMessage("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div className="flex justify-center">
      <div className="subscribe_box w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-5 shadow-sm mt-10 rounded-md border-2 border-solid border-gray-200">
        <div className="title flex items-center gap-2">
          <Image
            src={"/email.png"}
            width={30}
            height={25}
            className="opacity-70"
            alt="email"
          />
          <span className="text-[12px]">Stay up to date</span>
        </div>
        <p className="text-[11px] text-gray-500 mb-4 mt-4">
          Get notified when I publish something new. And unsubscribe at any
          time.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input_section flex w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@gmail.com"
              className="flex-grow text-[10px] p-2 border-2 border-r-0 border-solid border-gray-400 outline-none rounded-l-md"
              required
            />
            <button className="bg-black text-white text-[12px] p-2 rounded-r-md">
              Get updates
            </button>
          </div>
        </form>
        {message && <p className="text-sm text-gray-700 mt-2">{message}</p>}
      </div>
    </div>
  );
};

export default Subscribe;
