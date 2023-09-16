import React from "react";
import "../css/footerStyles.css";
import utsLogo from "../assets/uts-logo.png";

export const Footer = () => {
  return (
    <footer className="left-0 bottom-0 w-[100%] bg-[#0f4beb] text-[#fff]">
      <div className="mr-auto ml-auto w-[100%] lg:h-[5rem] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
        <div className="inline-block float-left relative pl-[15px] pr-[15px] mt-[0.5rem] mb-[0.5rem]">
          <a
            href="https://www.uts.edu.au/"
            target="_blank"
            title="University of Technology Sydney"
          >
            <img src={utsLogo} alt="UTS logo" className="h-[60px]" />
          </a>
        </div>
        <div className="text-[#fff] text-center font-medium text-[16px] leading-[24px] lg:pt-[0.5rem] lg:mt-3">
          © 2023 AskUTS. All Rights Reserved.
        </div>
        <div className="text-center mb-[1rem] space-x-4 mt-[1rem] lg:flex lg:justify-center">
          <a
            href=""
            className="text-[#fff] text-center font-medium text-[16px] leading-[24px]"
          >
            Homepage
          </a>
          <a
            href=""
            className="text-[#fff] text-center font-medium text-[16px] leading-[24px]"
          >
            License
          </a>
          <a
            href=""
            className="text-[#fff] text-center font-medium text-[16px] leading-[24px]"
          >
            Terms of Use
          </a>
          <a
            href=""
            className="text-[#fff] text-center font-medium text-[16px] leading-[24px]"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
