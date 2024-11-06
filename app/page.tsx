import Image from "next/image";
import { Component } from "react";
import Link from "next/link";
import './ui/globals.css'
import Showcase from './components/showcase'
import Navbar from "./components/Navbar";
import Article from "./components/article";
import Subscribe from "./components/subscribe";
import Work from "./components/work";
import Footer from './components/footer'
import Technology from "./components/technology";
import Experience from './components/experience'
import Testimonial from './components/testimonial'
import Social from './components/social'

export default function Home() {
  let titles = ['Self taught or com sci degree?', 'Stay valuable in tech', 'Learn the best way', 'High performance web app']
  let dates = ['Jun 5, 2019', 'Aug 7, 2020', 'Jul 3, 2022', 'Sep 7, 2023']
  let articles = [
    "The digital age has opened unprecedented opportunities in the realm of technology. With a burgeoning demand for skilled IT professionals, aspiring tech enthusiasts find themselves at a crossroads: pursue a formal computer science degree or embark on a self-taught journey? Both paths offer distinct advantages and challenges, and the optimal choice ultimately depends on individual circumstances, learning styles, and career aspirations.",
    "Stay Valuable in Tech: A Guide to Lifelong Learning The tech industry is notorious for its rapid pace of change. What’s cutting-edge today might be obsolete tomorrow. To thrive in this dynamic environment, professionals must commit to lifelong learning and continuous skill development. Here's a guide to help you stay valuable in tech.",
    "'Learn the best way' is a broad topic. To create a focused and informative article, we need to specify what we're learning how to do. Here are some potential angles: Learning Methods.",
    "Let's Build a High-Performance Web App Together Defining Our Scope Before we dive into the specifics, let's narrow down the focus of our article. Here are some potential angles: Technical deep dive."
  ]

  let workPlace = ['SMΛRTC', 'Top solid composite limited', 'SEGTOP edu consult', 'MAN 2 TECH']
  let workTitle = ['CEO', 'Data analyst', 'Tutor/senior engr', 'Project leader']
  let workIcon = ['/smartc-filled-icon.png', '/etsy.png', '/meta.png', '/shopify.png']
  let workDate = ['2019-2021', '2021-2022', '2022-2022', '2022-2023']

  return (
    <div className="bg-white -mt-10 pt-[30px] p-4 mobile:p-2">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Navbar />
      <div className="me_section mt-[6rem]">
        <Image
          src={"/favicon.ico"}
          alt="Muhammed"
          width={100}
          height={100}
          className="mb-4 border w-[70px] rounded-full bg-gray-300"
        />
        <h2 className="text-3xl font-bold mt-5 mb-3 laptop:w-[400px] phone:w-[300px]">
          Software developer,
          full stack web developer,
          founder and tech adviser.
        </h2>
        <p className="aboutMeText laptop:w-[500px] tablet:w-[300px] tablet:text-[13px]">
          I'm Muhammed Olayemi, a full stack website developer, software developer and entrepreneur based in Lagos Nigeria.
          <br />
          I'm the founder and the CEO of <a href="#">Smart Office</a>, where we develop software to solve organizational difficulties.
        </p>
        <Social />
      </div>

      <div className="showcase_section mx-auto max-w-screen-lg">
        <Showcase />
      </div>

      <Technology />
      <Experience />
      <Testimonial />

      <div className="flex flex-col phone:flex-row justify-around mt-10">
        <div className="article_container w-full">
          <Article title={titles} date={dates} articles={articles} />
        </div>
        <div className="form_section w-full mt-5 phone:mt-0">
          <Subscribe />
          <Work workplace={workPlace} workTitle={workTitle} workIcon={workIcon} workDate={workDate} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
