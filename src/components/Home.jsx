import PersonalSection from "./PersonalSection";
import IntresetedSection from "./IntresetedSection";
import dp from "../assets/DP.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home1 = () => {

  const dpref = useRef()

  useGSAP(()=>{gsap.from(dpref.current,{scale:0,duration:2})})

  return (
    <div className="w-full sm:h-[250px] gap-10 flex flex-col sm:flex-row">
      <div className="rounded-[25px] sm:w-1/4 lg:w-1/5 overflow-hidden shadow-[0_3px_10px_rgb(128,0,0,0.2)] border border-primary">
        <img
          src={dp}
          ref={dpref}
          className="w-full h-full bg-cover bg-center object-cover"
          alt="DP image"
        />
      </div>
      <div className="sm:w-1/10 w-full lg:w-full grid sm:grid-rows-5 gap-10">
        <PersonalSection />
        <IntresetedSection />
      </div>
    </div>
  );
};

export default Home1;
