"use client";

import { ArrowRight, Briefcase } from "lucide-react";
import heroImage from "../../public/hero-image.png";
import AnimatedContent from "./AnimatedContent";

// Hero Section
export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage.src})`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Container */}
      <AnimatedContent
        distance={100}
        direction="horizontal"
        duration={1.2}
        reverse={true}
        initialOpacity={0}
        animateOpacity
        threshold={0.1}
      >
        <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <div className="flex flex-col items-start justify-center gap-8 max-w-5xl">
            {/* Tagline */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              duration={1}
              delay={0.2}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="w-full">
                <p className="text-[#F23B11] text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-wider">
                  Unleashing Potential • Driving Sustainable Growth
                </p>
              </div>
            </AnimatedContent>

            {/* Headline */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              duration={1}
              delay={0.3}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <header className="w-full">
                <h1 className="font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
                  Transforming Africa&apos;s Intellectual Capital into{" "}
                  <br className="hidden sm:block" />
                  Global Competitiveness
                </h1>
              </header>
            </AnimatedContent>

            {/* Subtext */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              duration={1}
              delay={0.5}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="w-full max-w-3xl">
                <p className="font-medium text-white text-lg sm:text-xl lg:text-2xl leading-relaxed">
                  In an age defined by volatility, disruption, and accelerated
                  innovation, MOTRAC Global Resources Limited stands as a
                  transformative hybrid enterprise — merging strategic
                  consultancy, technology development, creative intelligence,
                  and human capital engineering into one dynamic ecosystem.
                </p>
              </div>
            </AnimatedContent>

            {/* CTA Buttons */}
            <AnimatedContent
              distance={60}
              direction="vertical"
              duration={0.9}
              delay={0.7}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="w-full flex flex-col sm:flex-row gap-5 sm:gap-8 mt-4">
                <a
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#F23B11] to-[#ff6844] hover:opacity-90 text-white text-lg sm:text-xl font-semibold rounded-md px-8 py-4 transition-opacity"
                >
                  Discover The MOTRAC Nexus
                  <ArrowRight size={24} />
                </a>

                <a
                  href="/about"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white bg-transparent hover:bg-white/10 text-white text-lg sm:text-xl font-semibold rounded-md px-8 py-4 transition-colors"
                >
                  Learn More
                  <Briefcase size={24} />
                </a>
              </div>
            </AnimatedContent>

            {/* Infographic Panel - Metrics */}
            <AnimatedContent
              distance={60}
              direction="vertical"
              duration={0.9}
              delay={0.9}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 pt-8 border-t border-white/30">
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-bold text-[#F23B11]">
                    55% ↑
                  </span>
                  <span className="text-sm sm:text-base text-white/90 mt-1">
                    Innovation ROI from Indigenous Consulting Models
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-bold text-[#F23B11]">
                    72%
                  </span>
                  <span className="text-sm sm:text-base text-white/90 mt-1">
                    Client Retention Rate Target by 2026
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-bold text-[#F23B11]">
                    3
                  </span>
                  <span className="text-sm sm:text-base text-white/90 mt-1">
                    Continents: Africa • Europe • North America
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-bold text-[#F23B11]">
                    1.5x
                  </span>
                  <span className="text-sm sm:text-base text-white/90 mt-1">
                    Impact Quotient (IQ) Target: ROI on Social + Economic
                    Outcomes
                  </span>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </AnimatedContent>

      {/* Scroll Indicator (Optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
