import { ButtonC } from '@/components/button-icon';
import { CircleButton } from '@/components/circle-button';
import { ProjectCard } from '@/components/project-card';
import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

const projects = [
  {
    image: "/project/Spark.jpg",
    header: "SPARKHUB",
    description: "Built a Learning Management Platform with Next.js, Firebase, and Spline 3D.",
    link: "https://spark-hub-one.vercel.app/",
    label: "Hosted Site"
  },
  {
    image: "/project/Book.jpg",
    header: "BOOK IT",
    description: "Developed a Hall Booking System with MERN Stack and JWT.Includes role-based authentication and notifications.",
    link: "https://book-it-mern-app-mk.vercel.app/",
    label: "Hosted Site"
  },
  {
    image: "/project/Goal.jpg",
    header: "GOALS SETTER APP",
    description: "Created a Task Management App with MERN Stack and Redux Toolkit.Secured with JWT and features real-time notifications.",
    link: "https://github.com/Mounieshh/Goal_Setter_App",
    label: "Github Repo"
  },
  {
    image: "/project/promptopia.png",
    header: "PROMPTOPIA",
    description: "Created an AI prompt-sharing platform allowing users to create, edit, and manage prompts seamlessly.",
    link: "https://github.com/Mounieshh/promptopia_nextjs",
    label: "Github Repo"
  }
];

export default function ProjectSection() {
  return (
    <div className="flex flex-col items-center space-y-3 min-h-[640px] md:min-h-[690px]">
      <div className="p-4 md:p-6 lg:p-12 w-full max-w-7xl">
        <div className="flex justify-center">
          <CircleButton label="My Projects" />
        </div>
        <div className="mt-6">
          <ProjectCard items={projects} />
        </div>
      </div>
      <div className="mb-5">
        <ButtonC
          variant="outline"
          size="lg"
          label="See My Works"
          href="https://github.com/Mounieshh"
        />
      </div>
                  <div className='mt-20'>
                    <AiOutlineArrowDown className='w-10 h-10'/>
                  </div>
    </div>
  );
}