import React from "react";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/comLogo.png";
import { User } from "lucide-react";

import MobileSideMenu from "./MobileSideMenu";
import { HiX } from "react-icons/hi";

import { AppContext } from "../../context/AppContext"; // ✅ Adjust path as needed
import { useContext } from "react";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);



  return (
    <header className="fixed w-full text-black bg-white text-lg shadow-md z-50 px-4 md:px-48 overflow-x-hidden">
      <div className="container flex items-center justify-between py-1">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-gray-900">
          <img src={logo} alt="LOGO" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="md:flex hidden gap-7 text-sm font-semibold text-gray-700">
          <Link to="/" className="hover:text-amber-700 transition">LIBRARIES</Link>
          <Link to="/books" className="hover:text-amber-700 transition">BOOKS</Link>
          <Link to="/courses" className="hover:text-amber-700 transition">COURSES</Link>
          <Link to="/about" className="hover:text-amber-700 transition">CONTACT</Link>
        </nav>

        {/* Theme & Login (Desktop) */}
        <div className="hidden md:flex gap-7 font-medium">
    
          <Link
            to="/login"
            className="bg-blue-800 text-white px-6 py-1 rounded-full hover:text-blue-950 hover:bg-amber-700 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="w-10 h-10 flex justify-center items-center md:hidden p-2 ml-16 border-gray-300"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle menu"
        >
          <User className="w-6 h-6 text-gray-900" />
        </button>
      </div>

      {/* Mobile Menu */}
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
