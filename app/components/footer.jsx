import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react"; // Import social icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 border-t border-gray-700 w-full mt-5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-4 mb-4 md:mb-0 text-sm">
          {[
            { href: "/about", title: "About" },
            { href: "/article", title: "Article" },
            { href: "/projects", title: "Projects" },
            { href: "/speaking", title: "Speaking" },
            { href: "/uses", title: "Uses" },
            { href: "/contact", title: "Contact" },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.href}
              title={link.title}
              className="text-gray-400 hover:text-[#00c8b3] transition duration-300"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Social Media Icons (Optional) */}
        <div className="flex gap-4 mb-4 md:mb-0">
          <a
            href="https://github.com/muhammed222-lab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <Github size={18} />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <Twitter size={18} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-xs text-gray-500 text-center md:text-right">
          &copy; {currentYear} Muhammed Olayemi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
