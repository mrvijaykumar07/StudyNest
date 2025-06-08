import React from "react";
import statPercentageImage from "../../../assets/images/stats/stat-10percent-improvement.svg"; 
import statLifeSpanImage from "../../../assets/images/stats/stat-customer-lifespan.svg";
import statRecomendImage from "../../../assets/images/stats/stat-insurers-recommending-ce.svg";
const StatsSection = () => {
  return (
    <section id="homeStats" className="py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center ">

        {/* Stat 1 */}
        <div className=" bg-gray-200 flex flex-col items-center  rounded-4xl  mx-10 my-6 p-5">
          <img
            src={statPercentageImage}
            alt="Three sample charts"
            className="h-24 mb-4"
          />
          <p className="text-3xl font-bold text-blue-800">10%</p>
          <p className="text-gray-700 mt-2">
            Typical improvement in safety performance among customers
          </p>
        </div>

        {/* Stat 2 */}
         <div className=" bg-gray-200 flex flex-col items-center  rounded-4xl  mx-10 my-6 p-5">
          <img
            src={statLifeSpanImage}
            alt="Calendar icon beside screen and phone"
            className="h-24 mb-4"
          />
          <p className="text-3xl font-bold text-blue-800">12.5 yrs</p>
          <p className="text-gray-700 mt-2">
            Average time fleets remain customers
          </p>
        </div>

        {/* Stat 3 */}
        <div className=" bg-gray-200 flex flex-col items-center  rounded-4xl mx-10 my-6 p-5">
          <img
            src={statRecomendImage}
            alt="CarriersEdge logo on screen"
            className="h-24 mb-4"
          />
          <p className="text-3xl font-bold text-blue-800">30</p>
          <p className="text-gray-700 mt-2">
             Number of Insurers recommending CE to clients
          </p>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
