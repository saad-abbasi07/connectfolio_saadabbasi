import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-gray-400 pt-12 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">ConnectFolio</h3>
            <p className="text-sm">Crafted by Saad Abbasi with passion and precision.</p>
            <p className="text-xs mt-2 text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/projects" className="hover:text-white transition">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-medium text-white mb-3">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaGithub />
                <a
                  href="https://github.com/saad-abbasi07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaLinkedin />
                <a
                  href="https://www.linkedin.com/in/saad-abbasi-271953296/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaEnvelope />
                <a
                  href="mailto:07saadabbasi@gmail.com"
                  className="hover:text-white transition"
                >
                  07saadabbasi@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaPhone />
                <a
                  href="tel:+923276491461"
                  className="hover:text-white transition"
                >
                  +92 327 6491461
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
