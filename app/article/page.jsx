"use client";
import React from "react";
import Link from "next/link";
import Footer from "../components/footer";
import ArticleList from "../components/articleList";
import Image from "next/image";
import "../ui/globals.css";

const Page = () => {
  let titles = [
    "Self taught or com sci degree?",
    "Stay valuable in tech",
    "Learn the best way",
    "High performance web app",
  ];
  let dates = ["Jun 5, 2019", "Aug 7, 2020", "Jul 3, 2022", "Sep 7, 2023"];
  let articles = [
    "The digital age has opened unprecedented opportunities in the realm of technology. With a burgeoning demand for skilled IT professionals, aspiring tech enthusiasts find themselves at a crossroads: pursue a formal computer science degree or embark on a self-taught journey? Both paths offer distinct advantages and challenges, and the optimal choice ultimately depends on individual circumstances, learning styles, and career aspirations.The Allure of Self-Taught Learning Self-taught programmers often extol the virtues of flexibility and practical focus. Online resources, coding boot camps, and open-source projects provide an abundance of materials to master various programming languages and technologies. This hands-on approach allows individuals to learn at their own pace, concentrating on skills directly relevant to their desired career path. Moreover, self-taught learners can often build a robust portfolio of projects, showcasing their abilities to potential employers ",
    "Stay Valuable in Tech: A Guide to Lifelong Learning The tech industry is notorious for its rapid pace of change. What’s cutting-edge today might be obsolete tomorrow. To thrive in this dynamic environment, professionals must commit to lifelong learning and continuous skill development. Here's a guide to help you stay valuable in tech. Understand the Tech Landscape •	Identify trends: Keep a pulse on emerging technologies and industry shifts. •	Analyze job market: Understand the skills in high demand and potential career paths. •	Network strategically: Build relationships with professionals in different areas of tech.",
    "'Learn the best way' is a broad topic. To create a focused and informative article, we need to specify what we're learning how to do. Here are some potential angles: Learning Methods •	Effective Learning Techniques: Explore strategies like spaced repetition, active recall, and mind mapping. •	The Science of Learning: Delve into cognitive psychology and neuroscience to understand how the brain learns best. •	Overcoming Learning Obstacles: Address common challenges like procrastination, lack of motivation, and information overload.",
    "Let's Build a High-Performance Web App Together Defining Our Scope Before we dive into the specifics, let's narrow down the focus of our article. Here are some potential angles: •	Technical deep dive: Explore specific technologies, optimization techniques, and performance metrics. •	Case study: Analyze a high-performance web app to identify key factors contributing to its success. •	Best practices: Provide general guidelines for building high-performance web applications. •	User experience: Discuss how performance impacts user satisfaction and engagement. ",
  ];
  return (
    <div className=" bg-white -mt-15 pt-[30px] p-7">
      <div className="aboutContainer">
        <div className="me_section mt-[6rem] p-8 ">
          <div>
            <Image
              src={"/favicon.ico"}
              alt="Muhammed"
              width={"100"}
              height={"100"}
              className="mb-18 border w-[70px] rounded-full bg-gray-300 sticky"
            />
            <h2 className="aboutMe text-3xl font-bold mt-[20px] mb-[10px] w-[500px]">
              {/* {isAboutPage && <div>You are on about page</div>} */}
              Writing on software and website design, company building, and
              business growth.
            </h2>
            <p className="aboutMeText w-[600px] mt-5 text-sm">
              All of my long-form thought on programming, leadership, product
              design, and more, collected in chronological order.
            </p>

            <div className="allArticleTree">
              <ArticleList title={titles} date={dates} articles={articles} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
