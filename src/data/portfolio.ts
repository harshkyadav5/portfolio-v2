import meAvatar from "@/assets/me/me_2.png";
import mePortrait from "@/assets/me/me_4.jpg";
import mePortraitAlt from "@/assets/me/me_1.png";
import portfolioBanner from "@/assets/projects/portfolio_banner.png";
import tabsImg from "@/assets/projects/tabs.png";
import tabsIcon from "@/assets/projects/tabsIcon.png";
import postmanCert from "@/assets/projects/postman_api_fundamentals.png";
import postmanBadge from "@/assets/projects/postman_api_fundamentals_badge.png";
import pythonCert from "@/assets/projects/python_basic_hackerrank.png";
import sqlCert from "@/assets/projects/sql_intermediate_hackerrank.png";
import hackerrankBadge from "@/assets/icons/hackerrank_engrave.svg";

import html from "@/assets/tech/html.svg";
import css from "@/assets/tech/css.svg";
import tailwind from "@/assets/tech/tailwind.svg";
import js from "@/assets/tech/js.svg";
import react from "@/assets/tech/react.svg";
import node from "@/assets/tech/node.svg";
import express from "@/assets/tech/express.svg";
import cpp from "@/assets/tech/cpp.svg";
import python from "@/assets/tech/python.svg";
import java from "@/assets/tech/java.svg";
import numpy from "@/assets/tech/numpy.svg";
import pandas from "@/assets/tech/pandas.svg";
import sklearn from "@/assets/tech/sklearn.svg";
import matplotlib from "@/assets/tech/matplotlib.svg";
import seaborn from "@/assets/tech/seaborn.svg";
import mysql from "@/assets/tech/mysql.svg";
import postgres from "@/assets/tech/postgres.svg";
import git from "@/assets/tech/git.svg";
import github from "@/assets/tech/github.svg";

export const profile = {
  name: "Harsh Yadav",
  shortName: "harsh",
  location: "new delhi, in",
  tagline: "I build interactive web experiences.",
  intro:
    "I'm a developer who builds interactive web experiences. I'm passionate about creating and learning new things, and I enjoy collaborating with others on projects.",
  available: "open to SDE / AI–ML internships · graduating 2027",
  resumeUrl: "https://drive.google.com/file/d/1hgMHjyya5UFKlktMtiW7IVo8f9__uP4b/view?usp=sharing",
  email: "harshkyadav5@gmail.com",
  avatar: meAvatar,
  portrait: mePortrait,
  portraitAlt: mePortraitAlt,
  banner: portfolioBanner,
};

export const socials = [
  { label: "GitHub", href: "https://github.com/harshkyadav5" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harshyadav05" },
  { label: "LeetCode", href: "https://leetcode.com/u/harshkyadav5/" },
  { label: "Codeforces", href: "https://codeforces.com/profile/harshYadav5" },
] as const;

export type TechCategory =
  | "Web Development"
  | "Programming"
  | "Database"
  | "Data Science"
  | "Machine Learning"
  | "Data Visualization"
  | "Version Control";

export const techStack: { name: string; logo: string; category: TechCategory }[] = [
  { name: "HTML5", logo: html, category: "Web Development" },
  { name: "CSS3", logo: css, category: "Web Development" },
  { name: "TailwindCSS", logo: tailwind, category: "Web Development" },
  { name: "JavaScript", logo: js, category: "Web Development" },
  { name: "React", logo: react, category: "Web Development" },
  { name: "Node.js", logo: node, category: "Web Development" },
  { name: "Express.js", logo: express, category: "Web Development" },
  { name: "C++", logo: cpp, category: "Programming" },
  { name: "Python", logo: python, category: "Programming" },
  { name: "Java", logo: java, category: "Programming" },
  { name: "MySQL", logo: mysql, category: "Database" },
  { name: "PostgreSQL", logo: postgres, category: "Database" },
  { name: "NumPy", logo: numpy, category: "Data Science" },
  { name: "Pandas", logo: pandas, category: "Data Science" },
  { name: "Scikit-Learn", logo: sklearn, category: "Machine Learning" },
  { name: "Matplotlib", logo: matplotlib, category: "Data Visualization" },
  { name: "Seaborn", logo: seaborn, category: "Data Visualization" },
  { name: "Git", logo: git, category: "Version Control" },
  { name: "GitHub", logo: github, category: "Version Control" },
];

export const projects = [
  {
    title: "Tabs",
    subtitle: "Web | Extension",
    year: "2025",
    icon: tabsIcon,
    image: tabsImg,
    description:
      "Designed a unified workspace that brings together notes, bookmarks, and more in one seamless web and extension experience.",
    tags: ["React", "Chrome Extension", "Tailwind"],
    github: "https://github.com/harshkyadav5/tabs",
    featured: true,
  },
];

export const education = [
  {
    level: "Graduation",
    institution: "VIT Bhopal University",
    degree: "B.Tech, Computer Science (AI & ML)",
    year: "2023 — 2027",
    score: "CGPA: 8.54 / 10",
    badge: "B.Tech",
  },
  {
    level: "Intermediate",
    institution: "Yaduvanshi Shiksha Niketan",
    degree: "Class XII — CBSE",
    year: "2022",
    score: "Percentage: 83.4",
    badge: "12",
  },
  {
    level: "Matriculation",
    institution: "Shiksha Bharati Global School",
    degree: "Class X — CBSE",
    year: "2020",
    score: "Percentage: 89.2",
    badge: "10",
  },
];

export const certifications = [
  {
    title: "Postman API Fundamentals",
    issuer: "Postman",
    year: "Sep 2025",
    description:
      "Mastered API development and testing using Postman. Created comprehensive API documentation and automated test suites for various endpoints.",
    image: postmanCert,
    badge: postmanBadge,
    url: "https://www.postman.com/",
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    year: "Mar 2025",
    description:
      "Demonstrated proficiency in advanced SQL queries, joins, aggregations, and analytical functions through HackerRank's intermediate certification.",
    image: sqlCert,
    badge: hackerrankBadge,
    url: "https://www.hackerrank.com/",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    year: "Mar 2025",
    description:
      "Validated core Python skills including data structures, OOP fundamentals, and standard library usage on HackerRank.",
    image: pythonCert,
    badge: hackerrankBadge,
    url: "https://www.hackerrank.com/",
  },
];

export const stats = [
  { label: "LeetCode solved", value: "850+" },
  { label: "Contest rating", value: "1724" },
  { label: "Active days", value: "322+" },
];
