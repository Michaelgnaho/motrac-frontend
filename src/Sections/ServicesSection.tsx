import React from "react";

export const ServicesSection = (): React.ReactElement => {
  const servicesData = [
    {
      id: 1,
      title: "ICT Solutions",
      description: "Web Design, Database, Software, Enterprise Systems",
      backgroundColor: "bg-[#e7b305]",
      // polygonSrc: "/polygon-1-1.svg",
      maskSrc: "/service-3.png",
      position: "top-0 left-7",
      titlePosition: "top-[63px] left-5",
      descPosition: "top-24 left-[47px]",
      // polygonPosition: "top-[197px] left-[110px]",
      maskPosition: "top-[220px] left-7",
      cardHeight: "h-[10px]",
    },
    {
      id: 2,
      title: "Media & Entertainment",
      description: "Media Planning, Content Creation, PR, Outdoor Ads....",
      backgroundColor: "bg-[#e58503]",
      // polygonSrc: "/polygon-1.svg",
      maskSrc: "/service-image-1.png",
      position: "top-[220px] left-[272px]",
      titlePosition: "top-[265px] left-[286px]",
      descPosition: "top-[331px] left-[286px]",
      polygonPosition: "top-0 left-[79px]",
      maskPosition: "top-0 left-[272px]",
      cardHeight: "h-[219px]",
    },
    {
      id: 3,
      title: "Human Capital Development",
      description: "Training, Mentoring, Career Guidance, Capacity Building",
      backgroundColor: "bg-[#43df0b]",
      // polygonSrc: "/polygon-1-1.svg",
      maskSrc: "/services-4.png",
      position: "top-0 left-[544px]",
      titlePosition: "top-[45px] left-[559px]",
      descPosition: "top-[113px] left-[560px]",
      polygonPosition: "top-[197px] left-[79px]",
      maskPosition: "top-[220px] left-[545px]",
      cardHeight: "h-[219px]",
    },
    {
      id: 4,
      title: "Policy, Governance & Strategy",
      description: "Policy & Economic Development Consulting...",
      backgroundColor: "bg-[#da1a76]",
      // polygonSrc: "/polygon-1.svg",
      maskSrc: "/service-image-2.png",
      position: "top-[217px] left-[816px]",
      titlePosition: "top-[247px] left-[831px]",
      descPosition: "top-[340px] left-[831px]",
      polygonPosition: "top-0 left-[79px]",
      maskPosition: "top-0 left-[816px]",
      cardHeight: "h-[219px]",
    },
    {
      id: 5,
      title: "Business & Development Advisory",
      description:
        "Business Growth Consulting, Monitoring & Evaluation, Sustainable Advisory Services",
      backgroundColor: "bg-[#f23b11]",
      // polygonSrc: "/polygon-1-1.svg",
      maskSrc: "services-5.png",
      position: "top-0 left-[1060px]",
      titlePosition: "top-[19px] left-[1090px]",
      descPosition: "top-[106px] left-[1090px]",
      polygonPosition: "top-[197px] left-[79px]",
      maskPosition: "top-[220px] left-[1060px]",
      cardHeight: "h-[219px]",
    },
  ];

  return (
    <section className="w-full relative py-16 mt-10">
      <div className="relative w-full max-w-[1301px] mx-auto">
        <div className="relative h-[418px]">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`absolute ${service.position} w-[202px] ${service.cardHeight} border-0 shadow-none`}
            >
              <div className="p-0 relative h-full">
                <div
                  className={`absolute top-0 left-0 w-[202px] h-[199px] ${service.backgroundColor}`}
                />
              </div>
            </div>
          ))}

          {servicesData.map((service) => (
            <div
              key={`title-${service.id}`}
              className={`absolute ${service.titlePosition} w-44 h-auto flex items-center justify-center`}
            >
              <div className="h-auto font-extrabold text-white text-[17px]">
                {service.title}
              </div>
            </div>
          ))}

          {servicesData.map((service) => (
            <div
              key={`desc-${service.id}`}
              className={`absolute ${service.descPosition} w-[163px] [font-family:'Work_Sans',Helvetica] font-medium text-white text-sm tracking-[0.28px] leading-[16.8px]`}
            >
              {service.description}
            </div>
          ))}

          {servicesData.map((service) => (
            <img
              key={`mask-${service.id}`}
              className={`absolute ${service.maskPosition} w-[202px] h-[198px]`}
              alt="Mask group"
              src={service.maskSrc}
            />
          ))}
        </div>

        <h2 className="absolute top-[calc(50.00%_-_258px)] left-[calc(50.00%_-_100px)] w-[193px] font-semibold text-[#1e1e1e] text-3xl">
          Services
        </h2>
      </div>
    </section>
  );
};
