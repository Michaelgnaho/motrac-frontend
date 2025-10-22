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
                  Transforming Potential into <br className="hidden sm:block" />
                  Productivity
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
                  At Motrac Global Resources Limited, we recognize potentials
                  and develop capacities in people, guaranteeing growth and
                  development in businesses, organizations, and government
                  institutions.
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
                  href="/about"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#F23B11] to-[#ff6844] hover:opacity-90 text-white text-lg sm:text-xl font-semibold rounded-md px-8 py-4 transition-opacity"
                >
                  Learn More
                  <ArrowRight size={24} />
                </a>

                <a
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white bg-transparent hover:bg-white/10 text-white text-lg sm:text-xl font-semibold rounded-md px-8 py-4 transition-colors"
                >
                  Our Services
                  <Briefcase size={24} />
                </a>
              </div>
            </AnimatedContent>

            {/* Optional Stats or Trust Indicators */}
            <AnimatedContent
              distance={60}
              direction="vertical"
              duration={0.9}
              delay={0.9}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="w-full flex flex-wrap gap-8 sm:gap-12 mt-8 pt-8 border-t border-white/30">
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    20+
                  </span>
                  <span className="text-sm sm:text-base text-white/90 mt-1">
                    Years Experience
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    100+
                  </span>
                  <span className="text-sm sm:text-base text-white/90 mt-1">
                    Projects Delivered
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    5
                  </span>
                  <span className="text-sm sm:text-base text-white/90 mt-1">
                    Core Services
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
