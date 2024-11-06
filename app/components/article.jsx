import React from "react";
import Link from "next/link";
const article = (props) => {
  return (
    <div>
      {props.title.map((titles, index) => (
        <div
          className="article p-5 laptop:w-[500px] tablet:w-[100%] tablet:block"
          key={index}>
          <span className="article_date text-[12px] text-[lightgray] border-l-2 border-solid border-gray-400 pl-1">
            {props.date[index]}
          </span>

          <p className="article_title text-sm mt-1 mb-2 font-bold">{titles}</p>
          <div className="read_article text-[12px] mb-3">
            <p className="text-pretty line-clamp-4">{props.articles[index]}</p>
          </div>
          <Link href={"#"} className="text-[12px] text-[#009688]">
            Read article ▸
          </Link>
        </div>
      ))}
    </div>
  );
};

export default article;
