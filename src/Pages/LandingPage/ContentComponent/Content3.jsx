import React from "react";
import salesImage from "../../../assets/images/home/home-avoid-pushy-salespeople.svg";

const Content3 = () => {
  return (
    <section id="homeAvoidPushySalespeople">
      <div className="summary py-12">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Left Image */}
          <div className="  md:w-[400px] md:mx-24 ">
            <img
              src={salesImage}
              alt="Notifications on mobile phone from salesperson"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>

          {/* Right Text */}
          <div className="lg:w-1/2 text-gray-800 p-7">
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">
              Avoid pushy salespeople
            </h2>
            <p className="mb-4">
              As a busy fleet safety professional, you have better things to do than fend off sales people pushing you into a contract they can make their quota. At CarriersEdge, you'll never have to deal with contract sales reps because we don't have any!
            </p>
            <p className="mb-4">
              You'll never be locked into a long-term commitment, you'll never get pressured into signing up, and you'll never have to worry what might happen if your needs change down the road. Our Customer Support team is always there to help, not to make you feel uncomfortable.
            </p>
            <p className="mb-4">
              No contracts, commitments, upsells, no hidden fees, and extra charges. One simple subscription that includes everything you need, with complete flexibility to adjust as your business changes.
            </p>
            <p>
              No wonder our customers stick around for more than 12 years, on average!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Content3;
