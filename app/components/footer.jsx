import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-5 border-t-2 border-solid border-gray-700 w-full mt-5">
      <footer className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm">
        <div className="links flex flex-wrap gap-4 mb-4 md:mb-0">
          <Link
            href="/about"
            title="About"
            className="text-[12px] hover:text-[#009688]"
          >
            About
          </Link>
          <Link
            href="/article"
            title="Article"
            className="text-[12px] hover:text-[#009688]"
          >
            Article
          </Link>
          <Link
            href="/projects"
            title="Projects"
            className="text-[12px] hover:text-[#009688]"
          >
            Projects
          </Link>
          <Link
            href="/speaking"
            title="Speaking"
            className="text-[12px] hover:text-[#009688]"
          >
            Speaking
          </Link>
          <Link
            href="/uses"
            title="Uses"
            className="text-[12px] hover:text-[#009688]"
          >
            Uses
          </Link>
          <Link
            href="/contact"
            title="Contact"
            className="text-[12px] hover:text-[#009688]"
          >
            Contact
          </Link>
        </div>
        <div className="copy text-[12px] text-center md:text-right">
          <p>&copy; 2024 Muhammed Olayemi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
