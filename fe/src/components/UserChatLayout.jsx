import React from "react";
import "../css/userChatLayoutStyles.css";
import utsLogo from "../assets/uts-logo.png";

import { ResponseLayout } from "../components";

export default function UserChatLayout() {
  return (
    <>
      <div className="box-border m-auto flex flex-col min-h-screen justify-between items-center">
        <main className="flex-grow flex flex-row items-center justify-center mt-[20%]">
          {/* Chat input */}
          <input
            className="absolute border border-[#e2e8f0] rounded-full w-[80%] lg:w-[700px] h-[54px] overflow-hidden lg:left-1/2 lg:transform lg:-translate-x-1/2 bottom-[220px] lg:bottom-[140px] text-left text-[#718096] font-medium text-[14px] leading-[100%] pl-[20px]"
            placeholder="Send a message"
          ></input>

          {/* Submit button */}
          <button
            className="absolute flex items-center justify-center w-[100px] h-[54px] rounded-full opacity-20 overflow-hidden lg:left-1/2 lg:transform lg:-translate-x-[-370px] bottom-[100px] lg:bottom-[140px] bg-gradient-to-r from-blue-600 to-[#0f4beb] shadow-lg"
            disabled
          >
            <div className="text-white text-left font-semibold text-[14px] leading-[16px] relative w-[50px] h-5">
              Submit
            </div>
          </button>

          {/* Disclaimer */}
          <div className="text-center font-medium text-[12px] leading-[100%] absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 bottom-[170px] lg:bottom-[100px] w-[80%] lg:w-[700px]">
            <span>
              <span className="text-[#718096] font-medium text-[12px] leading-[100%]">
                Free Research Preview. ChatGPT may produce inaccurate
                information about people, places, or facts.{" "}
              </span>
              <span className="text-[#120f43] font-medium text-[12px] leading-[100%] underline">
                ChatGPT May 12 Version
              </span>
            </span>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-[#fff] text-center bg-[#0f4beb] w-screen max-lg:w-auto h-20 max-lg:fixed max-lg:bottom-0">
          <div className="mr-auto ml-auto w-screen max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
            <div className="inline-block float-left relative pl-[15px] pr-[15px] max-lg:mb-3">
              <a
                href="https://www.uts.edu.au/"
                target="_blank"
                title="University of Technology Sydney"
              >
                <img
                  src={utsLogo}
                  alt="UTS logo"
                  className="max-lg:w-[100px] max-lg:h-auto"
                />
              </a>
            </div>
            <div className="text-[#fff] text-center font-medium text-[14px] leading-[24px] lg:mt-3">
              © 2023 AskUTS. All Rights Reserved.
            </div>
            <div className="space-x-4 mt-3">
              <a
                href=""
                className="text-[#fff] text-center font-medium text-[14px] leading-[24px]"
              >
                Homepage
              </a>
              <a
                href=""
                className="text-[#fff] text-center font-medium text-[14px] leading-[24px]"
              >
                License
              </a>
              <a
                href=""
                className="text-[#fff] text-center font-medium text-[14px] leading-[24px]"
              >
                Terms of Use
              </a>
              <a
                href=""
                className="text-[#fff] text-center font-medium text-[14px] leading-[24px]"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
