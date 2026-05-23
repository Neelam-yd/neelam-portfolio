"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="bg-black text-white px-10 py-10">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          About <span className="text-orange-500">Me</span>
        </h2>
        <p className="text-gray-400 mt-2">
         My Intro
        </p>
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Image */}
        <div className="relative w-full  md:w-1/2 flex justify-center">

          {/* Glow */}
          <div className="absolute my-10 w-[350px] h-[350px] bg-orange-500/20 rounded-full blur-3xl"></div>

          <Image
            src="/image.png"
            alt="profile"
            width={300}
            height={250}
            className="relative z-10 object-contain rounded-xl"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 space-y-5 mr-20">

          <h3 className="text-2xl font-semibold">
            I'm <span className="text-orange-500">Neelam Yadav</span>
          </h3>

          <p className="text-gray-400 leading-relaxed">
           I am currently pursuing my B.Tech from SGT University and working as an intern at iReed India. With over 1+ year of experience in web development, I have built a strong foundation in creating modern, responsive, and user-friendly applications.

 </p>

          <p className="text-gray-400 leading-relaxed">
           I enjoy working with technologies like React, Next.js, and Tailwind CSS, and I am passionate about continuously improving my skills by building real-world projects. I am actively seeking opportunities where I can learn, grow, and contribute to impactful products.
         
          </p>

          {/* Skills / Highlights */}
         

          {/* Button */}
          <a
            href="#contact"
            className="inline-block mt-6 bg-orange-500 text-black px-6 py-2 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            Contact Me
          </a>

        </div>
      </div>
    </section>
  );
}