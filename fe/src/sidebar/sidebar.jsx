import React from "react";
import "../sidebar.css";

import Auto_awesome_FILL1_wght400_GRAD0_opsz481 from "assets/Auto_awesome_FILL1_wght400_GRAD0_opsz481";
import Vector from "assets/Vector";
import Icon from "assets/Icon";
import Vector1 from "assets/Vector1";
import Vector2 from "assets/Vector2";
import Avatar from "assets/Avatar";
import Logout from "assets/Logout";
import Vector3 from "assets/Vector3";
export default function Sidebar(props: SidebarProps) {
  return <div className={`w-[310px] h-[1096px] pt-[736px] pb-[114px] drop-shadow-lg rounded-[20px] px-[27px] relative bg-white flex justify-center ${props.className}`} style={props.style}>
      <div className="top-[52px] h-[26px] w-[222px] font-poppins text-[#1B2559] inset-x-[0] absolute text-center leading-none mx-auto">
        <p className="text-[26px] font-[700] leading-none inline">
          {"MAKE "}
        </p>
        <p className="text-[26px] font-[400] leading-none inline">
          UTS BETTER
        </p>
      </div>
      <div className="w-[310px] h-[0] top-[118px] outline outline-1 outline-[#E9EDF7] inset-x-[0] absolute mx-auto" />
      <div className="w-[105px] h-[504px] left-[72px] top-[159px] font-plus_jakarta_sans absolute gap-4 flex flex-col text-left">
        <p className="[flex-grow:1] font-[700] leading-[30px] text-[#1B2559] h-[30px] w-[57px] text-base">
          Chat UI
        </p>
        <p className="[flex-grow:1] font-[500] leading-[30px] text-[#718096] h-[30px] w-[90px] text-base mt-3.5">
          My Projects
        </p>
        <p className="[flex-grow:1] font-[500] leading-[30px] text-[#718096] h-[30px] text-base mt-3 w-20">
          Templates
        </p>
        <p className="[flex-grow:1] font-[500] leading-[30px] text-[#718096] h-[30px] text-base mt-3 w-24">
          Other Pages
        </p>
        <p className="font-[500] text-[#718096] w-[88px] text-sm leading-none h-3.5">
          Prompt Page
        </p>
        <p className="font-[500] text-[#718096] text-sm leading-none mt-1.5 h-3.5 w-14">
          Register
        </p>
        <p className="font-[500] text-[#718096] text-sm leading-none mt-1.5 h-3.5 w-11">
          Sign In
        </p>
        <p className="[flex-grow:1] font-[500] leading-[30px] text-[#718096] h-[30px] w-[100px] text-base mt-3">
          Admin Pages
        </p>
        <p className="font-[500] text-[#718096] w-[88px] text-sm leading-none h-3.5">
          All Templates
        </p>
        <p className="font-[500] text-[#718096] text-sm leading-none mt-1.5 h-3.5 w-24">
          New Template
        </p>
        <p className="font-[500] text-[#718096] w-[92px] text-sm leading-none mt-1.5 h-3.5">
          Edit Template
        </p>
        <p className="font-[500] text-[#718096] w-[105px] text-sm leading-none mt-1.5 h-3.5">
          Users Overview
        </p>
      </div>
      <div className="w-[25px] h-[358px] left-[35px] top-[162px] absolute gap-9 flex flex-col items-center">
        <Auto_awesome_FILL1_wght400_GRAD0_opsz481 className="w-6 h-6" />
        <Vector className="w-[18px] h-5 mt-0.5" />
        <Icon className="w-6 h-6" />
        <Vector1 className="h-[18px] w-4 mt-0.5" />
        <Vector2 className="mt-[104px] w-4 h-5" />
      </div>
      <div className="w-[50px] h-[299px] top-[223px] right-[26px] font-plus_jakarta_sans text-[#0F4BEB] font-[700] absolute flex flex-col items-center text-center">
        <div className="[flex-grow:1] w-[50px] h-[22px] bg-[#F2EFFF] rounded-[39px] p-[0] gap-2.5 flex justify-center items-center">
          <p className="h-[18px] w-[31px] text-xs leading-4">PRO</p>
        </div>
        <div className="[flex-grow:1] bg-[#F2EFFF] mt-[38px] rounded-[39px] flex justify-center items-center w-full">
          <div className="w-[50px] h-[22px] bg-[#F2EFFF] rounded-[39px] p-[0] gap-2.5 flex justify-center items-center">
            <p className="h-[18px] w-[31px] text-xs leading-4">PRO</p>
          </div>
        </div>
        <div className="[flex-grow:1] w-[50px] h-[22px] bg-[#F2EFFF] mt-[38px] rounded-[39px] p-[0] gap-2.5 flex justify-center items-center">
          <p className="h-[18px] w-[31px] text-xs leading-4">PRO</p>
        </div>
        <div className="[flex-grow:1] w-[50px] h-[22px] bg-[#F2EFFF] mt-[135px] rounded-[39px] p-[0] gap-2.5 flex justify-center items-center">
          <p className="h-[18px] w-[31px] text-xs leading-4">PRO</p>
        </div>
        <div className="overflow-clip w-5 h-2.5 relative">
          <div className="bg-chevron_rightbg-0x opacity-50 absolute bg-center bg-contain bg-no-repeat inset-0" />
        </div>
      </div>
      <div className="h-[62px] drop-shadow-lg bottom-[26px] rounded-[30px] font-plus_jakarta_sans text-[#1B2559] font-[700] inset-x-[0] w-64 absolute bg-white flex justify-center items-center p-3.5 text-center mx-auto">
        <div className="gap-[9px] flex items-center h-full w-full">
          <Avatar className="w-[34px] h-[34px]" />
          <p className="w-[97px] text-sm leading-none h-3.5">
            Adela Parkson
          </p>
          <Logout className="w-[34px] h-[34px] ml-[45px]" />
        </div>
      </div>
      <div className="font-plus_jakarta_sans bg-gradient-to-t from-[rgba(13,65,209,1)] to-[rgba(63,17,246,1)] pt-[57px] text-white text-center rounded-2xl w-full flex h-full gap-2.5 flex-col items-center pb-8 px-6">
        <p className="font-[700] h-[18px] w-[196px] text-lg leading-none">
          Go unlimited with PRO
        </p>
        <p className="[flex-grow:1] font-[500] h-[72px] text-sm leading-6 w-52">
          Get your AI Project to another level and start doing more with Horizon AI Template PRO!
        </p>
        <div className="h-[37px] bg-[#FFFFFF24] rounded-[45px] font-[600] w-48 flex justify-center items-center mt-2.5">
          <p className="w-[169px] h-5 text-sm leading-4">
            Get started with PRO
          </p>
        </div>
      </div>
      <div className="pb-[21px] drop-shadow-lg bg-gradient-to-t from-[rgba(74,37,225,1)] to-[rgba(63,17,246,1)] px-[22px] inset-x-[0] w-20 h-20 pt-6 absolute border-solid border-white flex justify-center bottom-80 mx-auto">
        <Vector3 className="w-[35px] h-[35px]" />
      </div>
    </div>;
}
Sidebar.defaultProps = {
  className: "",
  style: {}
};
interface SidebarProps {
  className: string;
  style: Object;
}
