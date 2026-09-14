import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#243945] text-white">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-20 -top-40 h-[500px] w-[500px] rounded-full border border-white/[0.06]" />

      <div className="pointer-events-none absolute -right-32 -top-32 h-[430px] w-[430px] rounded-full border border-white/[0.06]" />

      {/* Footer content */}
      <div className="relative z-10 mx-auto max-w-[970px] px-8 py-11 lg:px-0">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          {/* Left */}
          <div>
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 text-[15px] font-semibold tracking-wide"
            >
              <div className="relative h-7 w-7">
                <span className="absolute left-0 top-[5px] h-[19px] w-[12px] border-2 border-white" />
                <span className="absolute left-[7px] top-0 h-[19px] w-[12px] border-2 border-white" />
              </div>

              <span>ISTAIX</span>
            </Link>

            {/* First row */}
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
              <Link
                to="/download"
                className="transition hover:text-white/70"
              >
                Download Now
              </Link>

              <Link
                to="/license"
                className="transition hover:text-white/70"
              >
                License
              </Link>
            </div>

            {/* Second row */}
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
              <Link to="/about" className="transition hover:text-white/70">
                About
              </Link>

              <Link
                to="/features"
                className="transition hover:text-white/70"
              >
                Features
              </Link>

              <Link
                to="/pricing"
                className="transition hover:text-white/70"
              >
                Pricing
              </Link>

              <Link
                to="/careers"
                className="transition hover:text-white/70"
              >
                Careers
              </Link>

              <Link to="/help" className="transition hover:text-white/70">
                Help
              </Link>

              <Link
                to="/privacy"
                className="transition hover:text-white/70"
              >
                Privacy Policy
              </Link>
            </div>

            {/* Copyright */}
            <p className="mt-5 text-[14px] text-white/90">
              © 2020 ISTAIX. All rights reserved
            </p>
          </div>

          {/* Right - App downloads */}
          <div className="md:mr-[65px]">
            <p className="text-[15px]">Get the App</p>

            <div className="mt-4 flex flex-col gap-3">
              {/* App Store */}
              <a href="#" aria-label="Download on the App Store">
                <div className="flex h-[32px] w-[108px] items-center rounded-[5px] bg-black px-2.5">
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.09.8 1.19-.24 2.33-.93 3.6-.84 1.53.12 2.68.73 3.42 1.84-3.17 1.9-2.42 6.07.49 7.24-.58 1.52-1.35 3.04-2.6 3.93zM12.03 7.25C11.88 4.99 13.71 3.14 15.82 3c.29 2.61-2.35 4.55-3.79 4.25z" />
                  </svg>

                  <div className="ml-2 leading-none">
                    <span className="block text-[6px]">
                      Download on the
                    </span>
                    <span className="text-[12px] font-medium">
                      App Store
                    </span>
                  </div>
                </div>
              </a>

              {/* Google Play */}
              <a href="#" aria-label="Get it on Google Play">
                <div className="flex h-[32px] w-[108px] items-center rounded-[5px] bg-black px-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3.5 2.8L14 13 3.5 21.2c-.3-.4-.5-.9-.5-1.5V4.3c0-.6.2-1.1.5-1.5Z"
                      fill="#61D5FF"
                    />
                    <path
                      d="M17.8 9.3L14 13 3.5 2.8c.4-.4 1-.5 1.6-.1l12.7 6.6Z"
                      fill="#5BE36A"
                    />
                    <path
                      d="M21 11.1c.7.4.7 1.4 0 1.8l-3.2 1.7-3.8-3.7 3.8-3.7L21 11.1Z"
                      fill="#FFD24A"
                    />
                    <path
                      d="M17.8 14.7L5.1 21.3c-.6.3-1.2.2-1.6-.1L14 13l3.8 1.7Z"
                      fill="#FF5D5D"
                    />
                  </svg>

                  <div className="ml-2 leading-none">
                    <span className="block text-[6px]">
                      GET IT ON
                    </span>
                    <span className="text-[12px] font-medium">
                      Google Play
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;