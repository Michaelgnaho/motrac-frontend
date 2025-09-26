import React from "react";

export const Navbar: React.FC = () => {
  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Products", href: "#products" },
  ];

  return (
    <nav className="w-full h-20 flex items-center justify-center bg-[#f23b11]">
      <div className="flex items-center justify-between w-full max-w-[1289px] px-10">
        <div className="flex items-center">
          <img
            className="w-12 h-[51px] object-cover"
            alt="Logo icon"
            src="/logo.png"
          />
          <img
            className="w-[155px] h-11 ml-1 object-cover"
            alt="Logo text"
            src="/logo-text.png"
          />
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white font-medium hover:text-gray-200 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
