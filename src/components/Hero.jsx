import React from "react";
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-[770px] overflow-hidden bg-[#f1f1f3]">
     
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-200 "
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Light overlay / gradient
          Keeps the left side readable when you add the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f1f1f3] via-[#f1f1f3]/95 to-[#f1f1f3]/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[770px] max-w-[1170px] items-center">
        <div className="w-full px-8 py-20 sm:px-12 lg:w-[58%] lg:px-0">
          {/* Heading */}
          <h1 className="max-w-[570px] text-[42px] font-medium leading-[1.55] tracking-[-1.8px] text-[#1d3544] sm:text-[48px] md:text-[50px]">
            Diversified Services.
            <br />
            Unvarying Quality.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[440px] text-[13.5px] font-normal leading-[1.7] tracking-[0.05px] text-[#32617e]">
            We designed 100+ commercial & residential projects
            <br className="hidden sm:block" />
            in USA & across the globe. Providing Design & 3D
            <br className="hidden sm:block" />
            Support to Architectural Firms Globally. Award-
            <br className="hidden sm:block" />
            Winning Company.{" "}
            <span className="font-semibold text-[#172f40]">
              17+ Years Of Experience.
            </span>
          </p>

          {/* Actions */}
          <div className="mt-12 flex items-center gap-6">
            {/* See Our Work */}
            <button
              type="button"
              className="flex h-[55px] min-w-[200px] items-center justify-center rounded-[4px] border border-[#142c3b] bg-[#243b47] px-8 text-[15px] font-medium text-white transition-all duration-200 hover:bg-[#304d5a]"
            >
              See Our Work
            </button>

            {/* Explore */}
            <button
              type="button"
              className="group flex items-center gap-2 text-[#142c3b]"
            >
              {/* Play button */}
              <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#142c3b] transition-transform duration-200 group-hover:scale-105">
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 7L1 12.5V1.5L10.5 7Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              {/* Line */}
              <span className="h-[1px] w-[65px] bg-[#142c3b]" />

              {/* Text */}
              <span className="text-[16px] font-normal">Explore</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
