import React, { useEffect, useState, useRef } from "react";
import "@css/userChatLayoutStyles.css";
import { sendPrompt, sendSearchQuery } from '../api';

import { Response } from "@components";
import { SearchResponse } from "@components";

export const UserChatLayout = () => {
  const submitBtnRef = useRef(null);
  const searchBtnRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [apiResponse, setApiResponse] = useState(null); // Add this state variable
  const [searchApiResponse, setSearchApiResponse] = useState(null); // Add this state variable]

  useEffect(() => {
    if (inputValue.length > 0) {
      setIsDisabled(false);
      // Remove opacity-40 class from button
      submitBtnRef.current.classList.remove("opacity-40");
      //searchBtnRef.current.classList.remove("opacity-40");
    } else {
      setIsDisabled(true);
      // Add opacity-40 class to button
      submitBtnRef.current.classList.add("opacity-40");
      //searchBtnRef.current.classList.add("opacity-40");

    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log({
      text: inputValue,
    });
  };

  const handleSubmit = async () => {
    const [searchResponse, response] = await Promise.all([
      sendSearchQuery({ text: inputValue }),
      sendPrompt({ text: inputValue }),
    ]);

    setSearchApiResponse(searchResponse)
    setApiResponse(response)
  };

  return (
    <>
      <div className="box-border m-auto flex flex-col min-h-screen">

          <div className="rounded-lg bg-white p-3 shadow-md">
            <Response apiResponse={apiResponse} searchApiResponse={searchApiResponse} />
          </div>

        <div className="flex-grow flex flex-row items-center justify-end w-[100%] lg:mb-[1rem] lg:flex-col">
          <input
            className="relative border border-[#e2e8f0] rounded-full w-[100%] h-[55px] bottom-0 overflow-hidden text-left text-[#718096] font-medium text-[14px] leading-[100%] pl-[20px] mt-[1rem] mb-[1rem] lg:w-[940px]"
            placeholder="Send a message"
            value={inputValue}
            onChange={handleInputChange}
          ></input>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              id="submit-button"
              className="relative flex items-center justify-center w-[200px] h-[50px] rounded-full opacity-40 overflow-hidden bg-gradient-to-r shadow-lg"
              style={{ backgroundColor: '#0d41d1' }} // UTS blue color code
              ref={submitBtnRef}
              disabled={isDisabled}
              onClick={() => {
                handleSubmit();
              }}
            >
              <div className="text-white text-left font-semibold text-[14px] leading-[16px] relative w-[150px] h-5">
                Ask AskUTS ChatBot
              </div>
            </button>
          </div>

        </div>
        </div>
      </div>
    </>
  );
};
