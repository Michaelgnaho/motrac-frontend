"use client";

import {
  Monitor,
  Users,
  Briefcase,
  Mic,
  BookOpen,
  TrendingUp,
  Target,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedContent from "@/components/AnimatedContent";

export default function ServicesPage() {
  const services = [
    {
      icon: Monitor,
      title: "Information Communication Technology (ICT)",
      shortDesc: "Digital Infrastructure & Innovation Systems",
      description:
        "We engineer digital ecosystems that power transformation — from enterprise platforms to data-driven decision systems.",
      image:
        "https://i.pinimg.com/736x/87/10/05/871005a54223842c4b891d8864b67acb.jpg",
      impact: "30-40% operational efficiency gains",
      metrics: [
        "Custom Software & Application Development",
        "Cloud Infrastructure & Digital Transformation",
        "Data Analytics & Business Intelligence Systems",
        "Cybersecurity & IT Governance",
        "Enterprise Content Management Solutions",
      ],
    },
    {
      icon: Mic,
      title: "Strategic Communications & Media Intelligence",
      shortDesc: "Brand Strategy & Digital Engagement",
      description:
        "We craft narratives that resonate, campaigns that convert, and digital experiences that drive measurable impact.",
      image:
        "https://i.pinimg.com/736x/d2/d5/16/d2d5169315233a2abfb29b918db941f1.jpg",
      impact: "+150% average increase across digital platforms",
      metrics: [
        "Brand Strategy & Reputation Management",
        "Digital Marketing & Social Media Strategy",
        "Content Production (Print, Video, Podcast)",
        "Public Relations & Crisis Communications",
        "Media Planning & Campaign Management",
      ],
    },
    {
      icon: Briefcase,
      title: "Entertainment & Creative Experience Design",
      shortDesc: "Event Production & Cultural Economy",
      description:
        "From concept to execution, we produce immersive experiences that captivate audiences and monetize creativity.",
      image:
        "https://i.pinimg.com/736x/7e/d6/5a/7ed65a934c44e7486ba52a5c813b45b8.jpg",
      impact: "Managed 120+ large-scale events",
      metrics: [
        "Event Planning & Production Management",
        "Festival & Concert Curation",
        "Creative Economy Consulting",
        "Talent Management & Artist Development",
        "Experiential Marketing & Activations",
      ],
    },
    {
      icon: Users,
      title: "Human Capital Development & Institutional Strengthening",
      shortDesc: "Talent Engineering & Leadership Development",
      description:
        "We build talent pipelines, leadership academies, and organizational transformation programs that unlock human potential at scale.",
      image:
        "https://i.pinimg.com/1200x/7b/51/09/7b51090ec52d00e5c7deb467417cdcd8.jpg",
      impact: "Over 7,000 individuals trained",
      metrics: [
        "Leadership & Executive Development Programs",
        "Skills Acquisition & Vocational Training",
        "Organizational Development & Change Management",
        "Performance Management Systems Design",
        "Youth Empowerment & Entrepreneurship Training",
      ],
    },
    {
      icon: BookOpen,
      title: "Policy & Economic Development Consulting",
      shortDesc: "Strategic Governance & Systems Design",
      description:
        "We design evidence-based policies, economic frameworks, and governance systems that enable sustainable development.",
      image:
        "https://i.pinimg.com/1200x/44/09/f3/4409f36659f44eb7bca9acc5c46ffb9e.jpg",
      impact: "Stakeholder frameworks reaching over 1.2 million citizens",
      metrics: [
        "Policy Research & Strategic Analysis",
        "Economic Development Planning",
        "Governance & Institutional Reform",
        "Monitoring & Evaluation (M&E) Systems",
        "Stakeholder Engagement (SEPTA Framework)",
      ],
    },
  ];

  return (
    <main className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white">
        <div className="container mx-auto px-6 lg:px-12 pt-32 pb-16">
          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={0.8}
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Our Services
            </h1>
            <div className="w-20 h-1 bg-white rounded-full my-6" />
            <p className="text-xl lg:text-2xl leading-relaxed max-w-5xl">
              &quot;THE FIVE VERTICALS OF THE NEXUS&quot;
            </p>
            <p className="text-lg lg:text-xl leading-relaxed max-w-5xl mt-4">
              MOTRAC operates as an integrated consultancy ecosystem — where
              technology, human capital, communications, creativity, and policy
              converge to deliver transformative solutions across industries and
              geographies.
            </p>
          </AnimatedContent>
        </div>
      </section>

      {/* Services Overview Cards */}
      <section className="container mx-auto px-6 lg:px-12 py-20">
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
              Service Verticals
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Five interconnected service lines designed to address
              Africa&apos;s most pressing transformation challenges
            </p>
          </div>
        </AnimatedContent>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <AnimatedContent
                key={index}
                distance={80}
                direction={index % 2 === 0 ? "horizontal" : "horizontal"}
                duration={0.7}
                delay={0.1 + index * 0.1}
                reverse={index % 2 !== 0}
                initialOpacity={0}
                animateOpacity
                threshold={0.1}
              >
                <div className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#F23B11] transition-all shadow-lg hover:shadow-xl">
                  {/* Image Header */}
                  <div className="relative w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index < 2}
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-3 rounded-lg">
                          <IconComponent size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white">
                            {service.title}
                          </h3>
                          <p className="text-sm text-white/90">
                            {service.shortDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Impact Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 px-4 py-2 rounded-full mb-4">
                      <TrendingUp size={16} className="text-[#F23B11]" />
                      <span className="text-sm font-semibold text-[#F23B11]">
                        {service.impact}
                      </span>
                    </div>

                    {/* Quick Preview List */}
                    <div className="text-sm text-gray-600">
                      <p className="font-semibold mb-2">Key Services:</p>
                      <ul className="space-y-1">
                        {service.metrics.slice(0, 3).map((metric, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#F23B11] mt-0.5">•</span>
                            <span>{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            );
          })}
        </div>
      </section>

      {/* Detailed Service Breakdown */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={0.8}
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-16">
              Service Deep Dive
            </h2>
          </AnimatedContent>

          <div className="space-y-12">
            {/* ICT Vertical */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              duration={0.7}
              delay={0.1}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="flex items-start gap-6 mb-8">
                  <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-4 rounded-xl">
                    <Monitor size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      Information Communication Technology (ICT)
                    </h3>
                    <p className="text-lg text-gray-600">
                      Digital Infrastructure & Innovation Systems
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      Core Offerings
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      {services[0].metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#F23B11] rounded-full mt-2" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      Impact Snapshot
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Target size={24} className="text-[#F23B11]" />
                          <span className="text-2xl font-bold text-gray-800">
                            30-40%
                          </span>
                        </div>
                        <p className="text-gray-700">
                          Operational efficiency gains across client
                          organizations
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Award size={24} className="text-[#F23B11]" />
                          <span className="text-2xl font-bold text-gray-800">
                            100+
                          </span>
                        </div>
                        <p className="text-gray-700">
                          Digital transformation projects delivered
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>

            {/* Strategic Communications Vertical */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              duration={0.7}
              delay={0.2}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="flex items-start gap-6 mb-8">
                  <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-4 rounded-xl">
                    <Mic size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      Strategic Communications & Media Intelligence
                    </h3>
                    <p className="text-lg text-gray-600">
                      Brand Strategy & Digital Engagement
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      Service Portfolio
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      {services[1].metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#F23B11] rounded-full mt-2" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      Proven Metrics
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <TrendingUp size={24} className="text-[#F23B11]" />
                          <span className="text-2xl font-bold text-gray-800">
                            +150%
                          </span>
                        </div>
                        <p className="text-gray-700">
                          Average increase in engagement across digital
                          platforms
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Award size={24} className="text-[#F23B11]" />
                          <span className="text-2xl font-bold text-gray-800">
                            200+
                          </span>
                        </div>
                        <p className="text-gray-700">
                          Successful campaigns launched across Africa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>

            {/* Entertainment & Creative Experience Vertical */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              duration={0.7}
              delay={0.3}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="flex items-start gap-6 mb-8">
                  <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-4 rounded-xl">
                    <Briefcase size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      Entertainment & Creative Experience Design
                    </h3>
                    <p className="text-lg text-gray-600">
                      Event Production & Cultural Economy
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      Core Services
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      {services[2].metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#F23B11] rounded-full mt-2" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      Event Highlights
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Award size={24} className="text-[#F23B11]" />
                          <span className="text-2xl font-bold text-gray-800">
                            120+
                          </span>
                        </div>
                        <p className="text-gray-700">
                          Large-scale events managed successfully
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Target size={24} className="text-[#F23B11]" />
                          <span className="text-2xl font-bold text-gray-800">
                            500K+
                          </span>
                        </div>
                        <p className="text-gray-700">
                          Cumulative event attendees across portfolio
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>

            {/* Human Capital Development Vertical */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              duration={0.7}
              delay={0.4}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="flex items-start gap-6 mb-8">
                  <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-4 rounded-xl">
                    <Users size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      Human Capital Development & Institutional Strengthening
                    </h3>
                    <p className="text-lg text-gray-600">
                      Talent Engineering & Leadership Development
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      Service Lines
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      {services[3].metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#F23B11] rounded-full mt-2" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      Training Impact
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Award size={24} className="text-[#F23B11]" />
                          <span className="text-2xl font-bold text-gray-800">
                            7,000+
                          </span>
                        </div>
                        <p className="text-gray-700">
                          Individuals trained across various programs
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Target size={24} className="text-[#F23B11]" />
                          <span className="text-2xl font-bold text-gray-800">
                            85%
                          </span>
                        </div>
                        <p className="text-gray-700">
                          Participant satisfaction and skills retention rate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>

            {/* Policy & Economic Development Vertical */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              duration={0.7}
              delay={0.5}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="flex items-start gap-6 mb-8">
                  <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-4 rounded-xl">
                    <BookOpen size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      Policy & Economic Development Consulting
                    </h3>
                    <p className="text-lg text-gray-600">
                      Strategic Governance & Systems Design
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      Key Focus Areas
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      {services[4].metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#F23B11] rounded-full mt-2" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                      <h5 className="font-bold text-gray-800 mb-2">
                        SEPTA Framework
                      </h5>
                      <p className="text-sm text-gray-700">
                        Our proprietary{" "}
                        <span className="font-semibold">
                          Stakeholder Engagement, Policy Analysis, and
                          Transformation Architecture (SEPTA)
                        </span>{" "}
                        framework ensures bottom-up policy design that reflects
                        ground realities.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      Results
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Award size={24} className="text-[#F23B11]" />
                          <span className="text-2xl font-bold text-gray-800">
                            1.2M+
                          </span>
                        </div>
                        <p className="text-gray-700">
                          Citizens reached through facilitated stakeholder
                          frameworks
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Target size={24} className="text-[#F23B11]" />
                          <span className="text-2xl font-bold text-gray-800">
                            15+
                          </span>
                        </div>
                        <p className="text-gray-700">
                          Policy frameworks developed and implemented
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={0.8}
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
              Partner with MOTRAC to unlock your organization&apos;s full
              potential through our integrated service ecosystem.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#F23B11] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Transformation
            </Link>
          </AnimatedContent>
        </div>
      </section>
    </main>
  );
}
