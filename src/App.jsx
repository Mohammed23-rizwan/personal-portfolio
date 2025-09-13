// import React from "react";
// import Home from "./Components/Home";
import Exprecience from "./Components/Exprecience";
import GeneralData from "./components/GeneralData";
import PortfolioLink from "./components/PortfolioLink";
import Details from "./components/Details";

const App = () => {
  return (
    <div className="bg-bgprimary w-full min-h-screen text-txtprimary p-4 sm:p-14 overflow-hidden gap-10 flex flex-col">
      {/* <Home /> */}
      <Exprecience/>
      <GeneralData/>
      <PortfolioLink/>
      <Details/>
    </div>
  );
};

export default App;
