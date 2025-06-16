import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext"; // Adjust path

const SearchBox = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const {
    selectedDate,
    setSelectedDate,
    selectedMonths,
    setSelectedMonths,
    areaName,
    setAreaName,
  } = useContext(AppContext);

  const handleSearch = () => {
    navigate("/libraries");
  };

  const formattedDate = new Date(selectedDate).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="pb-8 p-3 w-full h-fit relative md:px-32">
      <div className="bg-white shadow-xl rounded-2xl p-4 md:w-full mt-2">
        <h2 className="text-sm md:text-xl font-bold text-center mb-2 text-gray-700">
          Choose Your Nearby Area
        </h2>

        <div className="md:flex items-start justify-around gap-2 w-full pb-4 md:gap-0">
          <div className="border rounded-xl mb-1 md:w-1/2 md:mr-1">
            {/* 👇 Area Input now updates context */}
            <input
              type="text"
              placeholder="e.g., Bapuji Nagar, Saheed Nagar"
              value={areaName}
              onChange={(e) => setAreaName(e.target.value)}
              className="w-full px-4 py-2 focus:outline-none focus:ring-0 focus:border-transparent"
            />

            <div className="mb-2 flex items-center gap-2 px-4 md:w-[600px] cursor-pointer">
              <span className="text-sm hover:text-amber-600 text-blue-500">
                📍 Use Current Location
              </span>
            </div>
          </div>

          {/* ... date & duration part remains same */}
          <div className="flex gap-1 md:w-1/2 items-center justify-center">
            <label
              className="flex-1 cursor-pointer border rounded-xl px-4 py-1 hover:shadow-md transition group relative overflow-hidden"
              onClick={() => inputRef.current?.showPicker()}
            >
              <input
                ref={inputRef}
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="relative z-0">
                <p className="text-lg font-semibold text-gray-800 mb-0.5 group-focus-within:text-blue-600">
                  {formattedDate}
                </p>
                <p className="text-sm text-gray-500 py-1">Starting From</p>
              </div>
            </label>

            <label className="flex-1 cursor-pointer border rounded-xl px-4 py-1 hover:shadow-md transition group relative overflow-hidden">
              <select
                value={selectedMonths}
                onChange={(e) => setSelectedMonths(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              >
                <option value="1">1 month</option>
                <option value="2">2 months</option>
                <option value="3">3 months</option>
                <option value="6">6 months</option>
                <option value="12">12 months</option>
              </select>
              <div className="relative z-0 text-right">
                <p className="text-lg font-semibold text-gray-800 mb-0.5 group-focus-within:text-blue-600">
                  {selectedMonths} {selectedMonths === "1" ? "Month" : "Months"}
                </p>
                <p className="text-sm py-1 text-gray-500">Duration</p>
              </div>
            </label>
          </div>
        </div>

        <div className="flex justify-center hover:bg-amber-700">
          <button
            className="absolute bottom-0 mt-4 bg-orange-500 text-white font-medium py-3 px-12 rounded-full shadow transition duration-200"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
