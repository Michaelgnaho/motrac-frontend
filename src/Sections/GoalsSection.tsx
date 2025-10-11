import React from "react";


export const GoalsSection: React.FC = () => {
  const contentSections = [
    {
      title: "Mission",
      description:
        "To recognize potentials and develop capacities in people, guaranteeing growth and development in government institutions, businesses, and organizations.",
    },
    {
      title: "Vision",
      description:
        "To become a world-class nurturing place for transformation of individuals into effective and productive entrepreneurs.",
    },
    {
      title: "Goal",
      description:
        "We believe small ideas spark big transformations — turning creative thinking into lasting innovations for our clients.",
    },
  ];

  return (
    <section className="relative flex">
      <div className="flex-1 flex flex-col justify-center px-[110px] py-[80px] relative">
        <div className="flex flex-col w-full max-w-[604px] items-start gap-10">
          {/* Right quote SVG close to text */}
          <img
            className="w-10 h-10 mb-2"
            alt="Right quote"
            src="/right-quote.svg"
          />
          {contentSections.map((section, index) => (
            <div
              key={index}
              className="w-full border-none shadow-none bg-transparent"
            >
              <div className="p-0 flex flex-col items-start">
                <div className="relative w-[276.05px] h-10">
                  <h2 className="font-semibold text-[#1e1e1e] text-3xl">
                    {section.title}
                  </h2>
                </div>
                <p className="relative w-full font-normal text-[#2b2b2b] text-[21px]">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
          {/* Left quote SVG close to text */}
          <img
            className="w-10 h-10 mt-2 self-end"
            alt="Left quote"
            src="/left-quote.svg"
          />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center relative">
        <img
          className="object-cover h-[620px] w-auto"
          alt="Mask group"
          src="/mask-group.png"
        />
      </div>
    </section>
  );
};
