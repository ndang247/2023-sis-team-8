import React from "react";

export default function UserChatLayout() {
  return (
    <>
      <div className="box-border w-[96.875rem] h-[61.625rem] relative m-auto">
        {/* Footer */}
        <div className="absolute inset-0">
          <div className="text-[#718096] text-center absolute left-[20px] bottom-0">
            © 2023 AskUTS. All Rights Reserved.
          </div>
          <div className="w-[416px] h-[24px] static">
            <div className="text-[#718096] text-center absolute left-[1104px] bottom-0">
              <a href="">Hompage</a>
            </div>
            <div className="text-[#718096] text-center absolute left-[1216px] bottom-0">
              <a href="">License</a>
            </div>
            <div className="text-[#718096] text-center absolute left-[1306px] bottom-0">
              <a href="">Terms of Use</a>
            </div>
            <div className="text-[#718096] text-center absolute left-[1428px] bottom-0">
              <a href="">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Chat input */}
        <input
          className="rounded-[45px] border-solid border-[#e2e8f0] border-[1px] w-[738px] h-[54px] absolute left-[305px] top-[825px] overflow-hidden text-[#718096] text-left p-[20px]"
          placeholder="What are you looking for?"
        ></input>

        {/* Submit button */}
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[45px] flex flex-row gap-0 items-center justify-center w-[192px] h-[54px] absolute left-[1053px] top-[825px] shadow-2xl overflow-hidden">
          <div className="text-[#ffffff] text-left relative w-[50px] h-[20px] font-semibold text-base leading-[16px]">
            Submit
          </div>
        </button>
      </div>
    </>
  );
}
