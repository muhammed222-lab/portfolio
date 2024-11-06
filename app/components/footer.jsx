import React from "react";
import Link from "next/link";

const footer = () => {
  return (
    <div className="laptop:p-5 border-t-2 border-solid border-gray-200 w-[100%] phone:mt-5 phone:p-0 phone:w-[200px]">
      <footer className="flex justify-between mt-4 text-sm phone:flex-col">
        <div className="links">
          <Link
            href={"../about/"}
            title="About"
            className="ml-0 text-[12px] the_link hover:text-[#009688]">
            About
          </Link>
          <Link
            href={"../article/"}
            title="Article"
            className="ml-4 text-[12px] the_link hover:text-[#009688]">
            Article
          </Link>
          <Link
            href={"../projects/"}
            title="Projects"
            className="ml-4 text-[12px] the_link hover:text-[#009688]">
            Projects
          </Link>
          <Link
            href={"../speaking/"}
            title="Speaking"
            className="ml-4 text-[12px] the_link hover:text-[#009688]">
            Speaking
          </Link>
          <Link
            href={"../uses/"}
            title="Uses"
            className="ml-4 text-[12px] the_link hover:text-[#009688]">
            Uses
          </Link>
          <Link
            href={"../contact/"}
            title="contact"
            className="ml-4 text-[12px] the_link hover:text-[#009688]">
            Contact
          </Link>
        </div>
        <div className="copy laptop:text-[12px] phone:justify-start phone:text-[8px] phone:mt-2">
          <p>&copy; 2024 Muhammed Olayemi All right reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default footer;
