import { type JSX } from "react";


export const FooterSection = (): JSX.Element => {
  const usefulLinks = [
    { name: "Home", width: "w-12" },
    { name: "About Us", width: "w-[76px]" },
    { name: "Services", width: "w-[69px]" },
    { name: "Projects", width: "w-[67px]" },
    { name: "Privacy Policy", width: "w-28" },
  ];

  return (
    <footer className="w-full h-[577px] bg-transparent relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1514px] h-[577px] bg-[#f23b11]" />

      <div className="flex w-[1304px] items-start gap-[237px] absolute top-[174px] left-1/2 transform -translate-x-1/2">
        <div className="relative w-[298px] h-[270px]">
          <div className="absolute top-0 left-0.5 [font-family:'Work_Sans',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-[normal] whitespace-nowrap">
            About Us
          </div>

          <div className="absolute top-11 left-0.5 w-[292px] [font-family:'Work_Sans',Helvetica] font-normal text-white text-lg tracking-[0] leading-[23.0px]">
            MotracGlobal is a digital platform that celebrates alumni, connects
            communities, and inspires lasting impact.
          </div>

          <img
            className="absolute top-[231px] left-0 w-[186px] h-[39px]"
            alt="Group"
            src="/twitter.svg"
          />
        </div>

        <div className="relative w-[131px] h-[178px]">
          <div className="absolute top-0 left-0 font-bold text-white text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Useful links
          </div>

          <div className="absolute top-[37px] left-0 w-[122px] h-[141px] flex flex-col">
            {usefulLinks.map((link, index) => (
              <div
                key={link.name}
                className={`${link.width} h-[19px] ${index === 0 ? "ml-px" : ""} ${index > 0 ? (index === 1 ? "mt-[9px]" : index === 2 ? "mt-[15px]" : "mt-[11px]") : ""} font-normal text-white text-base tracking-[0.48px] leading-[normal] whitespace-nowrap cursor-pointer hover:opacity-80`}
              >
                {link.name}
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-[338px] h-[213px]">
          <div className="absolute top-0 left-px [font-family:'Work_Sans',Helvetica] font-bold text-white text-[22px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Newsletter
          </div>

          <div className="absolute top-[42px] left-0 w-[334px] [font-family:'Work_Sans',Helvetica] font-normal text-white text-base tracking-[0.48px] leading-[normal]">
            Stay updated on bfjwjfnvfjnfvjv vjbwv;jvmq vjqvbj vfv ;ovq vbfvq; vf
            vbjbvf vbfuvbbvquvuvufuvubqvufvbjq;
          </div>

          <div className="absolute top-[123px] left-0 w-[335px] h-10">
            <input
              className="w-[333px] h-10 bg-white border border-solid text-[#727272] text-sm font-normal pl-3"
              placeholder="Your email"
            />
          </div>

          <div className="absolute top-[173px] left-0 w-[335px] h-10">
            <button
              className="w-[333px] h-10 border-[3px] border-solid border-white bg-transparent hover:bg-white/10 font-semibold text-white text-sm tracking-[0.42px] leading-[normal]"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <tr className="absolute top-[485px] left-1/2 transform -translate-x-1/2 w-[1304px] h-[3px] bg-white" />

      <div className="absolute top-[509px] left-1/2 transform -translate-x-1/2 w-[379px] [font-family:'Work_Sans',Helvetica] font-normal text-white text-base tracking-[0.48px] leading-[normal] text-center">
        @copyright 2024 all right reserved by Motrac
      </div>

      <div className="absolute top-[51px] left-[101px] w-[201px] h-[51px]">
        <img
          className="absolute top-1 left-[45px] w-[156px] h-11 object-cover"
          alt="Screenshot"
          src="/logo-text.png"
        />

        <img
          className="w-[49px] absolute top-0 left-0 h-[51px] object-cover"
          alt="Screenshot"
          src="/logo.png"
        />
      </div>
    </footer>
  );
};
