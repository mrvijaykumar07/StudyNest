import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/comLogo.png";
import CANADA from "../../assets/images/canada.png";
import USA from "../../assets/images/usa.png";

import MobileSideMenu from "./MobileSideMenu";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full text-black bg-white text-lg shadow-md z-50 px-4 md:px-20">
      <div className="container mx-auto flex items-center  justify-around py-1    ">
        {/* Logo (Left Side) */}
        <Link to="/" className="text-2xl font-extrabold text-gray-900">
          <img src={logo} alt="LOGO" className="h-12 w-auto" />
        </Link>

        <nav className="hidden   md:flex   gap-7 px-12 space-x-6 font-medium">
          {/* Manual Navigation Items */}
          <Link to="/whyonline" className="hover:text-blue-600 transition">
            Why Online?
          </Link>

          <div className="relative group">
            <Link to="/product" className="hover:text-blue-600 transition">
              Product
            </Link>

            {/* Dropdown Box with Arrow */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-6 hidden group-hover:block z-20">
              {/* Arrow */}
              <div className="w-3 h-3 bg-white rotate-45  mx-auto mb-[-6px]"></div>

              {/* Box */}
              <div className="bg-white shadow-lg rounded-md p-48 w-48 text-sm text-gray-700 z-60">
                <Link
                  to="/product/feature1"
                  className="block hover:bg-gray-100 px-2 py-1 rounded"
                >
                  Links Here
                </Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Link to="/solutions" className="hover:text-blue-600 transition">
              Solutions
            </Link>

            {/* Dropdown Box with Arrow */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-6 hidden group-hover:block z-20">
              {/* Arrow */}
              <div className="w-3 h-3 bg-white rotate-45  mx-auto mb-[-6px]"></div>

              {/* Box */}
              <div className="bg-white shadow-lg rounded-md p-48 w-48 text-sm text-gray-700 z-60">
                <Link
                  to="/product/feature1"
                  className="block hover:bg-gray-100 px-2 py-1 rounded"
                >
                  Links Here
                </Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Link to="/resources" className="hover:text-blue-600 transition">
              Resources
            </Link>

            {/* Dropdown Box with Arrow */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-6 hidden group-hover:block z-20">
              {/* Arrow */}
              <div className="w-3 h-3 bg-white rotate-45  mx-auto mb-[-6px]"></div>

              {/* Box */}
              <div className="bg-white shadow-lg rounded-md p-48 w-48 text-sm text-gray-700 z-60">
                <Link
                  to="/product/feature1"
                  className="block hover:bg-gray-100 px-2 py-1 rounded"
                >
                  Links Here
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/login"
            className="bg-blue-800 text-white px-6 py-1 rounded-full hover:bg-white hover:text-blue-800 border border-blue-800   transition"
          >
            Login
          </Link>

          <div className="relative group mt-1">
            {/* Flag Image (Canada) */}
            <img
              src={CANADA}
              alt="Canada"
              className="h-6 w-auto cursor-pointer"
            />

            {/* Dropdown on hover */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-3 hidden group-hover:block z-20">
              {/* Arrow */}
              <div className="w-3 h-3 bg-white rotate-45 mx-auto mb-[-6px] "></div>

              {/* Box with 2 Flags */}
              <div className="bg-white shadow-lg rounded-md flex flex-col items-center justify-center w-14">
                <Link
                  to="/canada"
                  className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded"
                >
                  <img src={CANADA} alt="Canada" className="h-4 w-auto" />
                </Link>
                <Link
                  to="/usa"
                  className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded"
                >
                  <img src={USA} alt="USA" className="h-4 w-auto" />
                </Link>
              </div>
            </div>
          </div>

          <Link to="/resources" className="hover:text-blue-600 transition">
            EN
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="w-8 h-8 flex flex-col justify-between items-center md:hidden p-2  ml-16 border border-gray-300"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-transform ${
              navOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-900 ${navOpen ? "hidden" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-transform ${
              navOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navbar */}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[40vw] bg-white shadow-lg z-50 transform ${
          navOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-black"
          onClick={() => setNavOpen(false)}
        >
          <HiX className="text-black text-2xl" />
        </button>

        <MobileSideMenu />
      </div>
    </header>
  );
};

export default Navbar;
