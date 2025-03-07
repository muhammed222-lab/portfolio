"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const applyTheme = () => {
    if (isDarkMode) {
      document.body.style.background = "black";
      document.body.style.color = "#fff";
    } else {
      document.body.style.background = "";
      document.body.style.color = "";
    }
  };

  useEffect(() => {
    // Apply theme on load and whenever isDarkMode changes
    applyTheme();
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <div className="flex justify-center bg-center">
        <div className="w-full max-w-screen-lg mx-auto">
          <div className="the_nav_links border-gray-300 z-10 mt-7 shadow-60 border shadow-md flex justify-between items-center laptop:w-[410px] phone:w-[300px] rounded-full backdrop-blur p-1">
            <nav className="p-2 flex justify-center items-center text-[13px]">
              <Link href={"/"}>
                <Image
                  src={"/favicon.ico"}
                  width={30}
                  height={30}
                  alt="Home"
                  className={`cursor-pointer rounded-full p-1 ${
                    pathname === "/"
                      ? "bg-slate-600 border-2 border-[#009688]"
                      : "bg-slate-600 -ml-1"
                  }`}
                />
              </Link>
              <div
                className={`flex flex-col laptop:flex-row ${
                  isMenuOpen ? "block" : "hidden"
                } laptop:block`}
              >
                {[
                  "about",
                  "article",
                  "projects",
                  "speaking",
                  "uses",
                  "contact",
                ].map((item) => (
                  <Link
                    key={item}
                    href={`/${item}`}
                    title={item.charAt(0).toUpperCase() + item.slice(1)}
                    className={`ml-4 text-[13px] ${
                      pathname === `/${item}` ? "text-[#009688] font-bold" : ""
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="flex items-center">
              <div className="p-2 shadow-60 border shadow-md align-center flex w-[100px] justify-between rounded-full">
                <Image
                  src={isDarkMode ? "/moon.png" : "/ios7-sunny-outline.png"}
                  width={30}
                  height={40}
                  className="cursor-pointer opacity-50 hover:opacity-100 transition rounded-full"
                  onClick={toggleTheme}
                  alt={isDarkMode ? "Dark Mode" : "Light Mode"}
                />
              </div>
              <button className="ml-4 laptop:hidden" onClick={toggleMenu}>
                <Image src="/menu-icon.png" width={30} height={30} alt="Menu" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;