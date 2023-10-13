import React, { useState, useRef } from "react";
import "@css/responseLayoutStyles.css";
import { Typewriter } from "@components";
import { sendPrompt } from "@api";

export const ResponseLayout = () => {
  const inputRef = useRef(null);
  const [editValue, setEditValue] = useState("");

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !inputRef.current.readOnly) {
      try {
        inputRef.current.readOnly = true;
        sendPrompt({
          text: editValue,
        });
        console.log({
          text: editValue,
        });
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
            <svg
              className="edit"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_109)">
                <path
                  d="M3 17.46V20.5C3 20.78 3.22 21 3.5 21H6.54C6.67 21 6.8 20.95 6.89 20.85L17.81 9.94L14.06 6.19L3.15 17.1C3.05 17.2 3 17.32 3 17.46ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
                  fill="#718096"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_109">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className="w-[100%] relative overflow-hidden mb-8 pl-5 lg:w-[940px]">
          <p>
            <Typewriter
              text="Artificial Intelligence (AI) offers numerous advantages and has
              the potential to revolutionize various aspects of our lives. Here
              are some key advantages of AI:"
              delay={50}
            />
          </p>
          <br />
          <p>
            <Typewriter
              text=" Automation: AI can automate repetitive and mundane tasks, saving
              time and effort for humans. It can handle large volumes of data,
              perform complex calculations, and execute tasks with precision and
              consistency. This automation leads to increased productivity and
              efficiency in various industries."
              delay={50}
            />
          </p>
          <br />
          <p>
            Decision-making: AI systems can analyze vast amounts of data,
            identify patterns, and make informed decisions based on that
            analysis. This ability is particularly useful in complex scenarios
            where humans may struggle to process large datasets or where quick
            and accurate decisions are crucial.
          </p>
          <br />
          <p>
            Improved accuracy: AI algorithms can achieve high levels of accuracy
            and precision in tasks such as image recognition, natural language
            processing, and data analysis. They can eliminate human errors
            caused by fatigue, distractions, or bias, leading to more reliable
            and consistent results.
          </p>
          <br />
          <p>
            Continuous operation: AI systems can work tirelessly without the
            need for breaks, resulting in uninterrupted 24/7 operations. This
            capability is especially beneficial in applications like customer
            support chatbots, manufacturing processes, and surveillance systems.
          </p>
        </div>
        <div className="flex justify-center relative mt-[1.5rem] w-[100%]">
          <input
            className="rounded-full border-solid border-[#a6a6a6] border-[1px] w-[100%] h-[55px] relative overflow-hidden mb-[1rem] text-left text-[#718096] font-medium text-[14px] leading-[100%] pl-[20px] lg:w-[900px]"
            readOnly
          ></input>

          <button className="relative flex items-center justify-center w-[50px] h-[50px] overflow-hidden bottom-0">
            <svg
              className="edit"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_109)">
                <path
                  d="M3 17.46V20.5C3 20.78 3.22 21 3.5 21H6.54C6.67 21 6.8 20.95 6.89 20.85L17.81 9.94L14.06 6.19L3.15 17.1C3.05 17.2 3 17.32 3 17.46ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
                  fill="#718096"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_109">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className="w-[100%] relative overflow-hidden mb-8 pl-5 lg:w-[940px]">
          <p>
            <Typewriter
              text=" Automation: AI can automate repetitive and mundane tasks, saving
              time and effort for humans. It can handle large volumes of data,
              perform complex calculations, and execute tasks with precision and
              consistency. This automation leads to increased productivity and
              efficiency in various industries."
              delay={50}
            />
          </p>
        </div>
        <div className="flex justify-center relative mt-[1.5rem] w-[100%]">
          <input
            className="rounded-full border-solid border-[#a6a6a6] border-[1px] w-[100%] h-[55px] relative overflow-hidden mb-[1rem] text-left text-[#718096] font-medium text-[14px] leading-[100%] pl-[20px] lg:w-[900px]"
            readOnly
          ></input>

          <button className="relative flex items-center justify-center w-[50px] h-[50px] overflow-hidden bottom-0">
            <svg
              className="edit"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_109)">
                <path
                  d="M3 17.46V20.5C3 20.78 3.22 21 3.5 21H6.54C6.67 21 6.8 20.95 6.89 20.85L17.81 9.94L14.06 6.19L3.15 17.1C3.05 17.2 3 17.32 3 17.46ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
                  fill="#718096"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_109">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className="w-[100%] relative overflow-hidden mb-8 pl-5 lg:w-[940px]">
          <p>
            <Typewriter
              text="Artificial Intelligence (AI) offers numerous advantages and has
              the potential to revolutionize various aspects of our lives. Here
              are some key advantages of AI:"
              delay={50}
            />
          </p>
          <br />
          <p>
            <Typewriter
              text=" Automation: AI can automate repetitive and mundane tasks, saving
              time and effort for humans. It can handle large volumes of data,
              perform complex calculations, and execute tasks with precision and
              consistency. This automation leads to increased productivity and
              efficiency in various industries."
              delay={50}
            />
          </p>
          <br />
          <p>
            Decision-making: AI systems can analyze vast amounts of data,
            identify patterns, and make informed decisions based on that
            analysis. This ability is particularly useful in complex scenarios
            where humans may struggle to process large datasets or where quick
            and accurate decisions are crucial.
          </p>
          <br />
          <p>
            Improved accuracy: AI algorithms can achieve high levels of accuracy
            and precision in tasks such as image recognition, natural language
            processing, and data analysis. They can eliminate human errors
            caused by fatigue, distractions, or bias, leading to more reliable
            and consistent results.
          </p>
          <br />
          <p>
            Continuous operation: AI systems can work tirelessly without the
            need for breaks, resulting in uninterrupted 24/7 operations. This
            capability is especially beneficial in applications like customer
            support chatbots, manufacturing processes, and surveillance systems.
          </p>
        </div>
        <div className="flex justify-center relative mt-[1.5rem] w-[100%]">
          <input
            className="rounded-full border-solid border-[#a6a6a6] border-[1px] w-[100%] h-[55px] relative overflow-hidden mb-[1rem] text-left text-[#718096] font-medium text-[14px] leading-[100%] pl-[20px] lg:w-[900px]"
            readOnly
          ></input>

          <button className="relative flex items-center justify-center w-[50px] h-[50px] overflow-hidden bottom-0">
            <svg
              className="edit"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_109)">
                <path
                  d="M3 17.46V20.5C3 20.78 3.22 21 3.5 21H6.54C6.67 21 6.8 20.95 6.89 20.85L17.81 9.94L14.06 6.19L3.15 17.1C3.05 17.2 3 17.32 3 17.46ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
                  fill="#718096"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_109">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className="w-[100%] relative overflow-hidden mb-8 pl-5 lg:w-[940px]">
          <p>
            <Typewriter
              text="Artificial Intelligence (AI) offers numerous advantages and has
              the potential to revolutionize various aspects of our lives. Here
              are some key advantages of AI:"
              delay={50}
            />
          </p>
          <br />
          <p>
            <Typewriter
              text=" Automation: AI can automate repetitive and mundane tasks, saving
              time and effort for humans. It can handle large volumes of data,
              perform complex calculations, and execute tasks with precision and
              consistency. This automation leads to increased productivity and
              efficiency in various industries."
              delay={50}
            />
          </p>
          <br />
          <p>
            Decision-making: AI systems can analyze vast amounts of data,
            identify patterns, and make informed decisions based on that
            analysis. This ability is particularly useful in complex scenarios
            where humans may struggle to process large datasets or where quick
            and accurate decisions are crucial.
          </p>
          <br />
          <p>
            Improved accuracy: AI algorithms can achieve high levels of accuracy
            and precision in tasks such as image recognition, natural language
            processing, and data analysis. They can eliminate human errors
            caused by fatigue, distractions, or bias, leading to more reliable
            and consistent results.
          </p>
          <br />
          <p>
            Continuous operation: AI systems can work tirelessly without the
            need for breaks, resulting in uninterrupted 24/7 operations. This
            capability is especially beneficial in applications like customer
            support chatbots, manufacturing processes, and surveillance systems.
          </p>
        </div>
        <div className="flex justify-center relative mt-[1.5rem] w-[100%]">
          <input
            className="rounded-full border-solid border-[#a6a6a6] border-[1px] w-[100%] h-[55px] relative overflow-hidden mb-[1rem] text-left text-[#718096] font-medium text-[14px] leading-[100%] pl-[20px] lg:w-[900px]"
            readOnly
          ></input>

          <button className="relative flex items-center justify-center w-[50px] h-[50px] overflow-hidden bottom-0">
            <svg
              className="edit"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_109)">
                <path
                  d="M3 17.46V20.5C3 20.78 3.22 21 3.5 21H6.54C6.67 21 6.8 20.95 6.89 20.85L17.81 9.94L14.06 6.19L3.15 17.1C3.05 17.2 3 17.32 3 17.46ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
                  fill="#718096"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_109">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className="w-[100%] relative overflow-hidden mb-8 pl-5 lg:w-[940px]">
          <p>
            <Typewriter
              text="Artificial Intelligence (AI) offers numerous advantages and has
              the potential to revolutionize various aspects of our lives. Here
              are some key advantages of AI:"
              delay={50}
            />
          </p>
          <br />
          <p>
            <Typewriter
              text=" Automation: AI can automate repetitive and mundane tasks, saving
              time and effort for humans. It can handle large volumes of data,
              perform complex calculations, and execute tasks with precision and
              consistency. This automation leads to increased productivity and
              efficiency in various industries."
              delay={50}
            />
          </p>
          <br />
          <p>
            Decision-making: AI systems can analyze vast amounts of data,
            identify patterns, and make informed decisions based on that
            analysis. This ability is particularly useful in complex scenarios
            where humans may struggle to process large datasets or where quick
            and accurate decisions are crucial.
          </p>
          <br />
          <p>
            Improved accuracy: AI algorithms can achieve high levels of accuracy
            and precision in tasks such as image recognition, natural language
            processing, and data analysis. They can eliminate human errors
            caused by fatigue, distractions, or bias, leading to more reliable
            and consistent results.
          </p>
          <br />
          <p>
            Continuous operation: AI systems can work tirelessly without the
            need for breaks, resulting in uninterrupted 24/7 operations. This
            capability is especially beneficial in applications like customer
            support chatbots, manufacturing processes, and surveillance systems.
          </p>
        </div>
      </div>
    </>
  );
};
