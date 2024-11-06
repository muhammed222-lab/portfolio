"use client";
import React, { use } from "react";
import Image from "next/image";
import { jsx } from "react/jsx-runtime";
const showcase = () => {
  let data = {
    name: "muhammed",
    age: 30,
    src: "/public/banner.png",
  };
  return (
    <div className="z-[1]">
      <div className="images_container flex p-5 gap-8 w-[100%] overflow-hidden">
        <Image
          src={"/assistance-online.webp"}
          width={250}
          height={270}
          className="rounded-md rotate-3"
          alt="assistant"
        />
        <Image
          src={"/apple-system.jpeg"}
          width={250}
          height={270}
          className="rounded-md -rotate-3"
          alt="apple"
        />
        <Image
          src={"/camera-black.jpeg"}
          width={250}
          height={270}
          className="rounded-md rotate-3"
          alt="camera"
        />
        <Image
          src={"/creative.webp"}
          width={250}
          height={270}
          className="rounded-md -rotateX-3"
          alt="creative"
        />
      </div>
    </div>
  );
};

export default showcase;
