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
import starterWebImage from "../assets/images/projects_images/starter-web.png";
import loanApprovalImage from "../assets/images/projects_images/loan-approval.png";
import spamShieldImage from "../assets/images/projects_images/spamshield.png";
import linearRegressionImage from "../assets/images/projects_images/linearRegressionImage.png";
import smartSpendImage from "../assets/images/projects_images/smartspend-ai.png";
import stockPredictorImage from "../assets/images/projects_images/stock-price-predictor.png";

const webProjects = [
  {
    title: "ConnectHub",
    description:
      "Full-stack social collaboration platform for sharing posts, chatting in real-time, and managing profiles. I implemented real-time messaging and profile management using MERN stack and Tailwind CSS.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/saad-abbasi07/ConnectHub",
    image: connecthubImage,
  },
  {
    title: "Shopify Theme",
    description:
      "Milano Shopify Theme - Full-stack React/Node solution with responsive UI and demo showcase. I built authentication, responsive layouts, and demo card features using Tailwind CSS and MongoDB.",
    technologies: ["React", "Node.js", "Express", "Tailwind", "MongoDB"],
    github: "https://github.com/saad-abbasi07/shopify-theme",
    image: shopifyThemeImage,
  },
  {
    title: "React Starter Web",
    description:
      "A lightweight starter template for React projects. Includes basic folder structure, pre-configured routing, reusable components, clean UI, and ready-to-deploy setup. Perfect for bootstrapping new React projects quickly.",
    technologies: ["React", "Vite", "Tailwind", "React Router"],
    github: "https://github.com/saad-abbasi07/react-starter-web",
    image: starterWebImage,
  },
  {
    title: "My Portfolio",
    description:
      "Modern personal portfolio built with Vite and Tailwind CSS. I handled responsive design, project showcase, and performance optimizations.",
    technologies: ["React", "Vite", "Tailwind"],
    github: "https://github.com/saad-abbasi07/connectfolio",
    image: portfolioImage,
  },
  {
    title: "MERN Chat App",
    description:
      "Real-time chat application built with React, Node.js, Express, MongoDB, and Socket.io. I implemented socket-based messaging and multi-room chat support.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/saad-abbasi07/mern-chat-app",
    image: mernChatImage,
  },
  {
    title: "Ecommerce Estore NextJS",
    description:
      "Responsive e-commerce storefront built with Next.js and Tailwind. I implemented dynamic product pages, category filters, and cart functionality.",
    technologies: ["Next.js", "React", "Tailwind"],
    github: "https://github.com/saad-abbasi07/ecommerce-estore-nextjs",
    image: ecommerceImage,
  },
  {
    title: "FoodieOrder",
    description:
      "React + Tailwind food delivery UI with restaurant listings, menus, cart, and authentication. I built context-based state management and routing system.",
    technologies: ["React", "Tailwind", "React Router"],
    github: "https://github.com/saad-abbasi07/FoodieOrder",
    image: foodieImage,
  },
  {
    title: "Enquiry Form App",
    description:
      "Dynamic enquiry form with insert/update table functionality. I integrated backend storage using MongoDB and built interactive table features.",
    technologies: ["React", "Axios", "Node.js", "MongoDB", "Flowbite"],
    github: "https://github.com/saad-abbasi07/userEnquiry",
    image: enquiryImage,
  },
  {
    title: "Weather App",
    description:
      "Live weather updates for any city or country using React and Weather API. I implemented search functionality and responsive UI components.",
    technologies: ["React", "Weather API", "Axios", "Tailwind"],
    github: "https://github.com/saad-abbasi07/weather-app-react",
    image: weatherImage,
  },
  {
    title: "Live Chat App",
    description:
      "Real-time messaging app using React, Firebase, and WebSocket. I implemented message streaming and live notifications.",
    technologies: ["React", "WebSocket", "Firebase", "Tailwind"],
    github: "https://github.com/saad-abbasi07/chat-app",
    image: chatImage,
  },
  {
    title: "Strong Password Generator",
    description:
      "Tool to generate strong 20-character passwords with copy-to-clipboard. Built UI with React and styled with Tailwind CSS.",
    technologies: ["React", "Tailwind"],
    github: "https://github.com/saad-abbasi07/password-generator-react",
    image: passwordImage,
  },
  {
    title: "University Portal",
    description:
      "Secure PHP/MySQL portal with role-specific dashboards. I implemented session-based authentication and Bootstrap UI components.",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/saad-abbasi07/university-portal",
    image: universityPortalImage,
  },
  {
    title: "fb-mini-app",
    description:
      "Mini Facebook-like app built with Next.js and TypeScript. I developed UI components and navigation using Next.js.",
    technologies: ["Next.js", "TypeScript"],
    github: "https://github.com/saad-abbasi07/fb-mini-app",
    image: fbMiniAppImage,
  },
];

