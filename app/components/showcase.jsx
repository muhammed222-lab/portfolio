"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Showcase = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="z-[1]">
      <Slider {...settings} className="images_container p-5 gap-8 w-[100%]">
        <div>
          <Image
            src={"/assistance-online.webp"}
            width={250}
            height={270}
            className="rounded-md rotate-3"
            alt="assistant"
          />
        </div>
        <div>
          <Image
            src={"/apple-system.jpeg"}
            width={250}
            height={270}
            className="rounded-md -rotate-3"
            alt="apple"
          />
        </div>
        <div>
          <Image
            src={"/camera-black.jpeg"}
            width={250}
            height={270}
            className="rounded-md rotate-3"
            alt="camera"
          />
        </div>
        <div>
          <Image
            src={"/creative.webp"}
            width={250}
            height={270}
            className="rounded-md -rotateX-3"
            alt="creative"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Showcase;
