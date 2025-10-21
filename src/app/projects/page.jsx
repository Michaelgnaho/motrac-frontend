import {
  FolderOpen,
  FileText,
  CheckCircle,
  Briefcase,
  Globe,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title:
        "Development of a Bottom-Top Policy Document for the Kogi State Government",
      description:
        "A strategic policy framework promoting inclusive governance through bottom-top development planning.",
      year: "May 2016",
      icon: FileText,
    },
    {
      title:
        "Review of the World Bank Assisted Public Sector and Good Governance (PSRGD) Workplan",
      description:
        "Converting policy intangibles into tangible action plans for improved public sector efficiency.",
      year: "September 2018",
      icon: CheckCircle,
    },
    {
      title:
        "Conceptualization and Design Framework for the Yearly Referral Compendiums on Kogi State Government",
      description:
        "Institutional memory development and administrative documentation framework.",
      year: "January 2016 – January 2020",
      icon: BookOpen,
    },
    {
      title:
        "Development and Design of the Administration's Campaign Manifesto (The Let's Do More Mantra)",
      description:
        "Comprehensive strategy design producing 38+ campaign outcome strategies.",
      year: "November 2018",
      icon: Briefcase,
    },
    {
      title: "Production of a Visual Documentary for Vami Farms",
      description:
        "A high-quality visual documentation for a conglomerate of farms across Nasarawa, Kwara, and Kogi States.",
      year: "March 2021",
      icon: Globe,
    },
    {
      title: "Development of Kogipedia.net Web Application",
      description:
        "A digital repository showcasing the achievements of the Governor of Kogi State over six years.",
      year: "March 2021",
      icon: FolderOpen,
    },
    {
      title:
        "Conceptualization and Development of the Coffee Table Book (KOGI) for NMMA Kogi",
      description:
        "A visually engaging publication celebrating the National Media Merit Award Kogi Edition.",
      year: "October 2021",
      icon: BookOpen,
    },
    {
      title: "Content Development and General Program Management",
      description:
        "Oversight and management of various communication and media-driven development programs.",
      year: "Ongoing",
      icon: CheckCircle,
    },
  ];

  const clients = [
    "Kogi State Government",
    "Vami Farms Nigeria Limited",
    "National Youth Council of Nigeria (NYCN)",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="container mx-auto px-6 lg:px-12 py-20 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
          Our Projects
        </h1>
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-[#F23B11] rounded-full my-4"></div>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mt-6">
          Over the years, Motrac Global Resources Limited has successfully
          executed numerous strategic consulting and development projects across
          policy design, media, ICT, and capacity development — consistently
          delivering excellence and impact.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-100 shadow-md rounded-xl p-6"
              >
                <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-3 rounded-full w-fit mb-4">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mt-2">
                  {project.description}
                </p>
                <p className="text-xs text-gray-500 mt-2">{project.year}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Clients Section */}
      <section className="container mx-auto px-6 lg:px-12 py-20 bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Our Clients
          </h2>
          <p className="text-gray-700 text-lg mt-4 max-w-3xl mx-auto">
            We are proud to have partnered with leading institutions and
            organizations across Nigeria.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 text-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 py-6 rounded-xl font-semibold text-gray-800"
            >
              {client}
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="container mx-auto px-6 lg:px-12 py-20 text-center">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
          Let's create transformative solutions together.
        </h3>
        <Link href="/contact">
          <button className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white px-6 py-3 rounded-lg font-medium mt-6">
            Get in Touch
          </button>
        </Link>
      </section>
    </div>
  );
}
