"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
    {
    title:"TaskFlow",
    desc:"Built Task Flow, a full-stack task management web app that enables teams to create projects, assign tasks, track progress, and collaborate efficiently in real time.",
    impact:"Enhanced workflow management with real-time task updates, progress visualization, and secure authentication.",
    tech:"HTML, CSS, JavaScript, Next JS, Node JS, Express JS, MongoDB",
    link:"https://task-pro-iota.vercel.app/",
    img:"/taskflow.png",
  },
  {
    title: "AI PCOS Detection",
    desc: "ML-based system for early detection of PCOS using medical data.",
    impact:
      "Enabled faster and more accurate diagnosis, supporting early medical intervention.",
    tech: "Python, Machine Learning",
    link: "https://ai-based-pcos-pcod-detection.vercel.app/",
    img: "/pcosDetection.png",
  },
  {
    title: "Healers",
    desc: "Hospital management system with secure patient records and seamless workflow.",
    impact:
      "Improved patient data handling efficiency and reduced manual errors by digitizing operations.",
    tech: "HTML, CSS, JavaScript, React JS",
    link: "https://github.com/yourusername/healers",
    img: "/healers.png",
  },
  {
    title: "Fitzone",
    desc: "Gym platform with BMI calculator & personalized workout suggestions.",
    impact:
      "Enhanced user engagement by delivering real-time fitness insights and customized plans.",
    tech: "React JS, APIs, CSS",
    link: "https://github.com/yourusername/fitzone",
    img: "/fitzone.png",
  },
  
  {
    title: "Phishing Detector",
    desc: "Chrome extension to detect and block malicious URLs in real-time.",
    impact:
      "Improved user security by preventing phishing attacks through intelligent URL analysis.",
    tech: "JavaScript, Machine Learning",
    link: "https://github.com/yourusername/phishing",
    img: "/phishingDetector.png",
  },

  {
    title: "Calculator App",
    desc: "Responsive calculator with smooth and intuitive interface.",
    impact:
      "Delivered fast and accurate calculations with a user-friendly experience across devices.",
    tech: "HTML, CSS, JavaScript",
    link: "https://github.com/yourusername/calculator",
    img: "/calculator.png",
  },
];

export default function Projects() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-20">
        Projects
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-20">
        
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-[380px]-[460px] bg-[#111] rounded-2xl overflow-hidden border border-orange-500/20 hover:border-orange-500 transition duration-300 shadow-md hover:shadow-orange-500/20 flex flex-col"
          >
            
            {/* Image */}
            <div className="relative w-full h-[190px]">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between flex-1">
              
              <div>
                <h3 className="text-xl font-semibold text-orange-400 mb-1">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-2">
                  {project.desc}
                </p>

                {/* Impact Line 🔥 */}
                <p className="text-gray-300 text-xs mb-3">
                  {project.impact}
                </p>

                <p className="text-xs mb-4">
                  <span className="text-orange-400">Tech:</span>{" "}
                  <span className="text-gray-300">{project.tech}</span>
                </p>
              </div>

              {/* Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-900 text-white py-2 rounded-lg transition duration-300 hover:shadow-[0_0_15px_#f97316]"
              >
                Demo <ExternalLink size={16} />
              </a>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}