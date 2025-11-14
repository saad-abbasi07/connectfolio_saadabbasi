import React from 'react';
import { Code, LayoutDashboard, Cpu, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8 text-purple-400" />,
    title: 'Web Development',
    description: 'Building responsive, performant web applications using modern technologies like React, Next.js, and Node.js. I focus on creating seamless user experiences with clean, maintainable code.'
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-purple-400" />,
    title: 'Full-Stack Solutions',
    description: 'End-to-end development of web applications with robust backends. I design scalable architectures and implement secure, efficient APIs using Node.js, Express, and MongoDB.'
  },
  {
    icon: <Cpu className="w-8 h-8 text-purple-400" />,
    title: 'Machine Learning',
    description: 'Developing intelligent solutions using Python, TensorFlow, and scikit-learn. From data preprocessing to model deployment, I create ML models that deliver real business value.'
  },
  {
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
    title: 'Responsive Design',
    description: 'Creating beautiful, responsive interfaces that work flawlessly across all devices. I use modern CSS with Tailwind to ensure pixel-perfect implementations.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I Do</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-14 h-14 bg-neutral-700 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
