
export default function AboutUs () {
  return (
    <section className="flex flex-col w-full items-center gap-[35px] relative mt-15 mb-20">
      <header className="relative w-[296px] h-14">
        <h2 className="absolute font-semibold text-[#1e1e1e] text-3xl">
          Who We Are
        </h2>
      </header>

      <div className="flex items-center relative w-full">
        <img
          className="relative w-[363px] h-[363px] object-cover ml-30"
          alt="Photo"
          src="/about.png"
        />

        <div className="relative w-[720px] h-[540px] bg-[#f23b11] border-none rounded-none flex flex-col justify-between">
          <div className="relative w-full h-full p-0">
            <div className="absolute top-[45px] left-[50px] w-[277px] h-14 flex items-center justify-center">
              <h3 className="h-14 -ml-0.5 w-[275px] font-medium text-white text-[30px] tracking-[-0.80px] leading-[normal]">
                About Motrac
              </h3>
            </div>

            <p className="absolute top-[122px] left-[50px] font-normal text-white text-[22px] tracking-[2.70px] leading-[36.0px]">
              MOTRAC Global Resources is an organization renowned for its
              deployment of creativity and consulting expertise, and
              saddled with business endeavors in the areas of Human
              Capital Development, Information Communication Technology,
              Business Development, and Economic & Policy
              Development, Implementation, and Monitoring and
              Evaluation Consulting...
            </p>
          </div>
          <button className="absolute bottom-8 right-8 w-[114px] h-[54px] bg-white hover:bg-gray-200 text-[#f23b11] text-[15px] font-semibold px-5 py-4 flex items-center justify-center">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}
