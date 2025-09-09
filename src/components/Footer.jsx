import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo / Branding */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">DevTinder</span>
          <span className="text-pink-500 text-xl">💻❤️</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#careers" className="hover:text-white transition">Careers</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="mailto:devtinder@example.com" className="hover:text-white transition">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} DevTinder. Built with ❤️ by developers, for developers.
      </div>
    </footer>
  );
}
