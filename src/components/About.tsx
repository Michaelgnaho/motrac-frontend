import Link from "next/link";
import { Target, Eye, Sparkles } from "lucide-react";

export default function HomeAboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Who We Are
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-[#F23B11] rounded-full my-4"></div>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            MOTRAC Global Resources is an organization renowned for its
            deployment of creativity and consulting expertise in Human Capital
            Development, ICT, Business Development, and Policy Consulting.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Story */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Transforming Potential into Excellence
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Established in{" "}
                <span className="font-semibold text-[#F23B11]">2003</span> and
                re-incorporated in{" "}
                <span className="font-semibold text-[#F23B11]">2018</span>,
                MOTRAC Global Resources is a fully Nigerian-owned powerhouse of
                business development creativity and consulting expertise.
              </p>
              <p>
                We are led by a team of resourceful, talented, and exceptional
                professionals with unrivalled problem-solving proficiency. Our
                focus is simple yet profound: to recognize potentials and
                develop capacities in people, guaranteeing growth in businesses
                and organizations.
              </p>
              <p className="text-lg font-semibold text-gray-800">
                We are a Human Capital Development Factory — creating,
                developing, and managing people capacities to carry on effective
                and productive enterprises.
              </p>
            </div>
          </div>

          {/* Right Column - Mission & Vision Cards */}
          <div className="space-y-6">
            {/* Mission Card */}
            <div className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 rounded-xl p-6 border-l-4 border-[#F23B11]">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-3 rounded-full">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Our Mission
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    To recognize potentials and develop capacities in people,
                    guaranteeing growth in government institutions, businesses,
                    and organizations.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 rounded-xl p-6 border-l-4 border-[#F23B11]">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-3 rounded-full">
                  <Eye size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Our Vision
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    To become a world-class nurturing place for transformation
                    of individuals into effective and productive entrepreneurs.
                  </p>
                </div>
              </div>
            </div>

            {/* Shared Value Card */}
            <div className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 rounded-xl p-6 border-l-4 border-[#F23B11]">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-3 rounded-full">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Our Shared Value
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We believe that the simple things of life give wings to
                    great imaginations, making it possible for humans to achieve
                    the superlative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/about">
            <button className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white px-8 py-4 rounded-lg font-semibold text-lg">
              Learn More About Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
