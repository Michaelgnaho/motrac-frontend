import React from "react";
import { Navbar } from "./Sections/NavBar";
import { HeroSection } from "./Sections/HeroSections";
import AboutUs from "./Sections/AboutSection";
import { GoalsSection } from "./Sections/GoalsSection";
import { ServicesSection } from "./Sections/ServicesSection";
import { ProjectSection } from "./Sections/ProjectSection";
import { ContactSection } from "./Sections/ContactSection";
import { FooterSection } from "./Sections/FooterSection";

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
      <AboutUs />
      <GoalsSection />
      <ServicesSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
