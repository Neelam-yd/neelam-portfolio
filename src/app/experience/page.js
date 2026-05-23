"use client";

import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "IREED INDIA",
    role: "Frontend Developer (Intern)",
    duration: "Gurugram | Present",
    points: [
      "Built high-performance React.js interfaces improving user engagement",
      "Optimized UI for faster load time and smooth responsiveness",
      "Developed real estate client websites boosting online visibility",
    ],
    tech: "Next js , React JS, Tailwind CSS, JavaScript",
  },
  {
    company: "CYBER CODERS",
    role: "Web Developer (Intern)",
    duration: "May 2024 – July 2024 | Remote",
    points: [
      "Developed scalable full-stack applications with optimized performance",
      "Handled database operations using Microsoft SQL Server",
      "Designed modern UI/UX using Bootstrap & Tailwind CSS",
    ],
    tech: "React JS, Bootstrap, Tailwind, SQL Server",
  },
  {
    company: "CODESOFT",
    role: "Web Developer (Intern)",
    duration: "July 2023 | Remote",
    points: [
      "Created professional portfolio website to showcase projects",
      "Built responsive landing pages with modern UI practices",
      "Developed calculator app with clean and user-friendly interface",
    ],
    tech: "HTML, CSS, JavaScript",
  },
];

export default function Experience() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      {/* Heading */}
       <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          My <span className="text-orange-500">Experience</span>
        </h2>
        <p className="text-gray-400 mt-2">
         My Work
        </p>
      </div>

      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-orange-500 transform -translate-x-1/2" />

        {/* Timeline Items */}
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-16 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Content Card */}
            <div className="w-full md:w-1/2 p-6">
              <div className="bg-[#111] p-6 rounded-2xl shadow-lg border border-orange-500/20 hover:border-orange-500 transition">
                
                <h3 className="text-2xl font-semibold text-orange-400">
                  {exp.company}
                </h3>

                <p className="text-lg mt-1">{exp.role}</p>
                <p className="text-sm text-gray-400 mb-4">
                  {exp.duration}
                </p>

                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <p className="mt-4 text-sm text-orange-400">
                  Tech Stack:{" "}
                  <span className="text-gray-300">{exp.tech}</span>
                </p>
              </div>
            </div>

            {/* Timeline Dot */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                <Briefcase size={18} />
              </div>
            </div>

            {/* Empty Space */}
            <div className="hidden md:block w-1/2" />
          </div>
        ))}
      </div>
    </section>
  );
}