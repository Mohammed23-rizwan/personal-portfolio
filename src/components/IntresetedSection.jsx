import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { IoLogoGameControllerB } from "react-icons/io";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiMovie2AiLine } from "react-icons/ri";

const IntresetedSection = () => {
  const timeline = gsap.timeline();

  const liref1 = useRef();
  const liref2 = useRef();
  const liref3 = useRef();

  const intresting = [
    { name: "traveling", icons: MdOutlineTravelExplore, ref: liref1 },
    { name: "gaming", icons: IoLogoGameControllerB, ref: liref2 },
    { name: "Movies", icons: RiMovie2AiLine, ref: liref3 },
  ];

  useGSAP(() => {
    timeline
      .from(liref1.current, { opacity: 0, duration: .5, x: -100 })
      .from(liref2.current, { opacity: 0, duration: .5, x: -100 })
      .from(liref3.current, { opacity: 0, duration: .5, x: -100 });
  });
  return (
    <div className="p-4 bg-primary rounded-[14px] flex items-center w-full sm:row-span-2 gap-5">
      <h1 className="font-bold">Interests</h1>
      <div className="w-[1px] h-full bg-txtprimaryalt1"></div>
      <ul className="h-full flex justify-center items-center flex-col sm:flex-row gap-3">
        {intresting.map((item, index) => {
          return (
            <li
              className="w-full bg-bgprimary rounded-[6px] py-1.5 px-2 text-txtprimaryalt flex gap-2 justify-center items-center"
              key={index}
              ref={item.ref}
            >
              <item.icons className=" text-[20px]" />
              <p className="capitalize text-sm">{item.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IntresetedSection;
