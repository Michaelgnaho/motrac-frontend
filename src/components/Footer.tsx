import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
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

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand and Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">
              MOTRAC GLOBAL RESOURCES LTD.
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming ideas into impactful outcomes. We are committed to
              delivering excellence in every project and collaboration.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#F23B11] text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-[#F23B11] to-[#ff6844] p-2 rounded-full">
                      <IconComponent size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{info.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {info.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} MOTRAC GLOBAL RESOURCES LTD. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
