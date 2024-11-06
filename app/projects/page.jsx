"use client";
import React from "react";
import Link from "next/link";
import Footer from "../components/footer";
import Image from "next/image";
import Project from "../components/project";
import ProjectsList from "../components/projects";

const Page = () => {
  let projectTitle = [
    "Smartc (SMΛRTC) office",
    "AAPOLY",
    "Nutrelife",
    "The mending",
    "Pay me",
    "Netrc",
    "Opay",
  ];
  let projectText = [
    "A tech startup that aim to solve a most common organization difficulties.",
    "A tech startup that aim to solve a most common organization difficulties.",
    "A tech startup that aim to solve a most common organization difficulties.",
    "A tech startup that aim to solve a most common organization difficulties.",
    "A tech startup that aim to solve a most common organization difficulties.",
    "A tech startup that aim to solve a most common organization difficulties.",
    "A tech startup that aim to solve a most common organization difficulties.",
  ];
  let projectIcon = [
    "/smartc-filled-icon.png",
    "/aapoly.png",
    "/nutrelife.jpg",
    "/mending.png",
    "/payme.png",
    "/netrc.png",
    "/opay.png",
  ];
  let projectUrl = [
    "smartc.tech",
    "aapoly.edu.ng",
    "Nutrelife.com",
    "themendinghands.edu.ng",
    "payme.x",
    "netrc.com",
    "opay.com",
  ];

  return (
    <div className=" bg-white -mt-15 pt-[30px] p-7">
      <div className="projectContainer">
        <div className="me_section mt-[6rem] p-8 ">
          <div>
            <Image
              src={"/favicon.ico"}
              alt="Muhammed"
              width={"100"}
              height={"100"}
              className="mb-18 border w-[70px] rounded-full bg-gray-300 sticky"
            />
            <h2 className="text-3xl font-bold mt-[20px] mb-[10px] w-[500px]">
              Things i've made trying to help and add positive impact to the
              universe.
            </h2>
            <p className="w-[600px] mt-5 text-sm">
              I've worked on a lot of project, i started building project even
              while learning. I am proud of all. Many of them are open-source,
              so if you what to contribute to the idea, check out the code and
              improve it.
            </p>
          </div>
        </div>

        <div className="project_box p-4">
          <Project
            projectTitle={projectTitle}
            projectText={projectText}
            projectIcon={projectIcon}
            projectUrl={projectUrl}
          />
          <ProjectsList />
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
