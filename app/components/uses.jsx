import React from "react";
import Image from "next/image";
import Link from "next/link";
const uses = (props) => {
  return (
    <div className="mt-5">
      <Image
        src={"/favicon.ico"}
        alt="Muhammed"
        width={"50"}
        height={"50"}
        className="mb-18 border w-[40px] rounded-full bg-gray-300 sticky "
      />

      <div className="tool_tree w-[70%] text-sm mt-3 justify-between border-l border-solid border-gray-300 pl-3">
        {props.tool.map((titles, index) => (
          <div className="date_list flex gap-10 mt-10" key={index}>
            <div className="article_date">
              <p className="text-[12px] text-gray-400">
                {props.typeOfWork[index]}
              </p>
            </div>
            <div className="article_content">
              <h3 className="text-[16px] font-bold text-sm mb-2">{titles}</h3>
              <p className="line-clamp-3 w-[600px] mb-4">
                {props.toolInfo[index]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default uses;
