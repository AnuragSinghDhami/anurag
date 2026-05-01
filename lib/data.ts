import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import apnagharImg from "@/public/apnaghar.png";
import mediclaimImg from "@/public/mediclaim.png";
import portopsImg from "@/public/portops.png";
import leetcodeImg from "@/public/leetcode-logo.png";
import codeforcesImg from "@/public/codeforces-logo.png";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Profiles",
    hash: "#profiles",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Tech in Computer Science and Engineering",
    location: "Graphic Era hill university, Dehradun",
    description:
      "Currently pursuing B.Tech in Computer Science. Learning core CS fundamentals and building real-world projects using modern web technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 – 2027 (CGPA : 8.7)",
  },
  {
    title: "Class 12 – CBSE",
    location: "k.V No. 1 Banbasa, Champawat",
    description:
      "Completed senior secondary education with a focus on Physics, Chemistry, Mathematics, and Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 – 2023 (89%)",
  },
  {
    title: "Class 10 – CBSE",
    location: "k.V No. 1 Banbasa, Champawat",
    description:
      "Completed secondary education with strong academic performance and interest in computers and science.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 – 2021 (85%)",
  },
] as const;


export const projectsData = [
  {
    title: "ApnaGhar",
    description:
      "A MERN stack-based web application designed to help college students easily find rooms for rent near their campuses.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    imageUrl: apnagharImg,
    link: "https://github.com/AnuragSinghDhami/ApnaGhar",
  },
  {
    title: "MediClaim",
    description:
      "An AI-powered web application using a Retrieval-Augmented Generation (RAG) pipeline with Google's Gemini to automate health insurance claim verification.",
    tags: ["Flask", "Google Gemini", "LangChain", "FAISS", "PyPDF2"],
    imageUrl: mediclaimImg,
    link: "https://github.com/AnuragSinghDhami/MediClaim",
  },
  {
    title: "Portops AI",
    description:
      "A Python Flask application that uses Google's Gemini AI to parse Statement of Facts (SoF) documents and extract port operation events.",
    tags: ["Python", "Flask", "Gemini AI", "Tailwind", "REST API"],
    imageUrl: portopsImg,
    link: "https://github.com/AnuragSinghDhami/marithon-2025",
  },
] as const;

export const codingProfilesData = [
  {
    title: "LeetCode",
    description:
      "Active competitive programmer solving algorithmic challenges, participating in weekly contests, and mastering data structures.",
    tags: ["Algorithms", "Data Structures", "Problem Solving"],
    imageUrl: leetcodeImg,
    link: "https://leetcode.com/u/AnuragSinghDhami/",
  },
  {
    title: "Codeforces",
    description:
      "Participating in regular competitive programming rounds to improve algorithmic thinking and mathematical problem-solving skills.",
    tags: ["Competitive Programming", "Math", "Logic"],
    imageUrl: codeforcesImg,
    link: "https://codeforces.com/profile/AnuragSinghDhami",
  },
] as const;

export const skillsData = [
  {name : "C", logo: "/logos/icons8-c-50.png"},
  {name : "C++", logo: "/logos/icons8-c++.svg"},
  {name : "Java", logo: "/logos/226777.png"},
  { name: "HTML", logo: "/logos/html5-original.svg" },
  { name: "CSS", logo: "/logos/css3-original.svg" },
  { name: "JavaScript", logo: "/logos/javascript-original.svg" },
  { name: "TypeScript", logo: "/logos/typescript-original (1).svg" },
  { name: "React", logo: "/logos/react-original.svg" },
  { name: "Next.js", logo: "/logos/nextjs-original.svg" },
  { name: "Node.js", logo: "/logos/nodejs-original.svg" },
  { name: "Git", logo: "/logos/git-original.svg" },
  { name: "Tailwind", logo: "/logos/tailwindcss-original.svg" }, // rename if typo
  { name: "Prisma", logo: "/logos/prisma-original.svg" },
  { name: "MongoDB", logo: "/logos/mongodb-original.svg" },
  { name: "Redux", logo: "/logos/redux-original.svg" },
  { name: "GraphQL", logo: "/logos/graphql-plain.svg" },
  { name: "Apollo", logo: "/logos/apollo-logo-png_seeklogo-289300.png" },
  { name: "Express", logo: "/logos/express-original.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql-original.svg" },
  { name: "Python", logo: "/logos/python-original.svg" },
  { name: "Django", logo: "/logos/django-plain.svg" }, // one of them is duplicate
  { name: "Framer Motion", logo: "/logos/framer-motion.svg" },
] as const;



