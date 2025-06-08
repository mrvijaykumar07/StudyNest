import React from "react";
import { Link } from "react-router-dom";

import mobile1x from "../../assets/images/home/home-interactive-online-training-mobile.jpg";
import mobile2x from "../../assets/images/home/home-interactive-online-training-mobile@2x.jpg";
import tablet1x from "../../assets/images/home/home-interactive-online-training-tablet.jpg";
import tablet2x from "../../assets/images/home/home-interactive-online-training-tablet@2x.jpg";

const MainPage = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row md:h-dvh items-center justify-between py-12 gap-10 pt-20 z-0 md:px-20">


      <div className="md:hidden bg-gray-300 text-black w-full h-full flex justify-around text-center py-2 mx-20 z-10">
        <p>Already have an account </p>
        <Link
          to="/login"
          className="bg-blue-950 text-white px-6 py-1 rounded-full hover:bg-white hover:text-blue-900 border border-blue-800 transition"
        >
          Login
        </Link>
      </div>




{/* -------------------------------------------------------------------------- */}

      <div className="md:w-full md:flex justify-between">



  {/* Right Image as Background on Desktop */}
  <div className="hidden md:block absolute top-0 right-0 w-2/3 h-full z-0">
    <picture>
      <source media="(min-width: 576px)" srcSet={`${tablet1x} 1x, ${tablet2x} 2x`} />
      <source srcSet={`${mobile1x} 1x, ${mobile2x} 2x`} />
      <img
        src={mobile1x}
        alt="Interactive online training homepage section thumbnail"
        className="w-full h-full object-cover"
      />
    </picture>
  </div>





      {/* Left Text Content */}
      <div className="md:w-[800px] md:h-[700px] px-7  md:left-0   md:relative bg-white    md:rounded-r-full ">
        <div  className="md:left-0 md:bottom-0 md:pt-[200px]" >
          <h1 className="md:text-4xl text-3xl font-bold text-gray-800 leading-snug mb-4">
            Interactive <span className="text-amber-500">online training</span>{" "}
            for small and midsize fleets
          </h1>
          <p className="text-lg text-black mb-6">
            Comprehensive safety, compliance, and best practices content for
            truck drivers, wrapped up in a simple subscription with no contract
            and no commitments.
          </p>
        </div>

        <div className=" flex items-center justify-center md:justify-start gap-4">
          <button className="bg-blue-950 text-white px-10 py-3 rounded-full shadow hover:bg-blue-700 transition">
            Learn more
          </button>

          <button className="flex items-center gap-2 text-blue-950 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            Try it out{" "}
            <span className="text-orange-500 text-3xl mb-2 font-bold">
              {" "}
              &gt;
            </span>
          </button>
        </div>
      </div>

 {/* Right Image Content */}
<div className="w-full md:w-[65%]  right-0">
  <picture>
    <source
      media="(min-width: 576px)"
      srcSet={`${tablet1x} 1x, ${tablet2x} 2x`}
    />
    <source srcSet={`${mobile1x} 1x, ${mobile2x} 2x`} />
    <img
      src={mobile1x}
      alt="Interactive online training homepage section thumbnail"
      className="w-full h-auto rounded-lg shadow-lg object-cover"
    />
  </picture>
</div>

    </div>
    
    </div>
    </>
  );
};

export default MainPage;
