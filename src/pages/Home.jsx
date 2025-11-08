import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import myImage from "../assets/images/main-image/saad-abbasi_1.jpg";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-neutral-900 text-white w-full px-4 py-20 sm:px-6 sm:py-28">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Text Section */}
        <div
          className="flex-1 text-center md:text-left space-y-4 sm:space-y-6"
          data-aos="fade-right"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-purple-400">Saad Abbasi</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-lg mx-auto md:mx-0">
            I'm a <strong>Full Stack Developer</strong> and{" "}
            <strong>Machine Learning Developer</strong>. I build responsive digital products and use data to create smart solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 mt-4">
            <Link
              to="/projects"
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 sm:py-3 rounded-full shadow-md transition-all"
            >
              View Work
            </Link>
            <Link
              to="/contact"
              className="border border-gray-400 text-gray-300 hover:border-purple-400 hover:text-white px-6 py-2 sm:py-3 rounded-full transition-all"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center" data-aos="fade-left">
          <div className="w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-purple-400 shadow-xl">
            <img
              src={myImage}
              alt="Saad Abbasi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
