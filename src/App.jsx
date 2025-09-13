// import React from "react";
// import Home from "./Components/Home";
import GeneralData from "./components/GeneralData";
import PortfolioLink from "./components/PortfolioLink";
import Details from "./components/Details";
import ExperienceAll from "./components/ExperienceAll";


const App = () => {
  return (
    <div className="bg-bgprimary w-full min-h-screen text-txtprimary p-4 sm:p-14 overflow-hidden gap-10 flex flex-col">
      {/* <Home /> */}
      <ExperienceAll/>
      <GeneralData/>
      <PortfolioLink/>
      <Details/>
    </div>
  );
};

export default App;
