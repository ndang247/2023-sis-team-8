import React, { useState, useRef } from "react";
import "@css/responseLayoutStyles.css";
import { Typewriter } from "@components";
import { sendPrompt } from "@api";

export const ResponseLayout = () => {
  const inputRef = useRef(null);
  const [editValue, setEditValue] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && !inputRef.current.readOnly) {
      try {
        inputRef.current.readOnly = true;
        await sendPrompt({
          text: editValue,
        });
        console.log({
          text: editValue,
        });
        setChatMessages([...chatMessages, editValue]); // Add user message to chat
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEditPrompt = (id, e) => {
    // Focus on input
    inputRef.current.focus();
    inputRef.current.readOnly = false;
  };

  return (
    <>
      <div className="flex-grow flex flex-col items-center justify-start w-[100%]">
        <div className="flex justify-center relative mt-[1.5rem] w-[100%]">
          <input
            id="edit-prompt-1"
            className="rounded-full border-solid border-[#a6a6a6] border-[1px] w-[100%] h-[55px] relative overflow-hidden mb-[1rem] text-left text-[#718096] font-medium text-[14px] leading-[100%] pl-[20px] lg:w-[900px]"
            ref={inputRef}
            value={editValue}
            onChange={handleEditChange}
            onKeyDown={handleKeyDown}
            readOnly
          ></input>

          <button
            className="relative flex items-center justify-center w-[50px] h-[50px] overflow-hidden bottom-0"
            onClick={() => handleEditPrompt("edit-prompt-1")}
          >
            {/* Add your SVG icon or image here */}
          </button>
        </div>
        <div className="w-[100%] relative overflow-hidden mb-8 pl-5 lg:w-[940px]">
          {chatMessages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </div>
    </>
  );
};
