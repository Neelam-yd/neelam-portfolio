"use client"
import Image from "next/image";
import { Hand } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
export default function Hero() {
  return (
  <section className="flex md:flex-row py-15 px-10  bg-black text-white">
      {/* Left Text Section */}
      <div className="md:w-1/2 mx-25 mt-16 space-y-4">
      <h1 className="text-5xl font-bold mb-0 flex items-center gap-2">Hello 👋 <break/>
         
         </h1>
        <h2 className="text-3xl px-4 mx-0 ">
          <br />I'm <span className="text-orange-500">Neelam</span>
        </h2>
         <h2 className="text-5xl px-8 font-semibold text-gray-300">
      <TypeAnimation
        sequence={[
          "Software Developer", 2000,
          "Web Developer", 2000,
          "Frontend Developer", 2000,
          "Full Stack Developer", 2000,
        ]}
        speed={50}
        repeat={Infinity}
        wrapper="span"
        cursor={true}
      />
    </h2>
        <p className="text-gray-400 max-w-md">
          I build modern web applications using cutting-edge technologies like React, Next.js.
        </p>
 <div className="flex space-x-4 mt-6">
        {/* Buttons */}
       {/* Smooth scroll to contact section — no browser navigation */}
<a
  href="/contact"
  className="bg-orange-500 text-black px-5 py-2 rounded font-semibold hover:bg-orange-600 transition"
>
  Let's Chat
</a>

{/* Opens resume PDF in a new tab */}
<a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-orange-500 text-orange-500 px-5 py-2 rounded font-semibold hover:bg-orange-500 hover:text-black transition"
>
  My Resume
</a>
</div>
        {/* Tech Stack */}
        <div className="mt-8 flex flex-wrap gap-3 text-gray-400">
          <span className="border border-gray-700 px-3 py-1 rounded">Node.js</span>
          <span className="border border-gray-700 px-3 py-1 rounded">React</span>
          <span className="border border-gray-700 px-3 py-1 rounded">Next.js</span>
          <span className="border border-gray-700 px-3 py-1 rounded">Git</span>
          <span className="border border-gray-700 px-3 py-1 rounded">GitHub</span>
        </div>
      </div>

      {/* Right Image Section */}
    <div className="relative w-1/2 flex justify-center items-center -mt-20 mr-20">

  {/* Glow */}
  <div className="absolute w-[500px] h-[600px] bg-orange-500/20 rounded-full blur-3xl"></div>

  {/* Circle Ring */}
  

  {/* Image (COMING OUT OF CIRCLE) */}
  <Image
    src="/profilepic.png"
    alt="profile"
    width={380}
    height={500}
    className="relative z-10 object-contain -translate-y-10"
  />

</div>
      
    </section>
  );
}
