"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../components/footer";
import Image from "next/image";
import "../ui/globals.css";
import { Video } from "lucide-react";

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
            <video
              src={"/vd.webm"}
              width={300}
              height={400}
              className="rounded-lg bg-gray-200 border"
              alt="Muhammed"
              autoPlay
              loop
            />
            <div className="social_media mt-6 text-sm flex flex-col items-center lg:items-start">
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=100080511968906&mibextid=LQQJ4d&mibextid=LQQJ4d",
                  src: "/social-facebook.png",
                  alt: "facebook",
                  text: "Follow on Facebook",
                },
                {
                  href: "https://github.com/muhammed222-lab",
                  src: "/social-github.png",
                  alt: "github",
                  text: "Follow on Github",
                },
                {
                  href: "https://www.linkedin.com/in/muhammed-olayemi-449950243",
                  src: "/social-linkedin.png",
                  alt: "linkedin",
                  text: "Follow on LinkedIn",
                },
                {
                  href: "https://www.tiktok.com/@muhammed_olayemi",
                  src: "data:image/png;base64,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",
                  alt: "twitter",
                  text: "Ticktok",
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
                <Link href={"mailto:muhammednetr@gmail.com"}>
                  <span className="text-[12px]">muhammednetr@gmail.com</span>
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
                  <span className="text-[12px] text-green-950 font-bold">
                    09154996570 (Whatsapp) | 08167321855 (Call) | 09121201595
                    (Call)
                  </span>
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
