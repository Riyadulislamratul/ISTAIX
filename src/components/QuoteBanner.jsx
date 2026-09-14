import React from "react";
import workerImage from "../assets/images/worker.png"; 

const QuoteBanner = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-8 lg:px-0">
      <div className="relative mx-auto flex min-h-[235px] container items-center overflow-hidden rounded-xl bg-[#b9c7d8]">
        {/* Worker Image
            Add your image later */}
        <div className="h-70 w-100">
          <img
            src={workerImage}
            alt="Worker"
            className="h-full w-full object-contain object-left-bottom"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 ml-auto w-full px-8 py-10 sm:w-[58%] sm:px-6 lg:px-10">
          <h2 className="text-center text-[34px] font-semibold leading-tight tracking-[-1px] text-[#183243] sm:text-[38px] lg:text-[40px]">
            Get a Free Quote Now!
          </h2>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-6 flex max-w-[330px] overflow-hidden rounded-[4px]"
          >
            <input
              type="email"
              placeholder="Your work email address"
              className="h-[43px] min-w-0 flex-1 bg-white px-4 text-[12px] text-[#263945] outline-none placeholder:text-[#263945]"
            />

            <button
              type="submit"
              className="h-[43px] shrink-0 bg-[#243945] px-5 text-[11px] font-medium text-white transition hover:bg-[#304d5a]"
            >
              Join the waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteBanner;
