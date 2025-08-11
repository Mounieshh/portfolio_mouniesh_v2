"use client"

import { CircleButton } from '@/components/circle-button';
import React from 'react';
import Image from 'next/image';
import { Timeline } from '@/components/timeline';
import { ButtonC } from '@/components/button-icon';
import { FaLinkedin, FaGithub } from "react-icons/fa";

import {motion} from 'framer-motion'

const experienceItems = [
  {
    time: "APR 2025 – JUL 2025",
    title: "Web Development Intern at Hyperready Technology",
    description:
      "Worked as a Backend API Developer Intern on a real-time industry-level project called CloseBI. Involved in implementing AI-driven analysis features for SEO optimization.",
    dotColor: "bg-lime-200",
  },
  {
    time: "APR 2024 – SEP 2024",
    title: "Web Development Intern at The Foundax Company",
    description:
      "Refactored a legacy HTML/CSS site into a modern Next.js app, improving loading speed and maintainability. Implemented responsive design for cross-device UI consistency.",
    dotColor: "bg-pink-200",
  },
  {
    time: "JAN 2024 – FEB 2024",
    title: "Web Development Intern at Vantage Flow",
    description:
      "Developed a Contact Manager using React.js, HTML, and CSS. Modularized UI into reusable components, reducing future maintenance effort by 40%.",
    dotColor: "bg-green-200",
  },
];

export default function AboutSection() {
  return (
    <motion.div 
    
    id='about' 
    className="flex flex-col min-h-[600px] md:min-h-[1000px] bg-[#E3E3FF] border-b-2 border-black"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }} // triggers when 20% of the section is visible
    transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="p-4 md:p-6 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center">
        
        {/* Left Column - Image */}
<div className="flex items-center justify-center">
  <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] relative bg-white border border-black rounded-full overflow-hidden">
    <Image
      src="/assets/profile.jpg"
      alt="profile-image"
      fill
      className="object-cover scale-200 translate-y-16 md:translate-y-18 translate-x-2"
    />
  </div>
</div>


        {/* Right Column - Text Content */}
        <div className="flex flex-col justify-center gap-2 md:gap-3 lg:gap-4 text-black">
          <CircleButton label="About" />
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">More About Me</h1>
          <h3 className="text-sm md:text-base lg:text-xl font-semibold text-gray-800">
            Crafting code with purpose
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-xl">
            I'm a dedicated software engineer with a knack for building efficient and modern web applications.
            I enjoy solving real-world problems with clean, scalable code and love exploring new technologies.
          </p>
        </div>
        
      </div>
      <div className="flex flex-col md:flex-row p-4 md:p-5 lg:p-12 items-start">
        <div className="flex flex-col space-y-3 w-full md:w-1/3 pr-0 md:pr-4">
          <h2 className="text-2xl md:text-3xl lg:text-5xl">
            Experiences
          </h2>
          <p className="text-sm md:text-base lg:text-xl leading-relaxed text-gray-700">
            I have had the pleasure to work with companies across a variety of industries. I'm always interested in new, exciting and challenging adventures.
          </p>
          <div className="flex gap-2 md:gap-4 mt-2">
            <ButtonC icon={<FaLinkedin />} variant="outline" size="sm"/>
            <ButtonC icon={<FaGithub />} variant="outline" size="sm" />
          </div>
        </div>

        <div className="w-full md:w-2/3 mt-4 md:mt-0 md:pl-4 lg:pl-28">
          <Timeline items={experienceItems} />
        </div>
      </div>
    </motion.div>
  );
}