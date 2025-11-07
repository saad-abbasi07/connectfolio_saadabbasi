import React from "react";
import { FaGithub } from "react-icons/fa";
import connecthubImage from "../assets/images/projects_images/connecthub-preview.png";
import portfolioImage from "../assets/images/projects_images/portfilioImage.png";
import enquiryImage from "../assets/images/projects_images/enquiry-form.png";
import passwordImage from "../assets/images/projects_images/password-generator.png";
import weatherImage from "../assets/images/projects_images/weather-app.png";
import chatImage from "../assets/images/projects_images/chat-app.png";
import ecommerceImage from "../assets/images/projects_images/e-store.png";
import foodieImage from "../assets/images/projects_images/foodieOrder.png";
import mernChatImage from "../assets/images/projects_images/Mern_live_chat.png";
import universityPortalImage from "../assets/images/projects_images/university-portal.png";
import shopifyThemeImage from "../assets/images/projects_images/shopifyTheme.png";
import fbMiniAppImage from "../assets/images/projects_images/fb-pic.png";
import loanApprovalImage from "../assets/images/projects_images/loan-approval.png";
import spamShieldImage from "../assets/images/projects_images/spamshield.png";
import linearRegressionImage from "../assets/images/projects_images/linearRegressionImage.png";

const webProjects = [
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
  {
    title: "Ecommerce Estore NextJS",
    description:
      "A modern, responsive e-commerce storefront built with Next.js, React, and Tailwind CSS. Features product listings, categories, and a dynamic product details page.",
    technologies: ["Next.js", "React", "Tailwind"],
    github: "https://github.com/saad-abbasi07/ecommerce-estore-nextjs",
    image: ecommerceImage,
  },
  {
    title: "FoodieOrder",
    description:
      "A React + Tailwind food delivery UI with restaurant listings, menu pages, cart, login, and signup, built with React Router and context state.",
    technologies: ["React", "Tailwind", "React Router"],
    github: "https://github.com/saad-abbasi07/FoodieOrder",
    image: foodieImage,
  },
  {
    title: "MERN Chat App",
    description:
      "A real-time chat application built with React, Node.js, Express, MongoDB, and Socket.io.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/saad-abbasi07/mern-chat-app",
    image: mernChatImage,
  },
  {
    title: "University Portal",
    description:
      "A secure PHP/MySQL portal for students, faculty, and admins with role-specific dashboards, Bootstrap UI, and session authentication.",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/saad-abbasi07/university-portal",
    image: universityPortalImage,
  },
  {
    title: "Shopify Theme",
    description:
      "Milano Shopify Theme - Full-stack React/Node solution with responsive UI, auth system, and demo showcase. Built with Tailwind CSS, Express, MongoDB.",
    technologies: ["React", "Node.js", "Express", "Tailwind", "MongoDB"],
    github: "https://github.com/saad-abbasi07/shopify-theme",
    image: shopifyThemeImage,
  },
  {
    title: "fb-mini-app",
    description:
      "A mini Facebook-like app built with Next.js and TypeScript.",
    technologies: ["Next.js", "TypeScript"],
    github: "https://github.com/saad-abbasi07/fb-mini-app",
    image: fbMiniAppImage,
  }
];

const mlProjects = [
  {
    title: "Loan Approval ML Model",
    description:
      "This project predicts whether a loan application will be approved by analyzing applicant data. Includes confusion matrix, feature importance chart, and ROC curve for clear model insights.",
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/saad-abbasi07/loan-approval-ml-model",
    image: loanApprovalImage,
  },
  {
    title: "SpamShield-ML: Spam Detection System",
    description:
      "A machine learning project to classify text messages as spam or ham using Python and NLP. TF-IDF vectorization, Multinomial Naive Bayes classifier, and visual insights with Seaborn and WordCloud.",
    technologies: ["Python", "NLP", "scikit-learn", "Seaborn", "WordCloud", "TF-IDF"],
    github: "https://github.com/saad-abbasi07/SpamShield-ML",
    image: spamShieldImage,
  },
  {
    title: "Linear Regression: Student Score Prediction",
    description:
      "Built a Linear Regression model to predict student exam scores based on study hours, attendance, and previous performance. Visualized predicted vs actual results using Matplotlib and Scikit-learn.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "scikit-learn"],
    github: "https://github.com/saad-abbasi07/student-performance-prediction",
    image: linearRegressionImage,
  }
];

export default function Projects() {
  const renderProjects = (projectsArray) =>
    projectsArray.map((project, index) => (
      <div
        key={index}
        className="bg-neutral-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition flex flex-col h-full"
      >
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="rounded mb-4 object-cover h-48 w-full"
          />
        )}
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-purple-700 text-xs text-white px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-sm text-purple-400 hover:text-white transition"
        >
          <FaGithub className="text-lg" />
          <span>View on GitHub</span>
        </a>
      </div>
    ));

  return (
    <section className="pt-10 pb-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-center text-gray-900">Web Development Projects</h2>
      <p className="text-center text-gray-600 mb-12">
        Showcase of responsive and interactive web applications built using modern technologies.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {renderProjects(webProjects)}
      </div>

      <h2 className="text-3xl font-bold mb-2 mt-20 text-center text-gray-900">Machine Learning Projects</h2>
      <p className="text-center text-gray-600 mb-12">
        Hands-on ML projects demonstrating data analysis, predictive modeling, and AI techniques.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {renderProjects(mlProjects)}
      </div>
    </section>
  );
}
