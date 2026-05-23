"use client";

import { Code, BarChart3, Laptop, Brain } from "lucide-react";

const skills = [
  {
    title: "Web Development",
    icon: <Code />,
    desc: "Building responsive and interactive UIs.",
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "JavaScript", "CSS", "Tailwind CSS", "HTML"],
  },
  {
    title: "Data Analytics",
    icon: <BarChart3 />,
    desc: "Turning data into meaningful insights.",
    tech: ["Python", "Pandas", "NumPy", "Excel", "Power BI", "SQL"],
  },
  {
    title: "Platforms & Tools",
    icon: <Laptop />,
    desc: "Tools I use for development and productivity.",
    tech: ["VS Code", "Git", "GitHub", "Postman", "Vercel", "Netlify"],
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain />,
    desc: "Exploring intelligent and data-driven solutions.",
    tech: ["Scikit-learn", "Matplotlib", "Google Colab", "TensorFlow Basics"],
  },
];

export default function Skills() {
  return (
    <section className="bg-black text-white px-10 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          My <span className="text-orange-500">Skills</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Technologies and tools I work with.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mx-20 h-fill">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition duration-300 max-w-sm h-75 w-full "
          >
            {/* Title + Icon side by side */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 text-xl">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-orange-500">
                {skill.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4">{skill.desc}</p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {skill.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs border border-gray-700 px-6 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
