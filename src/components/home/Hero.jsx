import React from "react";
import heroImage from "../../assets/images/herowomen.png";

const Hero = () => {
  return (
    <section id="home" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center lg:gap-[200px] pt-16 md:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="mb-6 font-poppins text-4xl font-[500] leading-tight tracking-tight text-[#161C2D] md:text-5xl lg:text-[40px]">
              Precision Measurement and Alignment Solutions
            </h1>
            <p className="text-md mb-8 leading-relaxed text-gray-600 md:text-lg lg:text-[20px]">
              Shiv Samarth Technologies offers a comprehensive suite of precise
              services across all precision measurement and alignment needs. Our
              services are tailored to meet the demanding requirements of
              various industries, ensuring your products operate accurately and
              efficiently as promised.
            </p>
          </div>

          {/* Right Content - Image with Decorations */}
          <div className="relative z-0 lg:w-[440px] lg:pt-4">
            <div className="relative">
              <img
                src={heroImage}
                alt="Professional"
                className="w-full max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner - Now positioned relative to the content */}
      <div className="w-full bg-[#161C2D] sm:w-full py-4">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-center text-sm text-white md:text-base">
            Dedicated to precision and providing cutting-edge measurement
            solutions for all clients' needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
