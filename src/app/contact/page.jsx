"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log("Form submitted");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="container mx-auto px-6 lg:px-12 py-20 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
          Contact Us
        </h1>
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-[#F23B11] rounded-full my-4"></div>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mt-6">
          We're here to help you transform ideas into impactful outcomes. Get in
          touch with our team for inquiries, collaborations, or consultations.
        </p>
      </section>

      {/* Contact Information Section */}
      <section className="container mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-100 shadow-md rounded-xl p-8 text-center"
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
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6 lg:px-12 pb-20">
        <div className="bg-gradient-to-r from-[#F23B11]/5 to-[#ff6844]/5 rounded-xl mt-20 p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Send Us a Message
            </h2>
            <p className="text-gray-700 mt-2">
              Fill out the form below and we'll get back to you shortly.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F23B11]"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F23B11]"
                  placeholder="Enter your email"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F23B11]"
                  placeholder="Enter subject"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F23B11]"
                  placeholder="Enter your message"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white px-6 py-3 rounded-lg font-medium mt-4 w-full md:w-fit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section (Optional Placeholder) */}
      <section className="container mx-auto px-6 lg:px-12 pb-20">
        <div className="bg-gray-100 h-64 rounded-xl mt-20 flex items-center justify-center text-gray-500">
          <p className="text-lg">Google Map Location Placeholder</p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container mx-auto px-6 lg:px-12 py-20 text-center bg-gray-50">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
          Let's collaborate to make impactful transformations happen.
        </h3>
        <Link href="/about">
          <button className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white px-6 py-3 rounded-lg font-medium mt-6">
            Learn More About Us
          </button>
        </Link>
      </section>
    </div>
  );
}
