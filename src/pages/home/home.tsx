import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderMobile from "../../components/header-mobile";
import Skill from "../../components/skill";
import Header from "../../components/header";
import { useLanguage } from "../../language-context";

export interface SkillItem {
  svg: string;
  text: string;
}

export interface Project {
  img: string;
  name: string;
  github: string;
  vercel: string;
  keyFeatures: string[];
  description: string;
  frontTecnologies: string[];
  tags: string[];
}

export type CertCategory =
  | "all"
  | "meta"
  | "react"
  | "foundations"
  | "ai-python"
  | "languages";

export interface Certificate {
  title: string;
  issuer: string;
  url: string;
  category: CertCategory;
  highlight?: boolean;
}

export default function Home() {
  const { t } = useLanguage();
  const [selectedCertCat, setSelectedCertCat] = useState<CertCategory>("all");

  const coreSkills: SkillItem[] = [
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      text: "React.js",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      text: "TypeScript",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      text: "JavaScript",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      text: "Next.js",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      text: "Redux",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      text: "Tailwind CSS",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
      text: "Sass / SCSS",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      text: "Bootstrap",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      text: "HTML5",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      text: "CSS3",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      text: "Git",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      text: "GitHub",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      text: "VS Code",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      text: "Figma",
    },
  ];

  const myProjects: Project[] = [
    {
      img: "https://images.unsplash.com/photo-1508004680771-708b02aabdc0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Picture Valley",
      github: "https://github.com/JasurbekFront-end/picture-valley",
      vercel: "https://picture-valley.vercel.app/",
      tags: ["React", "TypeScript", "Tailwind CSS", "Pexels API"],
      keyFeatures: [
        t("proj.pv.f1"),
        t("proj.pv.f2"),
        t("proj.pv.f3"),
        t("proj.pv.f4"),
      ],
      description: t("proj.pv.desc"),
      frontTecnologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Pexels API",
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Resume Maker",
      github: "https://github.com/JasurbekFront-end/Resume-maker-react-app",
      vercel: "https://resume-maker-react-app.vercel.app",
      tags: ["React", "TypeScript", "@react-pdf/renderer", "Tailwind CSS"],
      keyFeatures: [
        t("proj.rm.f1"),
        t("proj.rm.f2"),
        t("proj.rm.f3"),
        t("proj.rm.f4"),
        t("proj.rm.f5"),
      ],
      description: t("proj.rm.desc"),
      frontTecnologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "@react-pdf/renderer",
      ],
    },
  ];

  // Complete 19 Certificates from Resume categorized
  const allCertificates: Certificate[] = [
    // Meta Professional & Capstone
    {
      title: "Meta Front-End Developer (Professional Certificate)",
      issuer: "Meta / Coursera",
      url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/D44TJ3S1NWMD",
      category: "meta",
      highlight: true,
    },
    {
      title: "CEFR B2 – English Language Proficiency",
      issuer: "Agency for Assessment of Knowledge and Competences, Uzbekistan",
      url: "https://drive.google.com/file/d/13pr5SsP1nkg-pMDrZjP6t_jkNZGIc733/view",
      category: "languages",
      highlight: true,
    },
    {
      title: "Front-End Developer Capstone",
      issuer: "Meta / Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/B4FO8O3R4TV9",
      category: "meta",
    },
    {
      title: "Introduction to Front-End Development",
      issuer: "Meta / Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/TNSI2JEFZPI6",
      category: "meta",
    },

    // React & Modern Frameworks
    {
      title: "Advanced React",
      issuer: "Meta / Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/WXDCGSG7GA7M",
      category: "react",
    },
    {
      title: "React Basics",
      issuer: "Meta / Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/AR5QQD0UKIDY",
      category: "react",
    },
    {
      title: "Developing Front-End Apps with React",
      issuer: "IBM / Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/T1SHR6E0TOHT",
      category: "react",
    },
    {
      title: "Introduction to Next.js",
      issuer: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/J3GIGI60ELIE",
      category: "react",
    },

    // Frontend Foundations & Engineering
    {
      title: "Getting Started with TypeScript",
      issuer: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/IC8KEK50LHUN",
      category: "foundations",
    },
    {
      title: "Programming with JavaScript",
      issuer: "Meta / Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/IGELARK8WKWC",
      category: "foundations",
    },
    {
      title: "HTML and CSS in Depth",
      issuer: "Meta / Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/Z039TAX8G9FM",
      category: "foundations",
    },
    {
      title: "Principles of UX/UI Design",
      issuer: "Meta / Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/03901UEI6MX4",
      category: "foundations",
    },
    {
      title: "Version Control (Git & GitHub)",
      issuer: "Meta / Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/21WYUHXX0NY1",
      category: "foundations",
    },
    {
      title: "Coding Interview Preparation",
      issuer: "Meta / Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/BO9LT6QO0PAY",
      category: "foundations",
    },

    // Python & Machine Learning
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM / Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/IFBQJO8GJOTK",
      category: "ai-python",
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "University of Michigan / Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/IQYKYP5SYSUE",
      category: "ai-python",
    },
    {
      title: "Machine Learning Introduction for Everyone",
      issuer: "IBM / Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/A7Q3MLLE8T7W",
      category: "ai-python",
    },
    {
      title: "Machine Learning for All",
      issuer: "University of London / Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/MV5Q0H435DKU",
      category: "ai-python",
    },
    {
      title: "Exploratory Data Analysis for Machine Learning",
      issuer: "IBM / Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/Z6R3EN3BU3A4",
      category: "ai-python",
    },
  ];

  const filteredCerts =
    selectedCertCat === "all"
      ? allCertificates
      : allCertificates.filter((c) => c.category === selectedCertCat);

  const certCategories: {
    id: CertCategory;
    labelEn: string;
    labelUz: string;
    labelRu: string;
    count: number;
  }[] = [
    {
      id: "all",
      labelEn: "All",
      labelUz: "Barchasi",
      labelRu: "Все",
      count: allCertificates.length,
    },
    {
      id: "meta",
      labelEn: "Meta Front-End",
      labelUz: "Meta Dasturi",
      labelRu: "Программа Meta",
      count: 3,
    },
    {
      id: "react",
      labelEn: "React & Next.js",
      labelUz: "React & Next.js",
      labelRu: "React & Next.js",
      count: 4,
    },
    {
      id: "foundations",
      labelEn: "Web & TS / Git",
      labelUz: "Veb & TS / Git",
      labelRu: "Веб & TS / Git",
      count: 6,
    },
    {
      id: "ai-python",
      labelEn: "Python & AI / ML",
      labelUz: "Python & AI / ML",
      labelRu: "Python & ИИ / ML",
      count: 5,
    },
    {
      id: "languages",
      labelEn: "Language",
      labelUz: "Til (CEFR)",
      labelRu: "Язык (CEFR)",
      count: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-500 selection:text-black">
      {/* Hero Section */}
      <div className="pt-14 lg:pt-16">
        <HeaderMobile />
        <Header />
      </div>

      {/* About Section */}
      <section id="about" className="relative border-t border-zinc-900 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
              {t("about.tag")}
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t("about.title")}
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-cyan-500" />
          </div>

          <div className="mt-12 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-8 backdrop-blur-sm sm:p-10">
            <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
              {t("about.p1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
              {t("about.p2")}
            </p>

            {/* Metrics */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-zinc-800/80 pt-8 sm:grid-cols-4">
              <div className="text-center">
                <span className="block text-2xl font-extrabold text-cyan-400 sm:text-3xl">
                  {t("about.metric1")}
                </span>
                <span className="text-xs text-zinc-400">
                  {t("about.metric1Label")}
                </span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-extrabold text-cyan-400 sm:text-3xl">
                  {t("about.metric2")}
                </span>
                <span className="text-xs text-zinc-400">
                  {t("about.metric2Label")}
                </span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-extrabold text-cyan-400 sm:text-3xl">
                  {t("about.metric3")}
                </span>
                <span className="text-xs text-zinc-400">
                  {t("about.metric3Label")}
                </span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-extrabold text-cyan-400 sm:text-3xl">
                  {t("about.metric4")}
                </span>
                <span className="text-xs text-zinc-400">
                  {t("about.metric4Label")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="relative border-t border-zinc-900 bg-zinc-900/20 py-24"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
              {t("exp.tag")}
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t("exp.title")}
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-cyan-500" />
          </div>

          <div className="relative mt-12 space-y-8 before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5 before:bg-zinc-800 md:before:left-1/2 md:before:-translate-x-1/2">
            {/* Technocorp */}
            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="flex items-center md:w-1/2 md:justify-end md:pr-10">
                <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-xl backdrop-blur-sm transition-all hover:border-cyan-500/50">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-white">Technocorp</h3>
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                      {t("exp.technocorp.period")}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-zinc-300">
                    {t("exp.technocorp.role")}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      {t("exp.technocorp.b1")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      {t("exp.technocorp.b2")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      {t("exp.technocorp.b3")}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-zinc-950 bg-cyan-500 text-xs text-black md:left-1/2">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </div>

            {/* PDP Academy */}
            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-zinc-950 bg-indigo-500 text-xs text-white md:left-1/2">
                <i className="fa-solid fa-chalkboard-user"></i>
              </div>
              <div className="flex items-center md:w-1/2 md:pl-10">
                <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-xl backdrop-blur-sm transition-all hover:border-indigo-500/50">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-white">
                      PDP Academy
                    </h3>
                    <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
                      {t("exp.pdpAcademy.period")}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-zinc-300">
                    {t("exp.pdpAcademy.role")}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400">•</span>
                      {t("exp.pdpAcademy.b1")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400">•</span>
                      {t("exp.pdpAcademy.b2")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PDP Junior */}
            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="flex items-center md:w-1/2 md:justify-end md:pr-10">
                <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-xl backdrop-blur-sm transition-all hover:border-cyan-500/50">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-white">PDP Junior</h3>
                    <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-300">
                      {t("exp.pdpJunior.period")}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-zinc-300">
                    {t("exp.pdpJunior.role")}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      {t("exp.pdpJunior.b1")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      {t("exp.pdpJunior.b2")}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-zinc-950 bg-zinc-600 text-xs text-white md:left-1/2">
                <i className="fa-solid fa-users"></i>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="relative border-t border-zinc-900 py-24"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
              {t("edu.tag")}
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t("edu.title")}
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-cyan-500" />
          </div>

          <div className="mt-12 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-8 backdrop-blur-sm sm:p-10">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {t("edu.program")}
                </h3>
                <p className="mt-1 text-base font-medium text-cyan-400">
                  {t("edu.school")}
                </p>
              </div>
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-800/80 px-4 py-1.5 text-xs font-semibold text-zinc-300">
                <i className="fa-regular fa-calendar"></i>
                {t("edu.period")}
              </span>
            </div>

            <p className="mt-6 text-base leading-relaxed text-zinc-300">
              {t("edu.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative border-t border-zinc-900 bg-zinc-900/20 py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
              {t("skills.tag")}
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t("skills.title")}
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-cyan-500" />
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {coreSkills.map((skill, idx) => (
              <Skill key={idx} svg={skill.svg} text={skill.text} />
            ))}
          </div>

          {/* Categorized Skills */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <i className="fa-solid fa-code text-lg"></i>
                </div>
                <h3 className="font-bold text-white">
                  {t("skills.cat1.title")}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {t("skills.cat1.desc")}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                  <i className="fa-solid fa-cubes text-lg"></i>
                </div>
                <h3 className="font-bold text-white">
                  {t("skills.cat2.title")}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {t("skills.cat2.desc")}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <i className="fa-solid fa-palette text-lg"></i>
                </div>
                <h3 className="font-bold text-white">
                  {t("skills.cat3.title")}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {t("skills.cat3.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spoken Languages Section with Stylish Rounded Flag Icons */}
      <section className="relative border-t border-zinc-900 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
              Communication
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t("lang.title")}
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-cyan-500" />
            <p className="mt-3 text-sm text-zinc-400">{t("lang.subtitle")}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Uzbek Flag */}
            <div className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-zinc-800/60">
              <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-zinc-700 shadow-lg shadow-black/40 transition-transform group-hover:scale-105">
                <svg viewBox="0 0 64 64" className="h-full w-full">
                  <rect width="64" height="20" fill="#1EB53A" />
                  <rect y="20" width="64" height="4" fill="#D52B1E" />
                  <rect y="24" width="64" height="16" fill="#FFFFFF" />
                  <rect y="40" width="64" height="4" fill="#D52B1E" />
                  <rect y="44" width="64" height="20" fill="#0099B5" />
                  <circle cx="18" cy="10" r="6" fill="#FFFFFF" />
                  <circle cx="20" cy="10" r="5" fill="#1EB53A" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {t("lang.uzbek")}
                </h3>
                <span className="mt-1 inline-block rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                  {t("lang.uzbekLevel")}
                </span>
              </div>
            </div>

            {/* English / US Flag */}
            <div className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-zinc-800/60">
              <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-zinc-700 shadow-lg shadow-black/40 transition-transform group-hover:scale-105">
                <svg viewBox="0 0 64 64" className="h-full w-full">
                  <rect width="64" height="64" fill="#BF0A30" />
                  <path
                    d="M0 6.4h64M0 16.8h64M0 27.2h64M0 37.6h64M0 48h64M0 58.4h64"
                    stroke="#FFFFFF"
                    strokeWidth="5"
                  />
                  <rect width="32" height="34" fill="#002868" />
                  <circle cx="10" cy="10" r="1.5" fill="#FFFFFF" />
                  <circle cx="22" cy="10" r="1.5" fill="#FFFFFF" />
                  <circle cx="16" cy="17" r="1.5" fill="#FFFFFF" />
                  <circle cx="10" cy="24" r="1.5" fill="#FFFFFF" />
                  <circle cx="22" cy="24" r="1.5" fill="#FFFFFF" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {t("lang.english")}
                </h3>
                <span className="mt-1 inline-block rounded-full bg-cyan-500/15 px-2.5 py-0.5 text-xs font-semibold text-cyan-400">
                  {t("lang.englishLevel")}
                </span>
              </div>
            </div>

            {/* Russian Flag */}
            <div className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-zinc-800/60">
              <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-zinc-700 shadow-lg shadow-black/40 transition-transform group-hover:scale-105">
                <svg viewBox="0 0 64 64" className="h-full w-full">
                  <rect width="64" height="22" fill="#FFFFFF" />
                  <rect y="21" width="64" height="22" fill="#0039A6" />
                  <rect y="42" width="64" height="22" fill="#D52B1E" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {t("lang.russian")}
                </h3>
                <span className="mt-1 inline-block rounded-full bg-indigo-500/15 px-2.5 py-0.5 text-xs font-semibold text-indigo-400">
                  {t("lang.russianLevel")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Projects Section */}
      <section
        id="portfolio"
        className="relative border-t border-zinc-900 bg-zinc-900/20 py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
              {t("projects.tag")}
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t("projects.title")}
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-cyan-500" />
            <p className="mt-4 max-w-xl text-sm text-zinc-400">
              {t("projects.subtitle")}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {myProjects.map((project) => (
              <div
                key={project.name}
                className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-cyan-500/10"
              >
                <div className="relative h-60 w-full overflow-hidden bg-zinc-800">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {project.name}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-zinc-800/80 pt-4">
                    <Link
                      to={`/project/${encodeURIComponent(project.name)}`}
                      state={{ project }}
                      className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-semibold text-black transition-all hover:bg-cyan-400"
                    >
                      <i className="fa-solid fa-circle-info"></i>
                      {t("projects.btnDetails")}
                    </Link>
                    <a
                      href={project.vercel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/80 px-4 py-2 text-xs font-semibold text-white transition-all hover:border-cyan-400"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square text-cyan-400"></i>
                      {t("projects.btnLive")}
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-400 transition-all hover:text-white"
                    >
                      <i className="fa-brands fa-github"></i>
                      {t("projects.btnSource")}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section: All 19 certificates categorized with filter tabs */}
      <section
        id="certifications"
        className="relative border-t border-zinc-900 py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
              {t("certs.tag")}
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t("certs.title")} ({allCertificates.length})
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-cyan-500" />
            <p className="mt-4 max-w-xl text-sm text-zinc-400">
              {t("certs.subtitle")}
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {certCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCertCat(cat.id)}
                className={`flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  selectedCertCat === cat.id
                    ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                    : "border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:border-zinc-700 hover:text-white"
                }`}
              >
                <span>{cat.labelEn}</span>
                <span
                  className={`py-0.2 rounded-full px-1.5 text-[10px] ${
                    selectedCertCat === cat.id
                      ? "bg-black/20 text-black"
                      : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Certificate Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCerts.map((cert, idx) => (
              <a
                key={idx}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col justify-between rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                  cert.highlight
                    ? "border-cyan-500/40 bg-cyan-500/5 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
                    : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-800/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="font-medium text-cyan-400">
                      {cert.issuer}
                    </span>
                    <i className="fa-solid fa-arrow-up-right-from-square opacity-60 transition-opacity group-hover:opacity-100"></i>
                  </div>
                  <h4 className="mt-2 text-sm font-semibold text-white group-hover:text-cyan-300">
                    {cert.title}
                  </h4>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-zinc-800/50 pt-3">
                  <span className="text-[11px] font-medium tracking-wider text-zinc-500 uppercase">
                    {cert.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400 group-hover:text-cyan-400">
                    <i className="fa-solid fa-certificate"></i>
                    {t("certs.view")}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
