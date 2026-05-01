"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  // Duplicate the skills list to create an infinite loop
  const repeatedSkills = [...skillsData, ...skillsData];

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 px-4 w-full overflow-hidden"
    >
      <SectionHeading>My skills</SectionHeading>

      <div className="relative max-w-3xl mx-auto overflow-hidden px-2"> {/* Reduced from max-w-5xl */}
  <motion.ul
    className="flex w-max space-x-4 sm:space-x-6 py-6"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      repeat: Infinity,
      ease: "linear",
      duration: 20,
    }}
  >
    {repeatedSkills.map((skill, index) => (
      <li
        key={index}
        className="flex flex-col items-center justify-center bg-white dark:bg-white/10 dark:text-white/80 rounded-xl shadow-md p-2 w-16 h-16 sm:w-20 sm:h-20 cursor-pointer flex-shrink-0"
      >
        <img
          src={skill.logo}
          alt={`${skill.name} logo`}
          className="w-6 h-6 mb-1"
        />
        <span className="text-xs text-center">{skill.name}</span>
      </li>
    ))}
  </motion.ul>


      </div>
    </section>
  );
}
