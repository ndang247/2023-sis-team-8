import React from "react";
import "../css/userChatLayoutStyles.css";

import { Footer, ResponseLayout } from "../components";

export default function UserChatLayout() {
  return (
    <>
      <div className="box-border m-auto flex flex-col min-h-screen">
        <ResponseLayout />

        <div className="flex-grow flex flex-row items-center justify-end w-[100%] lg:mb-[1rem] lg:flex-col">
          <input
            className="relative border border-[#e2e8f0] rounded-full w-[100%] h-[55px] bottom-0 overflow-hidden text-left text-[#718096] font-medium text-[14px] leading-[100%] pl-[20px] mt-[1rem] mb-[1rem] lg:w-[940px]"
            placeholder="Send a message"
          ></input>

          <button
            className="relative flex items-center justify-center w-[120px] h-[50px] rounded-full opacity-40 overflow-hidden bottom-0 bg-gradient-to-r from-blue-600 to-[#0f4beb] shadow-lg"
            disabled
          >
            <div className="text-white text-left font-semibold text-[14px] leading-[16px] relative w-[50px] h-5">
              Submit
            </div>
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
}
