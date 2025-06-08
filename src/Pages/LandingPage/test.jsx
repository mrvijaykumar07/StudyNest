import React from 'react'

const test = () => {
  return (
    <div>


{/* -------------------------------------------------------------------------- */}

     <div className="w-full relative flex flex-col md:flex-row items-center md:items-stretch overflow-hidden">
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

  {/* Left Text Content with Curve */}
  <div className="relative z-10 w-full md:w-1/2 px-7 py-12 md:py-20 bg-white md:rounded-r-full md:shadow-lg">
    <div>
      <h1 className="md:text-4xl text-3xl font-bold text-gray-800 leading-snug mb-4">
        Interactive <span className="text-amber-500">online training</span>{" "}
        for small and midsize fleets
      </h1>
      <p className="text-lg text-black mb-6">
        Comprehensive safety, compliance, and best practices content for
        truck drivers, wrapped up in a simple subscription with no contract
        and no commitments.
      </p>

      <div className="flex items-center justify-center md:justify-start gap-4">
        <button className="bg-blue-950 text-white px-10 py-3 rounded-full shadow hover:bg-blue-700 transition">
          Learn more
        </button>
        <button className="flex items-center gap-2 text-blue-950 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
          Try it out{" "}
          <span className="text-orange-500 text-3xl mb-2 font-bold"> &gt; </span>
        </button>
      </div>
    </div>
  </div>

  {/* Image block for mobile */}
  <div className="hidden md:block absolute top-0 right-0 w-[75%] h-[700px] z-0">

    <picture>
      <source media="(min-width: 576px)" srcSet={`${tablet1x} 1x, ${tablet2x} 2x`} />
      <source srcSet={`${mobile1x} 1x, ${mobile2x} 2x`} />
      <img
        src={mobile1x}
        alt="Interactive online training homepage section thumbnail"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </picture>
  </div>
</div>



      
    </div>
  )
}

export default test
