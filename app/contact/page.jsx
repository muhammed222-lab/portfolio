"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "../components/footer";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    urgent: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: result.message });
        setFormData({ name: "", email: "", message: "", urgent: false });
      } else {
        setStatus({ type: "error", message: result.error });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Try again!" });
    }

    setLoading(false);
  };

  return (
    <div className="bg-white pt-[30px] p-4 sm:p-7">
      <div className="contact">
        <div className="me_section mt-[6rem] p-4 sm:p-8">
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src={"/favicon.ico"}
              alt="Muhammed"
              width={100}
              height={100}
              className="mb-6 border w-[70px] rounded-full bg-gray-300"
            />
            <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-2 text-center lg:text-left">
              Contact me for new projects or freelancing.
            </h2>
            <p className="mt-5 text-sm text-center lg:text-left">
              I'm available for instant hiring opportunities.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between w-full lg:w-[90%] mx-auto">
          <div className="w-full lg:w-[45%]"></div>
          <div className="form mb-5 w-full lg:w-[45%]">
            <h1 className="text-[15px] text-gray-700 mb-4 font-bold">
              Contact Me
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col p-4 bg-gray-100 rounded-lg w-full border border-gray-300"
            >
              <div>
                <label htmlFor="name" className="text-[13px] text-gray-500">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-8 pl-4 mb-4 text-[12px] outline-none rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-[13px] text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-8 pl-4 mb-4 text-[12px] outline-none rounded-md"
                />
              </div>
              <div>
                <label htmlFor="Message" className="text-[13px] text-gray-500">
                  Message
                </label>
                <textarea
                  id="Message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-[200px] pt-2 resize-none pl-4 mb-4 text-[12px] outline-none rounded-md"
                ></textarea>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="urgent"
                  id="urgent"
                  checked={formData.urgent}
                  onChange={handleChange}
                />
                <label
                  className="text-[13px] text-gray-500 pl-2"
                  htmlFor="urgent"
                >
                  Mark as urgent
                </label>
              </div>
              <button
                className="bg-[#009688] p-2 mt-4 text-white rounded-sm"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send message"}
              </button>

              {status && (
                <p
                  className={`mt-3 text-sm ${
                    status.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Page;
