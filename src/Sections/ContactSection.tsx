import { type JSX } from "react";

 

export const ContactSection = (): JSX.Element => {
  // ...existing code...

  return (
    <section className="w-full bg-[#f6f8f7] py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="font-bold text-[#242424] text-3xl text-center mb-12 [font-family:'Work_Sans',Helvetica]">
          Contact Us
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 relative">
              <input id="name" name="name" required className="bg-white border border-[#e0e2ea] rounded px-2 py-2.5 w-full focus:outline-none pr-6" placeholder="Your Name" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ec6565] pointer-events-none">*</span>
            </div>
            <div className="col-span-1 relative">
              <input id="email" name="email" required className="bg-white border border-[#e0e2ea] rounded px-2 py-2.5 w-full focus:outline-none pr-6" placeholder="Email" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ec6565] pointer-events-none">*</span>
            </div>
            <div className="col-span-1">
              <select id="category" name="category" className="bg-white border border-[#e0e2ea] rounded px-2 py-2.5 w-full focus:outline-none">
                <option value="">Select Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
            </div>
            <div className="col-span-1">
              <input id="phone" name="phone" placeholder="Phone" className="bg-white border border-[#e0e2ea] rounded px-2 py-2.5 w-full focus:outline-none" />
            </div>
            <div className="col-span-2">
              <textarea id="message" name="message" placeholder="Message" className="bg-white border border-[#e0e2ea] rounded px-2 py-2.5 w-full h-[135px] resize-none focus:outline-none" />
            </div>
          </div>

          <div className="text-left">
            <p className="[font-family:'Work_Sans',Helvetica] font-normal text-base">
              <span className="text-[#c40303]">*</span>
              <span className="text-black">&nbsp;</span>
              <span className="text-[#657199]">indicates a required field</span>
            </p>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#f23b11] hover:bg-[#d63310] text-white px-24 py-2 rounded-sm"
            >
              <span className="font-semibold text-sm">
                Submit
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
