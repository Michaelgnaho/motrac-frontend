import Link from "next/link";
import {
  FileText,
  CheckCircle,
  Globe,
  FolderOpen,
  ArrowRight,
} from "lucide-react";

export default function HomeProjectsSection() {
  const featuredProjects = [
    {
      title:
        "Development of a Bottom-Top Policy Document for Kogi State Government",
      description:
        "A strategic policy framework promoting inclusive governance through bottom-top development planning.",
      year: "May 2016",
      icon: FileText,
      category: "Policy Design",
    },
    {
      title:
        "Review of World Bank Assisted Public Sector and Good Governance Workplan",
      description:
        "Converting policy intangibles into tangible action plans for improved public sector efficiency.",
      year: "September 2018",
      icon: CheckCircle,
      category: "Governance Consulting",
    },
    {
      title: "Development of Kogipedia.net Web Application",
      description:
        "A digital repository showcasing the achievements of the Governor of Kogi State over six years.",
      year: "March 2021",
      icon: FolderOpen,
      category: "ICT Development",
    },
    {
      title: "Production of a Visual Documentary for Vami Farms",
      description:
        "High-quality visual documentation for a conglomerate of farms across Nasarawa, Kwara, and Kogi States.",
      year: "March 2021",
      icon: Globe,
      category: "Media Production",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-[#F23B11] rounded-full my-4"></div>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Over the years, we have successfully executed numerous strategic
            consulting and development projects across policy design, media,
            ICT, and capacity development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-100 shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-3 rounded-full">
                    <IconComponent size={24} />
                  </div>
                  <span className="text-xs font-medium text-[#F23B11] bg-[#F23B11]/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  {project.year}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 rounded-xl py-12 px-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-800 mb-2">8+</div>
              <p className="text-gray-700 font-medium">
                Major Projects Completed
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-800 mb-2">3</div>
              <p className="text-gray-700 font-medium">
                Key Client Partnerships
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-800 mb-2">5+</div>
              <p className="text-gray-700 font-medium">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-700 text-lg mb-6">
            Explore our complete portfolio of transformative projects
          </p>
          <Link href="/projects">
            <button className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
              View All Projects
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
