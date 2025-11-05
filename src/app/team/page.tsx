import {
  Globe,
  Mail,
  Phone,
  Award,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import img1 from "../../../public/NathanielAwosanmi.jpg";
import img2 from "../../../public/bassie.jpg";
import img3 from "../../../public/SelimatAkinwale.jpg";
import img4 from "../../../public/EmemEdem.jpg";
import img5 from "../../../public/em.jpg";
import img6 from "../../../public/MichaelGnaho.jpg";
import img7 from "../../../public/CliffordAdeyi.jpg";
import img8 from "../../../public/Uduakabasi Ntekim.jpg";

export default function TeamPage() {
  const leadership = [
    {
      name: "Boluwatife Nathaniel Awosanmi",
      title: "Backend Engineer",
      image: img1,
      bio: "A skilled backend engineer specializing in Django and Node.js development. Boluwatife builds robust and scalable server-side solutions that power modern applications.",
      expertise: ["Django", "Node.js", "API Development"],
      portfolio: "https://github.com/NathanielWatife",
      phone: "07052340613",
      email: "awosanminathaniel0@gmail.com",
    },
    {
      name: "Bassey Emmanuel Emmanuel",
      title: "Smart Contract / Back-End Developer",
      image: img2,
      bio: "A blockchain specialist and backend developer with expertise in smart contract development. Bassey creates secure and efficient decentralized solutions.",
      expertise: [
        "Smart Contracts",
        "Blockchain Development",
        "Backend Systems",
      ],
      portfolio: "https://bassey-emmanuel-alpha.vercel.app/",
      phone: "07038564600",
      email: "basscee1604@gmail.com",
    },
    {
      name: "Selimat Akinwale",
      title: "UI/UX & Product Designer",
      image: img3,
      bio: "A creative product designer focused on crafting intuitive and visually stunning user experiences. Selimat transforms complex problems into elegant design solutions.",
      expertise: ["UI/UX Design", "Product Design", "User Research"],
      portfolio: "https://selimatportfolio.framer.website/",
      phone: "9048608305",
      email: "selimatakinwale@gmail.com",
    },
    {
      name: "Edidiong Imoh Udofia",
      title: "UI/UX Designer",
      image:
        "https://drive.google.com/thumbnail?id=1fCFd6BHz49eCZIivU4_0fg-7uxWWK1nw&sz=w400",

      bio: "A passionate UI/UX designer dedicated to creating user-centered designs that enhance digital experiences and drive engagement.",
      expertise: ["UI Design", "UX Design", "Interaction Design"],
      portfolio: "https://t.me/+DlryIM2vQ74xOTA0",
      phone: "08118337762",
      email: "edidiongimohh@gmail.com",
    },
    {
      name: "Emmanuel",
      title: "UI/UX Designer",
      image: img5,
      bio: "A talented UI/UX designer with a keen eye for aesthetics and functionality. Emmanuel creates designs that balance beauty with usability.",
      expertise: ["UI/UX Design", "Visual Design", "Prototyping"],
      portfolio: "https://www.behance.net/emmanueleyo",
      phone: "09037140877",
      email: "emmano2ini@gmail.com",
    },
    {
      name: "Michael Adeyemi Gnaho",
      title: "Full-Stack Developer",
      image: img6,
      bio: "A versatile full-stack developer with a strong focus on front-end technologies. Michael builds complete web applications with seamless user experiences.",
      expertise: [
        "Frontend Development",
        "Backend Development",
        "Full-Stack Solutions",
      ],
      portfolio: "https://new-portfolio-nu-six-43.vercel.app",
      phone: "08145046894",
      email: "gnahomichael@gmail.com",
    },
    {
      name: "Clifford Adeyi",
      title: "Creative Designer",
      image: img7,
      bio: "A creative designer with a passion for visual storytelling and brand identity. Clifford brings innovative design concepts to life across multiple platforms.",
      expertise: ["Graphic Design", "Brand Identity", "Creative Direction"],
      portfolio: "https://www.behance.net/mavemindz",
      email: "cliffordadeyi@gmail.com",
    },
    {
      name: "Uduakabasi Ntekim",
      title: "Content Creator & Social Media Manager",
      image: img8,
      bio: "A dynamic content creator and social media strategist who crafts compelling narratives and builds engaged online communities.",
      expertise: [
        "Content Creation",
        "Social Media Strategy",
        "Community Management",
      ],
      portfolio: "https://tinyurl.com/CreateWithYhudee",
      phone: "08052772368",
      email: "uduakabasintekim33@gmail.com",
    },
    {
      name: "Aroyewon Olayinka Ayanfeoluwa",
      title: "Graphics Designer",
      image:
        "https://drive.google.com/thumbnail?id=1fCFd6BHz49eCZIivU4_0fg-7uxWWK1nw&sz=w400",
      bio: "A skilled graphics designer who transforms ideas into visual masterpieces. Ayanfeoluwa specializes in creating impactful designs for brands and businesses.",
      expertise: ["Graphics Design", "Visual Communication", "Brand Design"],
      portfolio: "https://www.instagram.com/ayanfegraphicsconcept",
      phone: "08127542324",
      email: "ayanfeoluwa098@gmail.com",
    },
    {
      name: "Emem Edem",
      title: "Frontend Developer",
      image: img4,
      bio: "A frontend developer focused on building responsive and performant web interfaces. Emem creates seamless user experiences with modern web technologies.",
      expertise: [
        "Frontend Development",
        "Web Development",
        "Responsive Design",
      ],
      phone: "08164149554",
      email: "simplyemem10@gmail.com",
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
              Our Creative Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the talented professionals driving MOTRAC&apos;s mission
              through innovation, creativity, and technical excellence
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
                    fill
                    className="object-cover"
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
                    {leader.portfolio && (
                      <a
                        href={leader.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-[#F23B11] text-gray-600 hover:text-white rounded-lg transition-colors"
                        aria-label={`${leader.name} Portfolio`}
                      >
                        <Globe size={18} />
                      </a>
                    )}
                    <a
                      href={`mailto:${leader.email}`}
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-[#F23B11] text-gray-600 hover:text-white rounded-lg transition-colors"
                      aria-label={`Email ${leader.name}`}
                    >
                      <Mail size={18} />
                    </a>
                    {leader.phone && (
                      <a
                        href={`tel:${leader.phone}`}
                        className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-[#F23B11] text-gray-600 hover:text-white rounded-lg transition-colors"
                        aria-label={`Call ${leader.name}`}
                      >
                        <Phone size={18} />
                      </a>
                    )}
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
              { number: "10+", label: "Team Members" },
              { number: "5+", label: "Specializations" },
              { number: "50+", label: "Projects Delivered" },
              { number: "100%", label: "Dedication to Excellence" },
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
