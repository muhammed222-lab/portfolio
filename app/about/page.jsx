"use client";
import React from "react";
import Link from "next/link";
import Footer from "../components/footer";
import Image from "next/image";
import "../ui/globals.css";
import { useEffect, useState } from "react";

const About = () => {
  const [isAboutPage, setIsAboutPage] = useState(false);
  useEffect(() => {
    if (window.location.href.includes("/about")) {
      setIsAboutPage(true);
    }
  }, []);
  return (
    <div className=" bg-white -mt-15 pt-[30px] p-7">
      <div className="aboutContainer">
        <div className="me_section mt-[6rem] flex p-8 justify-evenly laptop:flex-row tablet:flex-col">
          <div>
            <Image
              src={"/favicon.ico"}
              alt="Muhammed"
              width={"100"}
              height={"100"}
              className="mb-18 border w-[70px] rounded-full bg-gray-300 sticky"
            />
            <h2 className="aboutMe laptop:text-3xl tablet:text-[15px] font-bold mt-[20px] mb-[10px] desktop:w-[500px] laptop:w-[400px] tablet:w-[250px]">
              {/* {isAboutPage && <div>You are on about page</div>} */}
              I'm Muhammed Olayemi. I lives in the Lagos state where i code and
              work my best
            </h2>

            <p className="aboutMeText mt-5 desktop:text-sm desktop:w-[600px] laptop:w-[400px] tablet:w-[300px] tablet:text-[11px]">
              I'm Muhammed Olayemi, a full stack website developer, software
              developer and entrepreneur based in Lagos Nigeria.
              <br />
              Im the founder and the CEO of{" "}
              <a href="#" className="text-[#009688]">
                Smart Office
              </a>
              , where we develope software to solve organization difficulties.
            </p>

            <div className="stack_section">
              <h1 className="text-[15px] text-gray-700 mb-4 font-bold">
                Stack & skills
              </h1>
              <div className="stack-list flex w-[400px]">
                <Image
                  src={"/javascript.png"}
                  width={50}
                  height={50}
                  className="rounded-sm laptop:w-[50px] tablet:w-[30px] laptop:h-[50px] tablet:h-[30px]"
                  title="javascript"
                  alt="javascript"
                />
                <Image
                  src={"/python.png"}
                  width={50}
                  height={50}
                  className="rounded-sm laptop:w-[50px] tablet:w-[30px] laptop:h-[50px] tablet:h-[30px]"
                  title="python"
                  alt="python"
                />

                <Image
                  src={"/css.png"}
                  width={50}
                  height={50}
                  className="rounded-sm laptop:w-[50px] tablet:w-[30px] laptop:h-[50px] tablet:h-[30px]"
                  title="css"
                  alt="css"
                />
                <Image
                  src={"/html.png"}
                  width={50}
                  height={50}
                  className="rounded-sm laptop:w-[50px] tablet:w-[30px] laptop:h-[50px] tablet:h-[30px]"
                  title="html"
                  alt="html"
                />
                <Image
                  src={"/reactjs.png"}
                  width={50}
                  height={50}
                  className="rounded-sm laptop:w-[50px] tablet:w-[30px] laptop:h-[50px] tablet:h-[30px]"
                  title="react js & native"
                  alt="react"
                />

                <Image
                  src={"/figma.png"}
                  width={50}
                  height={50}
                  className="rounded-sm laptop:w-[50px] tablet:w-[30px] laptop:h-[50px] tablet:h-[30px]"
                  title="figma"
                  alt="figma"
                />
                <Image
                  src={"/git.png"}
                  width={50}
                  height={50}
                  className="rounded-sm laptop:w-[50px] tablet:w-[30px] laptop:h-[50px] tablet:h-[30px]"
                  title="git"
                  alt="git"
                />
                <Image
                  src={"/mongodb.png"}
                  width={50}
                  height={50}
                  className="rounded-sm laptop:w-[50px] tablet:w-[30px] laptop:h-[50px] tablet:h-[30px]"
                  title="mongodb"
                  alt="mongodb"
                />
                <Image
                  src={"/nextjs.svg"}
                  width={50}
                  height={50}
                  className="rounded-sm laptop:w-[50px] tablet:w-[30px] laptop:h-[50px] tablet:h-[30px]"
                  title="Next js"
                  alt="next js"
                />
                <Image
                  src={"/nodejs.svg"}
                  width={50}
                  height={50}
                  className="rounded-sm laptop:w-[50px] tablet:w-[30px] laptop:h-[50px] tablet:h-[30px]"
                  title="Node js"
                  alt="node js"
                />
              </div>
            </div>
            <div className="certification">
              <h1 className="text-[15px] text-gray-700 mb-4 font-bold pt-4">
                Certification
              </h1>
              <div className="stack-list flex laptop:w-[500px] tablet:w-[300px] flex-wrap gap-[10px]">
                <div className="border border-s-gray-200 p-2 w-[200px]">
                  <Image
                    src={"/php_certificate.jpg"}
                    width={200}
                    height={150}
                    className="rounded-sm"
                    alt="php certificate"
                  />
                  <span className="text-[13px] text-gray-500">
                    PHP certificate
                  </span>
                  <p className="text-[11px] text-gray-400">
                    I obtain this certificate on SOLOLEARN
                  </p>
                </div>
                <div className="border border-s-gray-200 p-2 w-[200px]">
                  <Image
                    src={"/html_certificate.jpg"}
                    width={200}
                    height={150}
                    className="rounded-sm"
                    alt="html certificate"
                  />
                  <span className="text-[13px] text-gray-500">
                    HTML certificate
                  </span>
                  <p className="text-[11px] text-gray-400">
                    I obtain this certificate on SOLOLEARN
                  </p>
                </div>
                <div className="border border-s-gray-200 p-2 w-[200px]">
                  <Image
                    src={"/java_certificate.png"}
                    width={200}
                    height={150}
                    className="rounded-sm"
                    alt="java certificate"
                  />
                  <span className="text-[13px] text-gray-500">
                    JAVA certificate
                  </span>
                  <p className="text-[11px] text-gray-400">
                    I obtain this certificate on learn Tech Platform
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={"/muhammed.jpg"}
              width={300}
              height={300}
              className="rounded-lg rotate-3 "
              alt="muhammed"
            />
            <div className="social_media mt-[20px] text-sm flex-col">
              <Link
                href={"#"}
                className="mt-[10px] flex gap-4 mr-1 rounded-sm text-[black] text-md p-[5px]">
                <Image
                  src={"/social-facebook.png"}
                  alt="facebook"
                  width={20}
                  height={20}
                  className="opacity-[.5] hover:opacity-[1] transition"
                />
                <p>Follow on Facebook</p>
              </Link>

              <Link
                href={"#"}
                className="mt-[10px] flex gap-4 mr-1 rounded-sm text-[black] text-sm p-[5px]">
                <Image
                  src={"/social-github.png"}
                  alt="github"
                  width={20}
                  height={20}
                  className="opacity-[.5] hover:opacity-[1] transition"
                />
                <p>Follow on Github</p>
              </Link>

              <Link
                href={"#"}
                className="mt-[10px] flex gap-4 mr-1 rounded-sm text-[black] text-sm p-[5px]">
                <Image
                  src={"/social-linkedin.png"}
                  alt="linkedin"
                  width={20}
                  height={20}
                  className="opacity-[.5] hover:opacity-[1] transition"
                />
                <p>Follow on linkedin</p>
              </Link>
              <Link
                href={"#"}
                className="mt-[10px] flex gap-4 mr-1 rounded-sm text-[black] text-sm p-[5px]">
                <Image
                  src={"/social-twitter.png"}
                  alt="linkedin"
                  width={20}
                  height={20}
                  className="opacity-[.5] hover:opacity-[1] transition"
                />
                <p>Follow on Twitter</p>
              </Link>
            </div>
            <div className="email_add pt-4 border-t-2 border-solid border-gray-300 mt-5">
              <div className="title flex align-center gap-2 items-center">
                <Image
                  src={"/email.png"}
                  width={30}
                  height={25}
                  alt="email"
                  className="opacity-[.7]"
                />
                <Link href={"mailto:olayemimuhammed2020@gmail.com"}>
                  <span className="text-[12px]">
                    olayemimuhammed2020@gmail.com
                  </span>
                </Link>
              </div>
              <div className="title flex align-center gap-2 items-center">
                <Image
                  src={"/phone.png"}
                  width={30}
                  height={25}
                  className="opacity-[.7]"
                  alt="phone"
                />
                <Link href={"phone:09154996570"}>
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
