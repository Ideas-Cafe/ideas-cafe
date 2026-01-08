"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Events", href: "#Events" },
    { name: "Community", href: "#Community" },
  ];

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="mix-blend-difference fixed p-2 text-white right-1 sm:hidden"
      >
        <Menu size={32} />
      </button>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Darkened Backdrop (Optional, click to close) */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* The Sliding Menu Rectangle */}
        <div
          className={`absolute right-0 top-0 h-screen w-full bg-black text-white p-8 transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 hover:text-gray-400"
          >
            <X size={32} />
          </button>

          {/* Navigation Links */}
          <nav className="mt-16 flex flex-col space-y-8 bg-black">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-medium hover:text-gray-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
