import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import ind from "../assets/IN.png";

const Details = () => {
  return (
    <div className="bg-primary rounded-[14px] w-full flex items-center justify-between sm:justify-normal px-10 gap-4 sm:h-30 h-full py-5 sm:py-0">
      <h2 className="uppercase">details</h2>
      <div className="w-[1px] sm:h-[70%] h-[210px] bg-txtprimaryalt rounded-full"></div>
      <ul className="text-2xl flex flex-col sm:flex-row gap-3">
        <li className="p-3 rounded-[14px] cursor-pointer bg-bgprimary text-txtprimaryalt flex justify-center items-center gap-2">
          <FaPerson className="text-primary" />
          <p className="sm:text-[16px] text-[10px]">27 years</p>
        </li>
        <li className="p-3 rounded-[14px] cursor-pointer bg-bgprimary text-txtprimaryalt flex justify-center items-center gap-2">
          <IoMail className="text-primary" />
          <p className="sm:text-[16px] text-[10px]">rizwanedu03@gmail.com</p>
        </li>
        <li className="p-3 rounded-[14px] cursor-pointer bg-bgprimary text-txtprimaryalt flex justify-center items-center gap-2">
          <FaPhoneSquareAlt className="text-primary" />
          <p className="sm:text-[16px] text-[10px]">+91-6379481218</p>
        </li>
        <li className="p-3 rounded-[14px] cursor-pointer bg-bgprimary text-txtprimaryalt flex justify-center items-center gap-2">
          <img src={ind} alt="" className="w-4 h-4"/> <p className="sm:text-[16px] text-[10px]">India</p>
        </li>
      </ul>
    </div>
  );
};

export default Details;
