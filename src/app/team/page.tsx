import { Linkedin, Mail, Award, Users, Target, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function TeamPage() {
  const leadership = [
    {
      name: "Dr. Adebayo Ogunlesi",
      title: "Founder & Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "A visionary leader with over 20 years of experience in strategic consulting and human capital development across Africa. Dr. Ogunlesi has pioneered indigenous innovation frameworks that have transformed over 500 organizations.",
      expertise: [
        "Strategic Leadership",
        "Innovation Systems",
        "Policy Development",
      ],
      linkedin: "#",
      email: "adebayo@motrac.com",
    },
    {
      name: "Ngozi Okoro",
      title: "Chief Operations Officer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "An operational excellence expert specializing in organizational transformation and process optimization. Ngozi has led institutional strengthening initiatives across 15 African countries.",
      expertise: [
        "Operational Strategy",
        "Change Management",
        "Institutional Development",
      ],
      linkedin: "#",
      email: "ngozi@motrac.com",
    },
    {
      name: "Kwame Mensah",
      title: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      bio: "A tech innovator driving digital transformation across Africa's public and private sectors. Kwame has architected 100+ enterprise systems that power some of the continent's fastest-growing organizations.",
      expertise: [
        "Digital Transformation",
        "Enterprise Architecture",
        "AI & Data Systems",
      ],
      linkedin: "#",
      email: "kwame@motrac.com",
    },
    {
      name: "Amina Hassan",
      title: "Head of Strategic Communications",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "A communications strategist with a track record of building powerful brand narratives and stakeholder engagement frameworks. Amina has led campaigns that reached over 50 million people across Africa.",
      expertise: ["Brand Strategy", "Media Relations", "Digital Marketing"],
      linkedin: "#",
      email: "amina@motrac.com",
    },
    {
      name: "Chidi Eze",
      title: "Director of Human Capital Development",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      bio: "An educator and capacity-building specialist passionate about unlocking human potential. Chidi has trained over 7,000 individuals and designed leadership programs for Fortune 500 companies.",
      expertise: [
        "Leadership Development",
        "Talent Management",
        "Training Design",
      ],
      linkedin: "#",
      email: "chidi@motrac.com",
    },
    {
      name: "Fatima Diallo",
      title: "Head of Policy & Economic Development",
      image:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop",
      bio: "A policy architect with expertise in evidence-based governance and economic strategy. Fatima has advised governments and multilateral organizations on frameworks impacting over 5 million citizens.",
      expertise: ["Policy Analysis", "Economic Planning", "M&E Systems"],
      linkedin: "#",
      email: "fatima@motrac.com",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We pursue mastery in every engagement, setting new standards for quality and impact.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe the best solutions emerge from co-creation with our clients and partners.",
    },
    {
      icon: Target,
      title: "Impact-Driven",
      description:
        "We measure success by the lasting transformation we create in organizations and communities.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We challenge orthodoxy and pioneer indigenous solutions for Africa's unique contexts.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white">
        <div className="container mx-auto px-6 lg:px-12 pt-32 pb-16">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Our People & Leadership
          </h1>
          <div className="w-20 h-1 bg-white rounded-full my-6" />
          <p className="text-xl lg:text-2xl leading-relaxed max-w-5xl">
            Behind every transformation is a team of exceptional minds —
            strategists, innovators, and changemakers committed to unlocking
            Africa&apos;s full potential.
          </p>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="container mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Leadership Philosophy
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            At MOTRAC, leadership isn&apos;t about hierarchy — it&apos;s about
            impact. Our team brings together diverse expertise, indigenous
            knowledge, and global perspectives to solve Africa&apos;s most
            complex challenges. We lead with authenticity, collaborate with
            purpose, and deliver with excellence.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#F23B11] transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#F23B11] to-[#ff6844] rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Executive Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries driving MOTRAC&apos;s mission to transform
              Africa&apos;s intellectual capital into global competitiveness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Profile Image */}
                <div className="relative h-80 bg-gradient-to-br from-gray-200 to-gray-300">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-white/90 text-sm">{leader.title}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {leader.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                      Areas of Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-[#F23B11]/10 text-[#F23B11] text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    <a
                      href={leader.linkedin}
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-[#F23B11] text-gray-600 hover:text-white rounded-lg transition-colors"
                      aria-label={`${leader.name} LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-[#F23B11] text-gray-600 hover:text-white rounded-lg transition-colors"
                      aria-label={`Email ${leader.name}`}
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="container mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 text-center">
            The MOTRAC Culture
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            &quot;THE SPARKFORGED CULTURE&quot;
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#F23B11]/5 to-[#ff6844]/5 rounded-2xl p-8 border-l-4 border-[#F23B11]">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Workplace
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We cultivate an environment where creativity thrives, where
                failure is learning, and where breakthrough solutions emerge
                from collaborative genius. Every team member is empowered to
                challenge assumptions, contribute ideas, and drive impact.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F23B11]/5 to-[#ff6844]/5 rounded-2xl p-8 border-l-4 border-[#F23B11]">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Commitment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We invest in continuous learning, professional development, and
                personal growth. Our team members have access to global
                networks, cutting-edge tools, and opportunities to work on
                projects that shape Africa&apos;s future.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F23B11]/5 to-[#ff6844]/5 rounded-2xl p-8 border-l-4 border-[#F23B11]">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Diversity & Inclusion
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our strength lies in our diversity. We bring together
                professionals from across Africa and beyond, creating a melting
                pot of perspectives, experiences, and innovative approaches to
                problem-solving.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F23B11]/5 to-[#ff6844]/5 rounded-2xl p-8 border-l-4 border-[#F23B11]">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Work-Life Integration
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in sustainable excellence. Our flexible work
                arrangements, wellness programs, and supportive culture ensure
                our team can deliver exceptional results while maintaining
                balance and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            Our Team by the Numbers
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Team Members" },
              { number: "15", label: "African Countries Represented" },
              { number: "200+", label: "Years Combined Experience" },
              { number: "10+", label: "Languages Spoken" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="container mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Join the MOTRAC Team
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Are you a strategic thinker, innovator, or changemaker ready to
            transform Africa&apos;s future? We&apos;re always looking for
            exceptional talent to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block border-2 border-[#F23B11] text-[#F23B11] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#F23B11] hover:text-white transition-colors"
            >
              Send Us Your CV
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
