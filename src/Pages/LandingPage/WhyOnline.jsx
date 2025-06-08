import React from 'react';

// Import images
import mobile1x from '../../assets/images/why-online/why-online-main-mobile.jpg';
import mobile2x from '../../assets/images/why-online/why-online-main-mobile@2x.jpg';
import tablet1x from '../../assets/images/why-online/why-online-main-tablet.jpg';
import tablet2x from '../../assets/images/why-online/why-online-main-tablet@2x.jpg';

const WhyOnline = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10 gap-6">
      {/* Left Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Why Online Training</h1>
     
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2">
        <picture>
          <source
            media="(min-width: 576px)"
            srcSet={`${tablet1x} 1x, ${tablet2x} 2x`}
          />
          <source
            srcSet={`${mobile1x} 1x, ${mobile2x} 2x`}
          />
          <img
            src={mobile1x}
            alt="Why Online Training"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </picture>
      </div>
    </div>
  );
};

export default WhyOnline;
