"use client";

import { Monitor, Users, Briefcase, Mic, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedContent from "@/components/AnimatedContent";

export default function ServicesPage() {
  const services = [
    {
      icon: Monitor,
      title: "Information Communication Technology (ICT)",
      description:
        "We offer innovative products, services, and solutions in Web Design & Hosting, Database Management, Software Development, and Enterprise Content Management.",
      image:
        "https://i.pinimg.com/736x/87/10/05/871005a54223842c4b891d8864b67acb.jpg",
    },
    {
      icon: Users,
      title: "Human Capital Development",
      description:
        "We provide training, mentoring, and capacity-building programs to empower individuals for sustainable livelihoods.",
      image:
        "https://i.pinimg.com/1200x/7b/51/09/7b51090ec52d00e5c7deb467417cdcd8.jpg",
    },
    {
      icon: Briefcase,
      title: "Business Development",
      description:
        "We deliver comprehensive business development solutions that drive growth, innovation, and competitive advantage for organizations across various sectors.",
      image:
        "https://i.pinimg.com/736x/7e/d6/5a/7ed65a934c44e7486ba52a5c813b45b8.jpg",
    },
    {
      icon: BookOpen,
      title: "Economic and Policy Development Consulting",
      description:
        "We create developmental platforms that integrate economic and political frameworks tailored to meet the needs of the populace.",
      image:
        "https://i.pinimg.com/1200x/44/09/f3/4409f36659f44eb7bca9acc5c46ffb9e.jpg",
    },
    {
      icon: Mic,
      title: "Media & Entertainment",
      description:
        "From event planning and management to trend curation and showbiz consultancy, we create experiences that engage and inspire. Our media solutions include Media Planning, Content Production, Outdoor Advertising, and Public Relations Management.",
      image:
        "https://i.pinimg.com/736x/d2/d5/16/d2d5169315233a2abfb29b918db941f1.jpg",
    },
  ];

  return (
    <main className="bg-white">
      {/* Header Section */}
      <section className="container mx-auto px-6 lg:px-12 pt-32 pb-12">
        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.8}
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
        >
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Our Services
            </h1>
            <div className="w-16 h-1 bg-[#F23B11] rounded-full my-4" />
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mt-6">
              At Motrac Global Resources Limited, we provide diverse consulting
              and development solutions designed to empower individuals,
              businesses, and institutions for sustainable growth.
            </p>
          </div>
        </AnimatedContent>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <AnimatedContent
                key={index}
                distance={80}
                direction="vertical"
                duration={0.7}
                delay={0.1 + index * 0.1}
                initialOpacity={0}
                animateOpacity
                threshold={0.1}
              >
                <div className="bg-white border border-gray-100 shadow-md rounded-xl overflow-hidden hover:border-[#F23B11] transition-colors">
                  {/* Image Space */}
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover"
                      priority={index < 3}
                      unoptimized
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 opacity-0 hover:opacity-100 transition-opacity">
                      <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-4 rounded-full">
                        <IconComponent size={32} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimatedContent>
            );
          })}
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="bg-gray-50 py-20 mt-12">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={0.8}
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-16">
              Service Categories
            </h2>
          </AnimatedContent>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* ICT Services Detail */}
            <AnimatedContent
              distance={80}
              direction="horizontal"
              duration={0.7}
              delay={0.2}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-2 rounded-lg">
                    <Monitor size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      ICT Solutions
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Technology & Innovation
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F23B11] mt-1">•</span>
                    <span>Web Design & Hosting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F23B11] mt-1">•</span>
                    <span>Database Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F23B11] mt-1">•</span>
                    <span>Software Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F23B11] mt-1">•</span>
                    <span>Enterprise Content Management</span>
                  </li>
                </ul>
              </div>
            </AnimatedContent>

            {/* Human Capital Detail */}
            <AnimatedContent
              distance={80}
              direction="horizontal"
              duration={0.7}
              delay={0.3}
              reverse={true}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-2 rounded-lg">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Human Capital Development
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      People & Capacity Building
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F23B11] mt-1">•</span>
                    <span>Skills Acquisition Programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F23B11] mt-1">•</span>
                    <span>Capacity Building Training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F23B11] mt-1">•</span>
                    <span>Motivational Speaking & Mentoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F23B11] mt-1">•</span>
                    <span>
                      Career Guidance & Sustainable Livelihood Training
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedContent>

            {/* Media Services Detail */}
            <AnimatedContent
              distance={80}
              direction="horizontal"
              duration={0.7}
              delay={0.4}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-2 rounded-lg">
                    <Mic size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Media & Entertainment
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Content & Events
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F23B11] mt-1">•</span>
                    <span>Media Planning & Strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F23B11] mt-1">•</span>
                    <span>Content Production (Print & Electronic)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F23B11] mt-1">•</span>
                    <span>Event Planning & Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F23B11] mt-1">•</span>
                    <span>Outdoor Advertisement & PR Management</span>
                  </li>
                </ul>
              </div>
            </AnimatedContent>

            {/* Policy Development Detail */}
            <AnimatedContent
              distance={80}
              direction="horizontal"
              duration={0.7}
              delay={0.5}
              reverse={true}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-2 rounded-lg">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Policy Development
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Economic & Governance
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F23B11] mt-1">•</span>
                    <span>Economic Framework Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F23B11] mt-1">•</span>
                    <span>Political Strategy Consulting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F23B11] mt-1">•</span>
                    <span>Policy Implementation & Monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F23B11] mt-1">•</span>
                    <span>Bottom-Top Approach Methodology</span>
                  </li>
                </ul>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="container mx-auto px-6 lg:px-12 py-20">
        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.8}
          delay={0.2}
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
        >
          <div className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 py-12 px-8 lg:px-16 rounded-xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Ready to Grow with Us?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Partner with Motrac Global Resources Limited to transform ideas
              into impactful results.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get Started Today
            </Link>
          </div>
        </AnimatedContent>
      </section>
    </main>
  );
}
