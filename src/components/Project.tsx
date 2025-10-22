import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  CheckCircle,
  Globe,
  FolderOpen,
  ArrowRight,
} from "lucide-react";
import AnimatedContent from "./AnimatedContent";
import ProjectImg1 from "@/../public/kogi.png";
import ProjectImg2 from "@/../public/worldbank-image6.png";
import ProjectImg3 from "@/../public/website.png";
import ProjectImg4 from "@/../public/newDirection.png";

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
      image: ProjectImg1,
    },
    {
      title:
        "Review of World Bank Assisted Public Sector and Good Governance Workplan",
      description:
        "Converting policy intangibles into tangible action plans for improved public sector efficiency.",
      year: "September 2018",
      icon: CheckCircle,
      category: "Governance Consulting",
      image: ProjectImg2,
    },
    {
      title: "Development of Kogipedia.net Web Application",
      description:
        "A digital repository showcasing the achievements of the Governor of Kogi State over six years.",
      year: "March 2021",
      icon: FolderOpen,
      category: "ICT Development",
      image: ProjectImg3,
    },
    {
      title: "Production of a Visual Documentary for Vami Farms",
      description:
        "High-quality visual documentation for a conglomerate of farms across Nasarawa, Kwara, and Kogi States.",
      year: "March 2021",
      icon: Globe,
      category: "Media Production",
      image: ProjectImg4,
    },
  ];

  return (
    <section className="bg-white py-20">
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
        </AnimatedContent>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => {
            const IconComponent = project.icon;
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
                <div className="bg-white border border-gray-100 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Project Image */}
                  <div className="relative w-full h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL="/images/placeholder.jpg" // Optional: Add a placeholder image
                      onError={(e) => {
                        e.currentTarget.src = "/images/placeholder.jpg"; // Fallback image
                      }}
                    />
                    {/* Overlay with icon */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6">
                      <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-3 rounded-full">
                        <IconComponent size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-[#F23B11] bg-[#F23B11]/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <p className="text-xs text-gray-500 font-medium">
                        {project.year}
                      </p>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </AnimatedContent>
            );
          })}
        </div>

        {/* Stats Banner */}
        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.8}
          delay={0.4}
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
        >
          <div className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 rounded-xl py-12 px-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <AnimatedContent
                distance={40}
                direction="vertical"
                duration={0.6}
                delay={0.5}
                initialOpacity={0}
                animateOpacity
                threshold={0.1}
              >
                <div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    8+
                  </div>
                  <p className="text-gray-700 font-medium">
                    Major Projects Completed
                  </p>
                </div>
              </AnimatedContent>
              <AnimatedContent
                distance={40}
                direction="vertical"
                duration={0.6}
                delay={0.6}
                initialOpacity={0}
                animateOpacity
                threshold={0.1}
              >
                <div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">3</div>
                  <p className="text-gray-700 font-medium">
                    Key Client Partnerships
                  </p>
                </div>
              </AnimatedContent>
              <AnimatedContent
                distance={40}
                direction="vertical"
                duration={0.6}
                delay={0.7}
                initialOpacity={0}
                animateOpacity
                threshold={0.1}
              >
                <div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    5+
                  </div>
                  <p className="text-gray-700 font-medium">
                    Years of Excellence
                  </p>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </AnimatedContent>

        {/* CTA */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={0.7}
          delay={0.6}
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
        >
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
        </AnimatedContent>
      </div>
    </section>
  );
}
