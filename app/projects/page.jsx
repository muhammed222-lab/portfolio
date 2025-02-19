"use client";
import React from "react";
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
    "Opay Cloned (Just for learning purpose)",
    "Moshood fashion Home",
  ];
  let projectText = [
    "An innovative tech startup dedicated to streamlining organizational processes and improving efficiency through smart technology solutions.",
    "A Student Industrial Work Experience Scheme (SIWES) management system for AAPOLY, designed to help students track their industrial training progress, submit reports, and communicate with supervisors.",
    "A digital health and wellness platform that provides personalized nutrition plans, supplements, and expert guidance for a healthier lifestyle.",
    "A non-profit organization leveraging technology to provide humanitarian aid, educational resources, and skill development for underprivileged communities.",
    "A fast and secure online payment gateway offering seamless transactions, low fees, and multiple integration options for businesses and individuals.",
    "A cloud-based networking and data management platform designed to enhance connectivity, security, and collaboration across different industries.",
    "A financial technology company offering mobile banking, digital wallets, and cashless transactions for businesses and individuals across various regions.",
    "An e-commerce platform for fashion enthusiasts to discover, shop, and share trendy clothing, accessories, and lifestyle products.",
  ];
  let projectIcon = [
    "/smartc-filled-icon.png",
    "/aapoly.png",
    "/nutrelife.jpg",
    "/mending.png",
    "/payme.png",
    "/netrc.png",
    "/mfh.png",
  ];
  let projectUrl = [
    "https://github.com/muhammed222-lab/smartc-office",
    "https://github.com/muhammed222-lab/siwes",
    "https://github.com/muhammed222-lab/nutrelife",
    "themendinghands.edu.ng",
    "https://github.com/muhammed222-lab/payme",
    "https://github.com/muhammed222-lab/netrc",
    "https://github.com/muhammed222-lab/opay-clone",
    "https://www.moshoodfashion.store",
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
