"use client";

import Image from "next/image";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRightCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type ProjectItemProps = {
  image?: StaticImageData | string;
  header?: string;
  description?: string;
  link?: string;
  label?: string;
};

type ProjectProps = {
  items?: ProjectItemProps[];
};

export const ProjectCard = ({ items = [] }: ProjectProps) => {
  const [hovering, setHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    // Only add listener if window is defined (client-side)
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", moveCursor);
      return () => window.removeEventListener("mousemove", moveCursor);
    }
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      {hovering && (
        <motion.div
          className="fixed top-0 left-0 z-50 pointer-events-none"
          animate={{ x: cursorPos.x - 15, y: cursorPos.y - 15 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="w-8 h-8 rounded-full bg-black mix-blend-difference" />
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        {items.map((item, idx) => {
          return (
            <Card
              key={idx}
              className="w-full border-none shadow-none cursor-pointer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <CardHeader>
                <div className="relative w-full h-48 sm:h-56 md:h-[50vh] overflow-hidden border-2 border-black rounded-lg mb-5">
                  <Image
                    src={item.image ?? "/assets/mouniesh-ghibli.jpg"} 
                    alt={item.header ?? "project-image"}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  {item.header ?? "Untitled Project"}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {item.description ?? "No description available"}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link
                  href={item.link ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer" // Added for security
                  className="text-black hover:no-underline text-sm sm:text-base flex items-center gap-2"
                  onClick={(e) => e.stopPropagation()} // Prevent card click from interfering
                >
                  <span>{item.label ?? "View Project"}</span> {/* Fallback for label */}
                  <span>
                    <ArrowRightCircleIcon className="w-4 h-4 font-semibold" />
                  </span>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
};