import React from "react";
import Link from "next/link";

const Article = (props) => {
  return (
    <div className="p-5">
      {props.title.map((titles, index) => (
        <div
          className="article p-5 mb-5 rounded-lg bg-white transform transition-transform duration-300 hover:scale-105"
          key={index}
        >
          <span className="article_date text-[12px] text-gray-500 border-l-2 border-solid border-gray-400 pl-1">
            {props.date[index]}
          </span>

          <p className="article_title text-lg mt-1 mb-2 font-bold text-gray-900">
            {titles}
          </p>
          <div className="read_article text-[14px] mb-3">
            <p className="text-gray-700 line-clamp-4">
              {props.articles[index]}
            </p>
          </div>
          <Link href={"#"} className="text-[14px] text-[#009688] font-semibold">
            Read article ▸
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Article;
