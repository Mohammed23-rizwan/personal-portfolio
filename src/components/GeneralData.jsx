import React from "react";
import { FaGitAlt, FaReact } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { VscGithubAlt, VscVscode } from "react-icons/vsc";
import ind from "../assets/IN.png";
import uk from "../assets/UK.png";

const GeneralData = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:h-[450px] sm:mt-10 mt-0">
      <div className="sm:grid-rows-3 gap-10 grid">
        <div className="bg-primary rounded-[14px] w-full flex items-center px-10 py-8 sm:py-0 gap-4">
          <h2 className="uppercase">Skill sets</h2>
          <div className="w-[1px] h-[70%] bg-txtprimaryalt rounded-full"></div>
          <ul className="text-2xl flex gap-3">
            <li className="p-2 rounded-[14px] cursor-pointer border border-txtprimaryalt  text-blue-400">
              <FaReact />
            </li>
            <li className="p-2 rounded-[14px] cursor-pointer border border-txtprimaryalt text-[#F0DB4F]">
              <TbBrandJavascript />
            </li>
            <li className="p-2 rounded-[14px] cursor-pointer border border-txtprimaryalt text-[#FF0000]">
              <IoLogoHtml5 />
            </li>
          </ul>
        </div>
        <div className="bg-primary rounded-[14px] w-full flex items-center px-10 py-8 sm:py-0 gap-4">
          <h2 className="uppercase">Software</h2>
          <div className="w-[1px] h-[70%] hidden sm:block bg-txtprimaryalt rounded-full"></div>
          <ul className="text-2xl flex gap-3">
            <li className="p-2 rounded-[14px] cursor-pointer border border-txtprimaryalt  text-[#F1502F]">
              <FaGitAlt />
            </li>
            <li className="p-2 rounded-[14px] cursor-pointer border border-txtprimaryalt text-[#4078c0]">
              <VscGithubAlt />
            </li>
            <li className="p-2 rounded-[14px] cursor-pointer border border-txtprimaryalt text-[#0098FF]">
              <VscVscode />
            </li>
          </ul>
        </div>
        <div className="bg-primary rounded-[14px] w-full flex items-center px-10 py-8 sm:py-0 gap-4">
          <h2 className="uppercase">language</h2>
          <div className="w-[1px] h-[70%] bg-txtprimaryalt rounded-full"></div>
          <ul className="text-2xl flex gap-3">
            <li className="p-2 rounded-[14px] cursor-pointer border border-txtprimaryalt  text-[#F1502F] overflow-hidden h-10 w-10">
              <img src={ind} alt="" />
            </li>
            <li className="p-2 rounded-[14px] cursor-pointer border border-txtprimaryalt text-[#4078c0] h-10 w-10">
              <img src={uk} alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-[14px] bg-primary p-10">
        <ul>
          <li>
            <div className="flex items-center justify-between">
              <h2 className="font-semibold sm:text-xl text-base capitalize">
                Matriculation school
              </h2>
              <div className=" bg-bgprimary p-2 px-5 rounded-lg text-txtprimaryalt sm:text-sm text-xs">2015</div>
            </div>
            <h2 className="mt-1 capitalize sm:text-[16px] text-sm text-txtprimaryalt">Dawn Matriculation hr sec school</h2>
            <h2 className="mt-1 capitalize sm:text-[16px] text-sm text-txtprimaryalt">Chennai,Tamil nadu</h2>
          </li>
          <div className="w-full h-[1px] bg-txtprimaryalt rounded-full mt-3"></div>
          <li className="mt-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold sm:text-xl text-base capitalize">
                Higher school
              </h2>
              <div className=" bg-bgprimary p-2 px-5 rounded-lg text-txtprimaryalt sm:text-sm text-xs">2017</div>
            </div>
            <h2 className="mt-1 capitalize sm:text-[16px] text-sm text-txtprimaryalt">Nav bharath Matriculation hr sec school</h2>
            <h2 className="mt-1 capitalize sm:text-[16px] text-sm text-txtprimaryalt">Chennai,Tamil nadu</h2>
          </li>
          <div className="w-full h-[1px] bg-txtprimaryalt rounded-full mt-3"></div>
          <li className="mt-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold sm:text-xl text-base capitalize">
                graudate
              </h2>
              <div className=" bg-bgprimary p-2 px-5 rounded-lg text-txtprimaryalt sm:text-sm text-xs">2021</div>
            </div>
            <h2 className="mt-1 capitalize sm:text-[16px] text-sm text-txtprimaryalt">SKR enginnering college</h2>
            <h2 className="mt-1 capitalize sm:text-[16px] text-sm text-txtprimaryalt">Chennai,Tamil nadu</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GeneralData;
