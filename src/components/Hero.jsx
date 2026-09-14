const Hero = () => {
  return (
    <section className="relative mx-3 min-h-[570px] overflow-hidden bg-[#f0f0f2]">
      {/* Architecture Image */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-[55%]">
        <img
          src="/architecture.jpg"
          alt="Modern architecture"
          className="h-full w-full object-cover object-center"
        />

        {/* Fade between image and content */}
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#f0f0f2] via-[#f0f0f2]/60 to-transparent lg:w-[55%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[570px] items-center px-8 py-16 md:px-14 lg:w-[60%] lg:px-[110px]">
        <div>
          <h1 className="text-[42px] font-medium leading-[1.5] tracking-[-1.5px] text-[#1d3544] sm:text-[50px]">
            Diversified Services.
            <br />
            Unvarying Quality.
          </h1>

          <p className="mt-7 max-w-[475px] text-[13.5px] leading-[1.7] text-[#32617e]">
            We designed 100+ commercial & residential projects
            <br className="hidden sm:block" />
            in USA & across the globe. Providing Design & 3D
            <br className="hidden sm:block" />
            Support to Architectural Firms Globally. Award-
            <br className="hidden sm:block" />
            Winning Company.{" "}
            <strong className="font-semibold text-[#172e3e]">
              17+ Years Of Experience.
            </strong>
          </p>

          {/* Actions */}
          <div className="mt-12 flex items-center gap-6">
            <button className="h-[55px] rounded-[4px] bg-[#243b47] px-11 text-[15px] font-medium text-white transition hover:bg-[#304d5a]">
              See Our Work
            </button>

            <button className="group flex items-center gap-3 text-[#142d3e]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[#142d3e] transition group-hover:scale-105">
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                >
                  <path
                    d="M11 7L1 13V1L11 7Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span className="h-px w-16 bg-[#142d3e]" />

              <span className="text-base">Explore</span>
            </button>
          </div>
        </div>
      </div>

      {/* Daniel Johns */}
      <div className="absolute right-[25%] top-[67px] z-20 hidden w-[181px] items-center gap-3 rounded-[5px] bg-white px-3 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.08)] lg:flex">
        <img
          src="/daniel.jpg"
          alt="Daniel Johns"
          className="h-10 w-10 rounded-full object-cover"
        />

        <div>
          <p className="text-[16px] font-medium leading-none text-[#162e3f]">
            Daniel Johns
          </p>

          <div className="mt-1.5 text-[15px] leading-none tracking-[-1px] text-[#f2d52b]">
            ★★★★★
          </div>
        </div>
      </div>

      {/* Martha May */}
      <div className="absolute bottom-[150px] right-[34%] z-20 hidden w-[181px] items-center gap-3 rounded-[5px] bg-white px-3 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.08)] lg:flex">
        <img
          src="/martha.jpg"
          alt="Martha May"
          className="h-10 w-10 rounded-full object-cover"
        />

        <div>
          <p className="text-[16px] font-medium leading-none text-[#162e3f]">
            Martha May
          </p>

          <div className="mt-1.5 text-[15px] leading-none tracking-[-1px] text-[#f2d52b]">
            ★★★★★
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;