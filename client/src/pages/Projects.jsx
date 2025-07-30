import React from "react";
import connecthubImage from "../assets/images/connecthub-preview.png";
import portfolioImage from "../assets/images/portfilioImage.png";
import enquiryImage from "../assets/images/enquiry-form.png";
import passwordImage from "../assets/images/password-generator.png";
import weatherImage from "../assets/images/weather-app.png";
import chatImage from "../assets/images/chat-app.png";
import { FaGithub } from "react-icons/fa"; // 👈 GitHub icon

const projects = [
  {
    title: "ConnectHub",
    description:
      "A full-stack social collaboration platform where users can share posts, interact in real-time, and manage profiles. Built with the MERN stack and styled using Tailwind CSS.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/saad-abbasi07/ConnectHub",
    image: connecthubImage,
  },
  {
    title: "My Portfolio",
    description:
      "A personal portfolio designed with a modern, clean UI using Vite and Tailwind CSS. Fully responsive and performance-optimized.",
    technologies: ["React", "Vite", "Tailwind", "Node.js", "Express"],
    github: "https://github.com/saad-abbasi07/connectfolio",
    image: portfolioImage,
  },
  {
    title: "Enquiry Form App",
    description:
      "A client-side enquiry form with dynamic table display, insert/update functionality, and backend data storage using MongoDB.",
    technologies: ["React", "Axios", "Node.js", "MongoDB", "Flowbite"],
    github: "https://github.com/saad-abbasi07/userEnquiry",
    image: enquiryImage,
  },
  {
    title: "Strong Password Generator",
    description:
      "A React-based tool to generate strong 20-character passwords including uppercase, lowercase, numbers, and special characters. Includes copy-to-clipboard functionality.",
    technologies: ["React", "Tailwind"],
    github: "https://github.com/saad-abbasi07/password-generator-react",
    image: passwordImage,
  },
  {
    title: "Weather App",
    description:
      "Search for any city or country and get live current weather updates including temperature, humidity, and conditions.",
    technologies: ["React", "Weather API", "Axios", "Tailwind"],
    github: "https://github.com/saad-abbasi07/weather-app-react",
    image: weatherImage,
  },
  {
    title: "Live Chat App",
    description:
      "A real-time chat application using React, WebSocket/Firebase. Users can send and receive messages live.",
    technologies: ["React", "WebSocket", "Firebase", "Tailwind"],
    github: "https://github.com/saad-abbasi07/chat-app",
    image: chatImage,
  },
];

export default function Projects() {
  return (
    <section
      className="pt-5 pb-20 max-w-6xl mx-auto text-white"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="rounded mb-4 object-cover h-40 w-full"
              />
            )}

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-purple-700 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm text-purple-400 hover:text-white transition"
            >
              <FaGithub className="text-lg" />
              <span>View on GitHub</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
