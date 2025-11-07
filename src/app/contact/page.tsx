"use client";

import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "08101260288, 08033871443",
      link: "tel:08101260288",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@motracresources.com",
      link: "mailto:info@motracresources.com",
    },
    {
      icon: MapPin,
      title: "UK Office",
      content: "61, Bridge Street, Kington, HR5 3DJ",
      link: "https://maps.google.com/?q=61+Bridge+Street+Kington+HR5+3DJ",
    },
    {
      icon: MapPin,
      title: "Abuja Office",
      content: "55, Nusa Amagbor, FO1, Kubwa Extension, Bwari LGA, FCT, Abuja",
      link: "https://maps.google.com/?q=Kubwa+Extension+Abuja",
    },
    {
      icon: MapPin,
      title: "Kogi Office",
      content: "8, Palasa Street, Off Graj Hotel Road, GRA, Lokoja, Kogi State",
      link: "https://maps.google.com/?q=Lokoja+Kogi+State",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    // Validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFormStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    // Simulate API call (replace with your actual endpoint)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Replace this with your actual API call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      console.log("Form data submitted:", formData);

      setFormStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          "Oops! Something went wrong. Please try again or contact us directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : "_self"}
                rel={info.link.startsWith("http") ? "noopener noreferrer" : ""}
                className="bg-white border border-gray-100 shadow-md rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white p-3 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {info.title}
                </h3>
                <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                  {info.content}
                </p>
              </a>
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

          {/* Status Message */}
          {formStatus.message && (
            <div
              className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                formStatus.type === "success"
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              {formStatus.type === "success" ? (
                <CheckCircle
                  className="text-green-600 mt-0.5 flex-shrink-0"
                  size={20}
                />
              ) : (
                <AlertCircle
                  className="text-red-600 mt-0.5 flex-shrink-0"
                  size={20}
                />
              )}
              <p
                className={`text-sm ${
                  formStatus.type === "success"
                    ? "text-green-800"
                    : "text-red-800"
                }`}
              >
                {formStatus.message}
              </p>
            </div>
          )}

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F23B11] disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F23B11] disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Enter your email"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F23B11] disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Enter subject"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  disabled={isSubmitting}
                  className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F23B11] disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white px-8 py-3 rounded-lg font-medium mt-6 w-full md:w-fit hover:shadow-lg transition-shadow duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-6 lg:px-12 pb-20">
        <div className="rounded-xl mt-20 overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126230.3!2d7.4!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sAbuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Motrac Resources Office Location"
          ></iframe>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container mx-auto px-6 lg:px-12 py-20 text-center bg-gray-50 rounded-xl">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
          Let's collaborate to make impactful transformations happen.
        </h3>
        <a href="/about">
          <button className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] text-white px-6 py-3 rounded-lg font-medium mt-6 hover:shadow-lg transition-shadow duration-300">
            Learn More About Us
          </button>
        </a>
      </section>
    </div>
  );
}
