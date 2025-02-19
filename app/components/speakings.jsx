import React from "react";
import Image from "next/image";
import Link from "next/link";

const Speakings = (props) => {
  return (
    <div className="mt-5">
      <Image
        src={"/favicon.ico"}
        alt="Muhammed"
        width={50}
        height={50}
        className="mb-6 border w-[40px] rounded-full bg-gray-300 sticky"
      />

      <div className="article_tree w-full lg:w-[70%] text-sm mt-3 justify-between border-l border-solid border-gray-300 pl-3">
        {props.listenTitles.map((titles, index) => (
          <div
            className="date_list flex flex-col lg:flex-row gap-4 lg:gap-10 mt-10"
            key={index}
          >
            <div className="article_date">
              <p className="text-[12px] text-gray-400">{props.type[index]}</p>
            </div>
            <div className="article_content">
              <h3 className="text-[16px] font-bold mb-2">{titles}</h3>
              <p className="line-clamp-3 w-full lg:w-[600px] mb-4">
                {props.listens[index]}
              </p>
              <Link href={"#"} className="text-[12px] text-[#009688] mt-2">
                View ▸
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakings;
