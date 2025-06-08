import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import CANADA from "../../assets/images/canada.png";
import USA from "../../assets/images/usa.png";
const MobileSideMenu = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <>
      <ul className="flex flex-col items-start p-6 mt-12 space-y-2 text-gray-800 text-lg font-semibold w-full ">
        {/* Why Online? NO submenu */}
        <li className="w-full border-b border-gray-300 py-3">
          <Link
            to="/whyonline"
            className="hover:text-blue-600 transition font-semibold block"
          >
            Why Online?
          </Link>
        </li>

        {/* Product with submenu */}
        <li className="w-full border-b border-gray-300 ">
          <button
            onClick={() => toggleSubmenu("product")}
            className="flex justify-between items-center w-full py-3  hover:text-blue-600 transition font-semibold"
            type="button"
          >
            <span>Product</span>
            {openSubmenu === "product" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openSubmenu === "product" && (
            <ul className="pl-10 pb-3 space-y-2 text-gray-700 w-full">
              <li>
                <Link
                  to="/product/content"
                  className="hover:text-blue-600 transition block"
                >
                  Content
                </Link>
              </li>
              <li>
                <Link
                  to="/product/management"
                  className="hover:text-blue-600 transition block"
                >
                  Management
                </Link>
              </li>
              <li>
                <Link
                  to="/product/repairing"
                  className="hover:text-blue-600 transition block"
                >
                  Repairing
                </Link>
              </li>
              <li>
                <Link
                  to="/product/mobile"
                  className="hover:text-blue-600 transition block"
                >
                  Mobile
                </Link>
              </li>
              <li>
                <Link
                  to="/product/connections"
                  className="hover:text-blue-600 transition block"
                >
                  Connections
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Solutions with submenu */}
        <li className="w-full border-b border-gray-300">
          <button
            onClick={() => toggleSubmenu("solutions")}
            className="flex justify-between items-center w-full py-3  hover:text-blue-600 transition font-semibold"
            type="button"
          >
            <span>Solutions</span>
            {openSubmenu === "solutions" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openSubmenu === "solutions" && (
            <ul className="pl-10 pb-3 space-y-2 text-gray-700 w-full">
              <li>
                <Link
                  to="/solutions/onboarding"
                  className="hover:text-blue-600 transition block"
                >
                  Onboarding
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/refresher-training"
                  className="hover:text-blue-600 transition block"
                >
                  Refresher Training
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Partners with submenu */}
        <li className="w-full border-b border-gray-300">
          <button
            onClick={() => toggleSubmenu("partners")}
            className="flex justify-between items-center w-full py-3  hover:text-blue-600 transition font-semibold"
            type="button"
          >
            <span>Partners</span>
            {openSubmenu === "partners" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openSubmenu === "partners" && (
            <ul className="pl-10 pb-3 space-y-2 text-gray-700 w-full">
              <li>
                <Link
                  to="/partners/insurance"
                  className="hover:text-blue-600 transition block"
                >
                  Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/partners/become-a-partner"
                  className="hover:text-blue-600 transition block"
                >
                  Become a Partner
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Resources NO submenu */}
        <li className="w-full border-b border-gray-300 py-3">
          <Link
            to="/resources"
            className="hover:text-blue-600 transition font-semibold block"
          >
            Resources
          </Link>
        </li>
      </ul>
{/* -------------------login /flags--------------- */}
<div className="fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-300 flex justify-between items-center z-50">
  <Link
    to="/login"
    className="bg-blue-950 text-white px-10 py-1 rounded-full hover:bg-white hover:text-blue-950 border border-blue-950 transition"
  >
    Login
  </Link>

  <div className="flex items-center space-x-3">
    <Link to="/resources" className="hover:opacity-75 transition">
      <img src={CANADA} alt="CANADA" className="h-10 w-auto" />
    </Link>

    <Link to="/resources" className="hover:opacity-75 transition">
      <img src={USA} alt="USA" className="h-10 w-auto" />
    </Link>
  </div>
</div>

    </>
  );
};

export default MobileSideMenu;
