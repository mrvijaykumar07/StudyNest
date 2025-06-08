import React from "react";
import trainingImg from "../../../assets/images/home/home-train-drivers-online.svg"; // Update the path as needed

const Content1 = () => {
  return (
    <section id="homeOnlineTraining" className="py-12 bg-white">
      <div className="container mx-auto px-7 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src={trainingImg}
            alt="Different types of screens with icons"
            className="w-full h-auto rounded-lg shadow"
            loading="lazy"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Train your drivers online
          </h2>
          <p className="text-gray-700 mb-4">
            Deliver more training to drivers, more consistently, and with less disruption than ever before. Built from the ground up for the trucking industry, CarriersEdge includes a complete library of safety and regulatory courses, easy-to-use admin tools, and all the reporting you need to keep insurance and enforcement people happy.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you need detailed, technical courses like <strong>Weights & Dimensions</strong>, process courses like <em>Accident Scene for Drivers</em>, or quality-of-life content like <em>Recognizing & Preventing Fatigue</em>, our library has it. With specialized titles for different trailer types, new content added all the time, and comprehensive Spanish support as well, there's always something new to help improve fleet safety and efficiency.
          </p>
          <p>
            <a
              href="/product"
              className="text-blue-600 hover:underline font-semibold"
            >
              See what's included in the subscription →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Content1;
