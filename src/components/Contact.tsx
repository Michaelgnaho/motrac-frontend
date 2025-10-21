"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function HomeContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "08101260288, 08033871443",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@motracresources.com",
    },
    {
      icon: MapPin,
      title: "Office Address",
      content:
        "Suit B10/B11, 2XL Mall, Plot CO2, Christiana Ajayi-Okunuga Street, off 1st Avenue, Gwarimpa Federal Housing Estate, FCT Abuja",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Get in Touch
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-[#F23B11] rounded-full my-4"></div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Ready to transform your ideas into impactful outcomes? Contact us
            today!
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-100 shadow-md rounded-xl p-6 text-center"
              >
                <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-3 rounded-full w-fit mx-auto mb-4">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {info.title}
                </h3>
                <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                  {info.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/contact">
            <button className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Contact Us Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
