"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../components/footer";
import Image from "next/image";
import "../ui/globals.css";

const About = () => {
  const [isAboutPage, setIsAboutPage] = useState(false);

  useEffect(() => {
    if (window.location.href.includes("/about")) {
      setIsAboutPage(true);
    }
  }, []);

  return (
    <div className="bg-white -mt-15 pt-[30px] p-7">
      <div className="aboutContainer">
        <div className="me_section mt-[6rem] flex flex-col lg:flex-row p-8 justify-evenly">
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src={"/favicon.ico"}
              alt="Muhammed"
              width={100}
              height={100}
              className="mb-6 border w-[70px] rounded-full bg-gray-300"
            />
            <h2 className="aboutMe text-3xl font-bold mt-4 mb-2 text-center lg:text-left">
              I'm Muhammed Olayemi. I live in Lagos state where I code and work
              my best.
            </h2>
            <p className="aboutMeText mt-5 text-sm text-center lg:text-left">
              I'm Muhammed Olayemi, a full stack website developer, software
              developer and entrepreneur based in Lagos, Nigeria.
              <br />
              I'm the founder and the CEO of{" "}
              <a href="#" className="text-[#009688]">
                Smart Office
              </a>
              , where we develop software to solve organizational difficulties.
            </p>

            <div className="stack_section mt-6">
              <h1 className="text-lg text-gray-700 mb-4 font-bold">
                Stack & Skills
              </h1>
              <div className="stack-list flex flex-wrap gap-4">
                {[
                  "javascript",
                  "python",
                  "css",
                  "html",
                  "reactjs",
                  "figma",
                  "git",
                  "mongodb",
                  "nextjs",
                  "nodejs",
                ].map((tech) => (
                  <Image
                    key={tech}
                    src={`/${tech}.png`}
                    width={50}
                    height={50}
                    className="rounded-sm w-[50px] h-[50px]"
                    title={tech}
                    alt={tech}
                  />
                ))}
              </div>
            </div>

            <div className="certification mt-6">
              <h1 className="text-lg text-gray-700 mb-4 font-bold">
                Certification
              </h1>
              <div className="stack-list flex flex-wrap gap-4">
                {[
                  {
                    src: "/php_certificate.jpg",
                    title: "PHP certificate",
                    description: "I obtained this certificate on SOLOLEARN",
                  },
                  {
                    src: "/html_certificate.jpg",
                    title: "HTML certificate",
                    description: "I obtained this certificate on SOLOLEARN",
                  },
                  {
                    src: "/java_certificate.png",
                    title: "JAVA certificate",
                    description:
                      "I obtained this certificate on Learn Tech Platform",
                  },
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 p-2 w-[200px]"
                  >
                    <Image
                      src={cert.src}
                      width={200}
                      height={150}
                      className="rounded-sm"
                      alt={cert.title}
                    />
                    <span className="text-[13px] text-gray-500">
                      {cert.title}
                    </span>
                    <p className="text-[11px] text-gray-400">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <Image
              src={"/muhammed.jpg"}
              width={300}
              height={300}
              className="rounded-lg rotate-3"
              alt="Muhammed"
            />
            <div className="social_media mt-6 text-sm flex flex-col items-center lg:items-start">
              {[
                {
                  href: "#",
                  src: "/social-facebook.png",
                  alt: "facebook",
                  text: "Follow on Facebook",
                },
                {
                  href: "#",
                  src: "/social-github.png",
                  alt: "github",
                  text: "Follow on Github",
                },
                {
                  href: "#",
                  src: "/social-linkedin.png",
                  alt: "linkedin",
                  text: "Follow on LinkedIn",
                },
                {
                  href: "#",
                  src: "/social-twitter.png",
                  alt: "twitter",
                  text: "Follow on Twitter",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="mt-2 flex gap-4 items-center text-black text-md p-2 rounded-sm hover:bg-gray-100 transition"
                >
                  <Image
                    src={social.src}
                    alt={social.alt}
                    width={20}
                    height={20}
                    className="opacity-50 hover:opacity-100 transition"
                  />
                  <p>{social.text}</p>
                </Link>
              ))}
            </div>
            <div className="email_add pt-4 border-t-2 border-solid border-gray-300 mt-5 w-full text-center lg:text-left">
              <div className="title flex items-center gap-2 justify-center lg:justify-start">
                <Image
                  src={"/email.png"}
                  width={30}
                  height={25}
                  alt="email"
                  className="opacity-70"
                />
                <Link href={"mailto:olayemimuhammed2020@gmail.com"}>
                  <span className="text-[12px]">
                    olayemimuhammed2020@gmail.com
                  </span>
                </Link>
              </div>
              <div className="title flex items-center gap-2 justify-center lg:justify-start mt-2">
                <Image
                  src={"/phone.png"}
                  width={30}
                  height={25}
                  className="opacity-70"
                  alt="phone"
                />
                <Link href={"tel:09154996570"}>
                  <span className="text-[12px]">09154996570 | 08167321855</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