const mlProjects = [
  {
    title: "Loan Approval ML Model",
    description:
      "Predicts loan approval based on applicant data. I implemented data preprocessing, model training, and visualizations like confusion matrix and ROC curve using Python and scikit-learn.",
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/saad-abbasi07/loan-approval-ml-model",
    image: loanApprovalImage,
  },
  {
    title: "SpamShield-ML",
    description:
      "Spam detection system classifying messages as spam or ham. I built TF-IDF vectorization, trained a Multinomial Naive Bayes model, and visualized insights with Seaborn and WordCloud.",
    technologies: ["Python", "NLP", "scikit-learn", "Seaborn", "WordCloud", "TF-IDF"],
    github: "https://github.com/saad-abbasi07/SpamShield-ML",
    image: spamShieldImage,
  },
  {
    title: "Linear Regression: Student Score Prediction",
    description:
      "Predicts student exam scores based on study hours and attendance. I trained a Linear Regression model, visualized predicted vs actual results, and analyzed feature impact.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "scikit-learn"],
    github: "https://github.com/saad-abbasi07/student-performance-prediction",
    image: linearRegressionImage,
  },
  {
    title: "SmartSpend-AI",
    description:
      "AI-driven personal finance tool that predicts monthly spending and provides budgeting recommendations. Implemented data preprocessing, ML modeling, and visual analytics using Python, Pandas, scikit-learn, and Matplotlib.",
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Seaborn", "AI"],
    github: "https://github.com/saad-abbasi07/SmartSpend-AI",
    image: smartSpendImage,
  },
  {
    title: "Stock Price Predictor",
    description:
      "Predicts stock prices and trends using historical data and machine learning. Users can enter a stock symbol to get predictions and analyze stock performance. Built with Python, Pandas, scikit-learn, and Matplotlib for analysis and visualization.",
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Stock Analysis", "AI"],
    github: "https://github.com/saad-abbasi07/stock_price_predictor",
    image: stockPredictorImage,
  },
];

export default function Projects() {
  const renderProjects = (projectsArray) =>
    projectsArray.map((project, index) => (
      <div
        key={index}
        className="bg-neutral-800 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col h-full"
      >
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
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
          className="mt-auto inline-flex items-center gap-2 text-sm text-purple-400 hover:text-white hover:bg-purple-700 px-3 py-1 rounded transition"
        >
          <FaGithub className="text-lg" />
          <span>View on GitHub</span>
        </a>
      </div>
    ));

  return (
    <section className="pt-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl font-bold mb-2 text-center text-gray-900">
        Web Development Projects
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Showcase of responsive and interactive web applications built using modern technologies.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {renderProjects(webProjects)}
      </div>

      <h2 className="text-3xl font-bold mb-2 mt-20 text-center text-gray-900">
        Machine Learning Projects
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Hands-on ML projects demonstrating data analysis, predictive modeling, and AI techniques.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {renderProjects(mlProjects)}
      </div>
    </section>
  );
}
