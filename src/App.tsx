import React from "react";
import { Navbar } from "./Sections/NavBar";
import { HeroSection } from "./Sections/HeroSections";


export default function App(): React.ReactElement {
  // const clientsData = [
  //   {
  //     name: "Kogi State Government",
  //     className: "left-[232px]",
  //   },
  //   {
  //     name: "Vami Farms Nigeria Limited",
  //     className: "left-[calc(50.00%_-_136px)]",
  //   },
  //   {
  //     name: "National Youth Council of Nigeria (NYCN)",
  //     className: "left-[1010px]",
  //   },
  // ];

  return (
    <div className="bg-white overflow-hidden w-full relative flex flex-col">
      <Navbar />
      <HeroSection />
    </div>
  );
};
