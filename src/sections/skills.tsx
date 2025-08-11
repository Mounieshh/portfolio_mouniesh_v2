import { CircleButton } from '@/components/circle-button';
import { SkillCard } from '@/components/skill-card';
import React from 'react';

import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFastapi,
  SiPostman,
  SiGithubactions,
  SiJsonwebtokens
} from 'react-icons/si';

export const skillItems = [
  {
    cardName: "Programming Languages",
    descNames: [
      { icon: <FaJava />, skillName: "Java" },
      { icon: <FaPython />, skillName: "Python" }
    ]
  },
  {
    cardName: "Frontend",
    descNames: [
      { icon: <FaHtml5 />, skillName: "HTML5" },
      { icon: <FaCss3Alt />, skillName: "CSS3" },
      { icon: <FaJs />, skillName: "JavaScript" },
      { icon: <SiTailwindcss />, skillName: "Tailwind CSS" },
      { icon: <FaReact />, skillName: "React.js" },
      { icon: <SiNextdotjs />, skillName: "Next.js" },
      { icon: <SiRedux />, skillName: "Redux" }
    ]
  },
  {
    cardName: "Backend",
    descNames: [
      { icon: <FaNodeJs />, skillName: "Node.js" },
      { icon: <SiExpress />, skillName: "Express.js" },
      { icon: <SiFastapi />, skillName: "FastAPI" },
      { icon: <SiFirebase />, skillName: "Firebase" },
      { icon: <SiJsonwebtokens />, skillName: "JWT" },
      { icon: <SiPostman />, skillName: "REST APIs" }
    ]
  },
  {
    cardName: "Databases",
    descNames: [
      { icon: <SiMongodb />, skillName: "MongoDB" },
      { icon: <SiMysql />, skillName: "MySQL" },
      { icon: <SiPostgresql />, skillName: "PostgreSQL" }
    ]
  },
  {
    cardName: "DevOps",
    descNames: [
      { icon: <FaDocker />, skillName: "Docker" },
      { icon: <FaGitAlt />, skillName: "Git" },
      { icon: <FaGithub />, skillName: "GitHub" },
      { icon: <SiGithubactions />, skillName: "GitHub Actions" }
    ]
}
];

export default function SkillsSection() {
  return (
    <div className="min-h-screen border-b-2 border-black">
      <div className="p-4 md:p-6 lg:p-12">
        <div className="flex justify-center items-center mb-6">
          <CircleButton label="Skills" />
        </div>
        <div>
          <SkillCard items={skillItems} />
        </div>
      </div>
    </div>
  );
}