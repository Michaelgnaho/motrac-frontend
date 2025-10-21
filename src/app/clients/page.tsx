"use client";
import { Building2, Handshake, Quote } from "lucide-react";
import Link from "next/link";
import ClientCard from "./ClientCard";

export default function ClientsPage() {
  const clients = [
    {
      name: "Kogi State Government",
      description: "Policy design, ICT innovation, and governance consulting.",
      icon: Building2,
      image: "/images/clients/kogi-state-government.jpg",
    },
    {
      name: "Vami Farms Nigeria Limited",
      description: "Visual documentation and development strategy consulting.",
      icon: Handshake,
      image: "/images/clients/vami-farms.jpg",
    },
    {
      name: "National Youth Council of Nigeria (NYCN)",
      description:
        "Capacity-building, youth development, and media collaboration.",
      icon: Building2,
      image: "/images/clients/nycn.jpg",
    },
  ];

  const testimonials = [
    {
      quote:
        "Working with Motrac Global Resources Limited was seamless — their professionalism and results exceeded expectations.",
      client: "Kogi State Government",
    },
    {
      quote:
        "Working with Motrac Global Resources Limited was seamless — their professionalism and results exceeded expectations.",
      client: "Vami Farms Nigeria Limited",
    },
    {
      quote:
        "Working with Motrac Global Resources Limited was seamless — their professionalism and results exceeded expectations.",
      client: "National Youth Council of Nigeria",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="container mx-auto px-6 lg:px-12 py-20 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
          Our Clients
        </h1>
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-[#F23B11] rounded-full my-4"></div>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mt-6">
          We are privileged to have partnered with government institutions,
          private organizations, and development agencies that share our
          commitment to excellence, innovation, and sustainable growth.
        </p>
      </section>

      {/* Clients Grid */}
      <section className="container mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {clients.map((client, index) => (
            <ClientCard key={index} client={client} />
          ))}
        </div>
      </section>

      {/* Partnership Philosophy Section */}
      <section className="container mx-auto px-6 lg:px-12">
        <div className="bg-gradient-to-r from-[#F23B11]/10 to-[#ff6844]/10 py-16 rounded-xl mt-20 text-center">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-2xl font-bold mb-4">
            Partnerships Built on Trust and Results
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Our relationships go beyond transactions — we collaborate, innovate,
            and grow with our clients to achieve measurable impact.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 lg:px-12 py-20">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            What Our Partners Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 shadow-md rounded-xl p-6 text-left hover:shadow-lg transition-shadow"
            >
              <Quote className="text-[#F23B11] mb-4" size={32} />
              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonial.quote}
              </p>
              <p className="text-[#F23B11] font-semibold mt-4">
                — {testimonial.client}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="container mx-auto px-6 lg:px-12 py-20 text-center bg-gray-50">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
          Join our network of satisfied clients and partners driving real
          impact.
        </h3>
        <Link href="/contact">
          <button className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white px-6 py-3 rounded-lg font-medium mt-6 hover:opacity-90 transition-opacity">
            Partner With Us
          </button>
        </Link>
      </section>
    </div>
  );
}
