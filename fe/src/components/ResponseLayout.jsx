import React, { useState } from "react";
import "@css/responseLayoutStyles.css";
import { sendPrompt } from "@api";

export const ResponseLayout = () => {
  const [response, setResponse] = useState("");

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      try {
        const editValue = e.target.value;
        const apiResponse = await sendPrompt({
          text: editValue,
        });
        setResponse(apiResponse.text);
        console.log(apiResponse.text);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="flex-grow flex flex-col items-center justify-start w-[100%]">
        <div className="flex justify-center relative mt-[1.5rem] w-[100%]">
          <input
            id="edit-prompt-1"
            className="rounded-full border-solid border-[#a6a6a6] border-[1px] w-[100%] h-[55px] relative overflow-hidden mb-[1rem] text-left text-[#718096] font-medium text-[14px] leading-[100%] pl-[20px] lg:w-[900px]"
            onKeyDown={handleKeyDown}
          ></input>
        </div>
        <div className="w-[100%] relative overflow-hidden mb-8 pl-5 lg:w-[940px]">
          <p>{response}</p>
          <br />
        </div>
      </div>
    </>
  );
};
