import React from "react";
import "../css/userChatLayoutStyles.css";
import utsLogo from "../assets/uts-logo.png";

export default function UserChatLayout() {
  return (
    <>
      <div className="box-border m-auto flex flex-col min-h-screen justify-between items-center">
        <main className="flex-grow flex flex-row items-center justify-center mt-[20%]">
          {/* <div className="bg-white rounded-[14px] w-[494px] h-[480px] absolute left-1/2 transform -translate-x-1/2 top-[213px] shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex flex-row items-center justify-center w-[121px] h-[54px] absolute left-[333px] top-[189px] shadow-md overflow-hidden">
              <div className="text-[#fff] text-left font-semibold text-[14px] leading-[16px] relative w-[34px] h-[20px]">
                Save
              </div>
            </div>
            <div className="bg-[#fff] rounded-full border-solid border-gray-300 border w-[283px] h-[54px] absolute left-[40px] top-[189px] overflow-hidden">
              <div className="text-gray-500 text-left font-medium text-[14px] leading-[100%] absolute left-[20px] top-[18px]">
                sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </div>
            </div>
            <div className="title text-[#1b2559] text-left font-bold text-[24px] leading-[100%] absolute">
              Enter your OpenAI API Key
            </div>
            <div className="body text-[#718096] text-center font-medium text-[16px] leading-[28px] absolute w-[398px]">
              You need an OpenAI API Key to use Horizon Chat UI.
              <br />
              Your API Key is stored locally on your browser and never sent
              anywhere else.
            </div>
            <div className="the-app-will-connect-to-open-ai-api-server-to-check-if-your-api-key-is-working-properly text-[#718096] text-center font-medium text-[14px] leading-[28px] absolute w-[352px]">
              *The app will connect to OpenAI API server to check if your API
              Key is working properly.
            </div>
            <div className="get-your-api-key-from-open-ai-dashboard text-[#603cff] text-center font-semibold text-[14px] leading-[28px] absolute">
              Get your API key from Open AI Dashboard
            </div>
            <div className="absolute inset-0">
              <div className="your-api-key-is-not-working text-[#1b2559] text-center font-bold text-[16px] leading-[28px] absolute">
                Your API Key is not working?
              </div>
              <svg
                className="vector3 absolute left-[362.31px] top-[323px] overflow-visible"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.06037 0.24375C8.73537 -0.08125 8.21037 -0.0812501 7.88537 0.24375L4.65204 3.47708L1.41871 0.24375C1.09371 -0.0812504 0.568707 -0.0812504 0.243707 0.24375C-0.0812931 0.56875 -0.0812932 1.09375 0.243707 1.41875L4.06871 5.24375C4.39371 5.56875 4.91871 5.56875 5.24371 5.24375L9.06871 1.41875C9.38537 1.10208 9.38537 0.56875 9.06037 0.24375Z"
                  fill="#1B2559"
                />
              </svg>
            </div>
          </div> */}

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
