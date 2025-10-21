import {
  FolderOpen,
  FileText,
  CheckCircle,
  Briefcase,
  Globe,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import ProjectImage from "../../components/ProjectImage";
import image1 from "../../../public/referral.png";
import image2 from "../../../public/worldbank-image6.png";
import image3 from "../../../public/manifesto.png";
import image4 from "../../../public/website.png";
import image5 from "../../../public/website.png";
import image6 from "../../../public/newDirection.png";
import image7 from "../../../public/kogi.png";

export default function ProjectsPage() {
  const projects = [
    {
      title:
        "Development of a Bottom-Top Policy Document for the Kogi State Government",
      description:
        "A strategic policy framework promoting inclusive governance through bottom-top development planning.",
      year: "May 2016",
      icon: FileText,
      image: image1,
    },
    {
      title:
        "Review of the World Bank Assisted Public Sector and Good Governance (PSRGD) Workplan",
      description:
        "Converting policy intangibles into tangible action plans for improved public sector efficiency.",
      year: "September 2018",
      icon: CheckCircle,
      image: image2,
    },
    {
      title:
        "Conceptualization and Design Framework for the Yearly Referral Compendiums on Kogi State Government",
      description:
        "Institutional memory development and administrative documentation framework.",
      year: "January 2016 – January 2020",
      icon: BookOpen,
      image: image1,
    },
    {
      title:
        "Development and Design of the Administration's Campaign Manifesto (The Let's Do More Mantra)",
      description:
        "Comprehensive strategy design producing 38+ campaign outcome strategies.",
      year: "November 2018",
      icon: Briefcase,
      image: image3,
    },
    {
      title: "Production of a Visual Documentary for Vami Farms",
      description:
        "A high-quality visual documentation for a conglomerate of farms across Nasarawa, Kwara, and Kogi States.",
      year: "March 2021",
      icon: Globe,
      image: image4,
    },
    {
      title: "Development of Kogipedia.net Web Application",
      description:
        "A digital repository showcasing the achievements of the Governor of Kogi State over six years.",
      year: "March 2021",
      icon: FolderOpen,
      image: image5,
    },
    {
      title:
        "Conceptualization and Development of the Coffee Table Book (KOGI) for NMMA Kogi",
      description:
        "A visually engaging publication celebrating the National Media Merit Award Kogi Edition.",
      year: "October 2021",
      icon: BookOpen,
      image: image6,
    },
    {
      title: "Content Development and General Program Management",
      description:
        "Oversight and management of various communication and media-driven development programs.",
      year: "Ongoing",
      icon: CheckCircle,
      image: image7,
    },
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
                className="bg-white border border-gray-100 shadow-md rounded-xl overflow-hidden hover:border-[#F23B11] transition-colors"
              >
                {/* Image Space */}
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                  <ProjectImage src={project.image} alt={project.title} />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-4 rounded-full">
                      <IconComponent size={32} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">
                    {project.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">{project.year}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="container mx-auto px-6 lg:px-12 py-20 text-center">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
          Let&apos;s create transformative solutions together.
        </h3>
        <Link href="/contact">
          <button className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white px-6 py-3 rounded-lg font-medium mt-6 hover:opacity-90 transition-opacity">
            Get in Touch
          </button>
        </Link>
      </section>
    </div>
  );
}
