import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero-image.png')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-start justify-center gap-[35px] w-full max-w-[1011px] px-4">
        <header className="w-full max-w-[1013px] h-auto">
          <h1 className="w-full font-bold text-white text-[50px]">
            Over 20 Years of Transforming <br /> Human Capital, ICT, and <br /> Policy
            Development
          </h1>
        </header>

        <h2 className="w-full h-auto font-medium text-white text-[22px]">
          MOTRAC Global Resources delivers world-class consulting and creative
          solutions in Human Capital Development,  ICT, Business Growth, Governance
          Intelligence, and Economic Policy.
        </h2>

        <div className="w-full max-w-[558px] h-auto flex gap-[58px]">
          <button className="w-[214px] h-[71px] bg-[#f23b11] hover:bg-[#d63310] text-white text-[20px] font-semibold rounded-sm px-5 py-4">
            Work With Us
          </button>

          <button className="w-[286px] h-[71px] border-2 border-white bg-transparent hover:bg-white/10 text-white text-[20px] font-semibold rounded-sm px-5 py-4">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
};
