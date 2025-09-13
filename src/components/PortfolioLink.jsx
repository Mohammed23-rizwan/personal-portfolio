import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const PortfolioLink = () => {
  return (
    <div className="bg-primary rounded-[14px] w-full flex items-center justify-between sm:justify-normal px-10 gap-4 sm:h-30 py-5 sm:py-0">
      <h2 className="uppercase">Portfolio</h2>
      {/* <div className="w-[1px] min-h-full sm:h-[70%] bg-txtprimaryalt rounded-full"></div> */}
      <div className="w-[1px] h-[170px] sm:h-[70%] bg-txtprimaryalt1"></div>

      <ul className="text-2xl flex flex-col sm:flex-row gap-3">
        <li className="p-3 rounded-[14px] cursor-pointer bg-bgprimary text-txtprimaryalt flex justify-center items-center gap-2">
          <FaGithub className="text-white" />
          <p className="text-[16px]">GitHub</p>
        </li>
        <li className="p-3 rounded-[14px] cursor-pointer bg-bgprimary text-txtprimaryalt flex justify-center items-center gap-2">
          <FaLinkedin className="text-white" />
          <p className="text-[16px]">LinkedIn</p>
        </li>
        <li className="p-3 rounded-[14px] cursor-pointer bg-bgprimary text-txtprimaryalt flex justify-center items-center gap-2">
          <FaFacebookSquare className="text-white" />
          <p className="text-[16px]">FaceBook</p>
        </li>
      </ul>
    </div>
  );
};

export default PortfolioLink;
