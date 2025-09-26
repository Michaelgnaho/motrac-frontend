import { type JSX } from "react";


export const ProjectSection = (): JSX.Element => {
  const projects = [
    {
      image: "/news-image1.png",
      alt: "Mask group",
      description:
        "Conceptualization and Design framework for the Development of the yearly Referral Compendiums on the Kogi State Government, for Institutional Memory. January 2016-January, 2020",
    },
    {
      image: "/news-image2.png",
      alt: "Mask group",
      description:
        "Created the KOGI Coffee Table Book for the National Media Merit Award (Oct 2021)",
    },
    {
      image: "/news-image3.png",
      alt: "Mask group",
      description:
        "Designed the Administration's Let's Do More campaign manifesto with 38+ strategies (Nov 2018)",
    },
    {
      image: "/news-image4.png",
      alt: "Screenshot",
      description:
        "Built kogipedia.net, a web app showcasing Kogi State Governor's 6-year achievements (Mar 2021)",
    },
    {
      image: "/news-image5.png",
      alt: "Mask group",
      description:
        "Designed the Administration's Let's Do More campaign manifesto with 38+ strategies (Nov 2018)",
    },
    {
      image: "/news-image6.png",
      alt: "Screenshot",
      description:
        "Reviewed World Bank–assisted PSRGD Implementation Workplan (Sept 2018)",
    },
    {
      image: "/news-image7.png",
      alt: "Mask group",
      description:
        "Development of a Bottom-Top Policy Document for the Kogi State Government. May, 2016",
    },
    {
      image: "/news-image8.png",
      alt: "Mask group",
      description:
        "Produced a visual documentary for Vami Farms across Nasarawa, Kwara & Kogi (Mar 2021)",
    },
  ];

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-16 font-semibold text-[#1e1e1e] text-3xl tracking-[-0.96px] leading-[normal]">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden shadow-[0px_4px_4px_#00000012]"
            >
              <div className="p-0">
                <div className="aspect-[408/222] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={project.alt}
                    src={project.image}
                  />
                </div>
                <div className="bg-[#f6f8f7] p-6 min-h-[126px] flex items-center">
                  <p className="font-normal text-[#1e1e1e] text-xl tracking-[0.40px] leading-[31.4px]">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-[#f23b11] hover:bg-[#d63310] text-white h-auto px-14 py-3  rounded-sm">
            <a className="font-semibold text-lg">
              See More
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};
