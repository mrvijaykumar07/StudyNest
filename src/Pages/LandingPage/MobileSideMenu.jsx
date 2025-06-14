import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react"; // or your icon library
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const MobileSideMenu = ({ isDarkMode, toggleTheme }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <div className="md:hidden flex flex-col space-y-4 px-6 py-4 text-gray-800 w-full mt-20 z-50">
      {/* Nav Links */}

      <div className="flex flex-col gap-10   ">
      <Link to="/" className="hover:text-amber-600  font-semibold transition">LIBRARIES</Link>
      <Link to="/books" className="hover:text-amber-700 font-semibold transition">BOOKS</Link>
      <Link to="/courses" className="hover:text-amber-700 font-semibold  transition">COURSES</Link>
      <Link to="/about" className="hover:text-amber-700 font-semibold  transition">CONTACT</Link>
           <Link to="/about" className="hover:text-amber-700 font-semibold  transition">ABOUT US</Link>
</div>
      {/* Theme Toggle and Login */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={toggleTheme}
          className="hover:text-blue-600 transition flex items-center gap-2"
        >
          {isDarkMode ? (
            <>
              <Sun size={18} />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon size={18} />
              <span>Dark Mode</span>
            </>
          )}
        </button>

        <Link
          to="/login"
          className="bg-blue-800 text-white px-10 py-2 rounded-full hover:text-blue-950 hover:bg-amber-700 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default MobileSideMenu;

