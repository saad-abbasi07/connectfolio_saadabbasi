import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import myImage from "../assets/images/main-image/saad-abbasi_1.jpg";
import Services from "../components/Services";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-neutral-900 text-white w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="min-h-screen px-6 py-16 sm:py-24 md:py-32 flex flex-col justify-center">
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

        <div
          className="flex-1 text-center md:text-left space-y-6"
          data-aos="fade-right"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-purple-400">Saad Abbasi</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-lg mx-auto md:mx-0">
            I'm a <strong>Full Stack Developer</strong> and <strong>Machine Learning Developer</strong>.  
            I build responsive digital products and use data to create smart solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-full max-w-xs sm:max-w-md mx-auto md:mx-0">
            <Link
              to="/projects"
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 text-center"
            >
              View Work
            </Link>
            <Link
              to="/contact"
              className="border-2 border-gray-400 text-gray-300 hover:border-purple-400 hover:text-white px-6 py-3 rounded-full transition-all duration-300 text-center"
            >
              Contact
            </Link>
          </div>
        </div>

        <div
          className="flex-1 flex justify-center"
          data-aos="fade-left"
        >
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-purple-400 shadow-xl">
            <img
              src={myImage}
              alt="Saad Abbasi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        </div>
      </div>
      
      {/* Services Section */}
      <Services />
    </section>
  );
}
