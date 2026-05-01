"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
     <p className="mb-3">
  19. I'm currently pursuing a degree in{" "}
  <span className="font-medium">Computer Science</span>. I discovered my passion for
  programming through building projects and solving real-world problems.{" "}
  <span className="italic">My favorite part of coding</span> is bringing ideas
  to life through clean and efficient code. My current tech stack includes{" "}
  <span className="font-medium">
    HTML, CSS, JavaScript, React, Node.js, and MongoDB
  </span>
  . I’m actively learning TypeScript and Next.js. I’m looking for an{" "}
  <span className="font-medium">internship</span> to grow as a developer and
  contribute to impactful projects.
</p>

{/* <p>
  <span className="italic">Outside of programming</span>, I enjoy reading
  self-growth books, playing cricket, and exploring new tech trends. I’m also
  learning about <span className="font-medium">AI and backend systems</span>,
  and recently started contributing to open-source.
</p> */}

    </motion.section>
  );
}
