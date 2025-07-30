import React from "react";

export default function About() {
  return (
    <section className="py-20 bg-neutral-900 text-white px-4" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center" data-aos="fade-down">
          About Me
        </h2>

        <p className="text-gray-300 leading-7 mb-4" data-aos="fade-up">
          I'm <strong>Saad Abbasi</strong>, a full-stack web developer with expertise in building responsive, scalable, and dynamic websites and web apps using <strong>React, Node.js, MongoDB, PHP, MySQL, HTML, CSS, JavaScript</strong>, and <strong>jQuery</strong>.
        </p>

        <p className="text-gray-300 leading-7 mb-4" data-aos="fade-up" data-aos-delay="100">
          I work with modern stacks like <strong>Express.js</strong> and <strong>Tailwind CSS</strong>, and utilize tools such as Git, Postman, and Vite to deliver clean code and user-focused solutions.
        </p>

        <p className="text-gray-300 leading-7 mb-4" data-aos="fade-up" data-aos-delay="150">
          My portfolio features real-time, production-level projects, with live demos and video walkthroughs available on my LinkedIn and GitHub profiles.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6" data-aos="fade-up" data-aos-delay="200">
          <a
            href="https://www.linkedin.com/in/saad-abbasi-271953296/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition text-center"
          >
            View My LinkedIn
          </a>

          <a
            href="https://github.com/saad-abbasi07"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-black transition text-center"
          >
            View My GitHub
          </a>

          {/* <a
            href="../assets/myResume/My-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition text-center"
          >
            Download Resume
          </a> */}
          <a
  href="/myResume/My-Resume.pdf"
  download="Saad_Abbasi_Resume.pdf"
  className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition text-center"
>
  Download Resume
</a>
        </div>
      </div>
    </section>
  );
}
