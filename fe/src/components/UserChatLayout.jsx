import React, { useEffect, useState } from "react";
import "@css/userChatLayoutStyles.css";
import { sendPrompt } from "@api";

import { ResponseLayout } from "@components";

export const UserChatLayout = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue.length > 0) {
      setIsDisabled(false);
      // Remove opacity-40 class from button
      document.getElementById("submit-button").classList.remove("opacity-40");
    } else {
      setIsDisabled(true);
      // Add opacity-40 class to button
      document.getElementById("submit-button").classList.add("opacity-40");
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log({
      text: inputValue,
    });
  };

  const handleSubmit = () => {
    sendPrompt({
      text: inputValue,
    });
  };

  return (
    <>
      <div className="box-border m-auto flex flex-col min-h-screen">
        <ResponseLayout />

        <div className="flex-grow flex flex-row items-center justify-end w-[100%] lg:mb-[1rem] lg:flex-col">
          <input
            className="relative border border-[#e2e8f0] rounded-full w-[100%] h-[55px] bottom-0 overflow-hidden text-left text-[#718096] font-medium text-[14px] leading-[100%] pl-[20px] mt-[1rem] mb-[1rem] lg:w-[940px]"
            placeholder="Send a message"
            value={inputValue}
            onChange={handleInputChange}
          ></input>

          <button
            id="submit-button"
            className="relative flex items-center justify-center w-[120px] h-[50px] rounded-full opacity-40 overflow-hidden bottom-0 bg-gradient-to-r from-blue-600 to-[#0f4beb] shadow-lg"
            disabled={isDisabled}
            onClick={handleSubmit}
          >
            <div className="text-white text-left font-semibold text-[14px] leading-[16px] relative w-[50px] h-5">
              Submit
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
