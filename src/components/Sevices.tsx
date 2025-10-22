"use client";
import Link from "next/link";
import {
  Monitor,
  Users,
  Briefcase,
  Mic,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import AnimatedContent from "./AnimatedContent";

export default function HomeServicesSection() {
  const services = [
    {
      icon: Monitor,
      title: "Information Communication Technology",
      description:
        "Innovative ICT solutions including web design, software development, and enterprise content management.",
    },
    {
      icon: Users,
      title: "Human Capital Development",
      description:
        "Training, mentoring, and capacity-building programs to empower individuals and teams.",
    },
    {
      icon: Briefcase,
      title: "Business Development",
      description:
        "Comprehensive solutions that drive growth, innovation, and competitive advantage.",
    },
    {
      icon: BookOpen,
      title: "Economic & Policy Development",
      description:
        "Strategic frameworks integrating economic and political solutions for sustainable development.",
    },
    {
      icon: Mic,
      title: "Media & Entertainment",
      description:
        "Full-service media solutions from event management to content production and PR.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.8}
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-[#F23B11] rounded-full my-4"></div>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We provide diverse consulting and development solutions designed
              to empower individuals, businesses, and institutions for
              sustainable growth.
            </p>
          </div>
        </AnimatedContent>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <AnimatedContent
                key={index}
                distance={80}
                direction="vertical"
                duration={0.7}
                delay={0.2 + index * 0.1}
                initialOpacity={0}
                animateOpacity
                threshold={0.1}
              >
                <div className="bg-white border border-gray-100 shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-3 rounded-full w-fit mb-4">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedContent>
            );
          })}

          {/* Call-to-Action Card */}
          <AnimatedContent
            distance={80}
            direction="vertical"
            duration={0.7}
            delay={0.2 + services.length * 0.1}
            initialOpacity={0}
            animateOpacity
            threshold={0.1}
          >
            <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] rounded-xl p-6 flex flex-col items-center justify-center text-center text-white">
              <h3 className="text-2xl font-bold mb-3">
                Need Custom Solutions?
              </h3>
              <p className="text-white/90 mb-6">
                We tailor our services to meet your specific needs and
                objectives.
              </p>
              <Link href="/services">
                <button className="bg-white text-[#F23B11] px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
                  View All Services
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </AnimatedContent>
        </div>

        {/* Bottom CTA */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={0.7}
          delay={0.5}
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
        >
          <div className="text-center mt-12">
            <Link href="/services">
              <button className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
                Explore All Services
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
