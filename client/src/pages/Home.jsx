import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import myImage from "../assets/images/main-image/saad-abbasi.jpg";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-neutral-900 text-white min-h-screen flex items-center w-full px-4 py-16">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-4 sm:px-6 lg:px-10">

        {/* Text Section */}
        <div
          className="flex-1 text-center md:text-left space-y-6"
          data-aos="fade-right"
        >
          <header>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Hi, I'm <span className="text-purple-400">Saad Abbasi</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-md mx-auto md:mx-0">
              A passionate <strong>Full Stack Developer</strong> crafting modern, scalable, and dynamic websites and web apps using React, Node.js, and MongoDB.
            </p>
          </header>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/projects"
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full shadow-md transition"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="border border-gray-400 text-gray-300 hover:border-white hover:text-white px-6 py-2 rounded-full transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center" data-aos="fade-left">
          <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-purple-400 shadow-lg">
            <img
              src={myImage}
              alt="Portrait of Saad Abbasi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
