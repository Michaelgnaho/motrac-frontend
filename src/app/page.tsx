import Image from "next/image";
import Hero from "../components/Hero";
import HomeAboutSection from "@/components/About";
import HomeServicesSection from "@/components/Sevices";
import HomeProjectsSection from "@/components/Project";
import HomeContactSection from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAboutSection />
      <HomeServicesSection />
      <HomeProjectsSection />
      <HomeContactSection />
    </>
  );
}
