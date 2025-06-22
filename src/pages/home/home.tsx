import { Link } from "react-router-dom";
import HeaderMobile from "../../components/header-mobile";
import Skill from "../../components/skill";
import Header from "../../components/header";

export interface Skill {
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
  backendTecnologies?: string[];
}
export default function Home() {
  const mySkills: Skill[] = [
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      text: "HTML 5",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      text: "CSS 3",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
      text: "Sass",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      text: "Bootstrap",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      text: "Tailwind",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      text: "Javascript",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      text: "Typescript",
    },
    {
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      text: "React",
    },
  ];
  const myProjects: Project[] = [
    {
      img: "https://images.unsplash.com/photo-1508004680771-708b02aabdc0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Picture Valley",
      github: "https://github.com/JasurbekFront-end/picture-valley",
      vercel: "https://picture-valley.vercel.app/",
      keyFeatures: [
        "Responsive Design – Seamless experience across all devices, built with a mobile-first approach.",
        "API Integration – Dynamically fetches images from a third-party API ( Pexels).",
        "Image Liking & Collection – Users can like and collect images, stored efficiently in localStorage.",
        "Persistent Data – Liked and collected images remain saved even after refreshing or closing the browser.",
      ],
      description:
        "Picture Valley is a modern and responsive image gallery web application that allows users to explore and save high-quality images from an external API. Users can like or collect their favorite images, which are stored locally for future access — all with a smooth, intuitive user experience.",
      frontTecnologies: [
        "React.js – For building interactive user interfaces.",
        "TypeScript – For type-safe, maintainable code.",
        "Tailwind CSS – For fast and consistent styling with utility-first classes.",
        "Vite – For a fast and modern frontend build setup.",
        "Pexels – For sourcing free, high-resolution images.",
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Resume Maker",
      github: "https://github.com/JasurbekFront-end/Resume-maker-react-app",
      vercel: "https://resume-maker-react-app.vercel.app",
      keyFeatures: [
        "Responsive Design – Mobile-first, fully responsive layout that adapts to any screen size.",
        "Live Resume Renderer – Real-time preview panel that updates instantly as the user fills in their information.",
        " Data Persistence – Automatically saves user input in localStorage and restores it on page reload.",
        "Download as PDF – Allows users to export their resume as a high-quality PDF using @react-pdf/renderer.",
        "Resume Archive – Stores downloaded resumes for future reference and reuse.",
      ],
      description:
        "A professional and responsive Resume Maker web application that allows users to easily create, preview, and download their resumes in real-time. Designed with a user-friendly step-based form and modern UI, it ensures a smooth and intuitive experience on all devices.",
      frontTecnologies: [
        "React.js – For building interactive user interfaces.",
        "TypeScript – For type-safe, maintainable code.",
        "Tailwind CSS – For fast and consistent styling with utility-first classes.",
        "Vite – For a fast and modern frontend build setup.",
        "@react-pdf/renderer – For generating downloadable PDF resumes directly in the browser.",
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Copywriter AI",
      github: "https://github.com/JasurbekFront-end/copywriter-ai-frontend",
      vercel: "https://copywriter-ai-frontend.vercel.app/",
      keyFeatures: [
        "AI-Powered Text Generation – Leverages the Groq API with Llama models to generate creative and context-aware copy in real-time.",
        "Chat Interface – Dynamic chat UI with assistant/user role-based message display for natural interactions.",
        "Chat History Persistence – Automatically saves chat sessions to a backend database for reuse and tracking.",
        "Session Management – New chats start on page reload while keeping UI locked on the current session.",
        "History Modal – A modal accessed via a clock icon that allows users to view and reopen past chats.",
        "Modern UI/UX – Clean, responsive interface with smooth animations and a focus on usability.",
      ],
      description:
        "A powerful AI-driven web application designed to generate high-quality marketing copy, social media posts, and content ideas tailored to user prompts. With an intuitive interface and intelligent chat system, it helps users brainstorm and refine their content in seconds.",
      frontTecnologies: [
        "React.js – For building fast and reactive UI components.",
        "TypeScript – Ensures code safety and maintainability.",
        "Tailwind CSS – Utility-first CSS framework for responsive design.",
        "Vite – High-performance development and build tool.",
        "React Hot Toast – For displaying interactive toast messages.",
        "Lottie Animations – For engaging visual effects.",
        "Groq API + Llama Models – For fast, efficient, and intelligent content generation.",
      ],
      backendTecnologies: [
        "Node.js & Express – For handling API routes and managing chat history",
        "MongoDB & Mongoose – To store chat logs and manage data schema.",
        "JWT & bcrypt – Secure user authentication and session management.",
        "dotenv & cors – For environment management and API security.",
      ],
    },
  ];
  return (
    <div className="mt-[57px]">
      <HeaderMobile />
      <Header/>
      <div className="bg-gray-300 pt-[74px] pb-[90px]">
        <div className="flex flex-col items-center px-[40px] lg:w-[700px] lg:mx-auto">
          <div className="flex h-[67px] w-[240px] items-center justify-center border-6">
            <h1 className="font-montserrat text-[18px] font-bold">About me</h1>
          </div>
          <p className="font-open-sans mt-[38px] text-center text-[14px] font-light">
            My name is Jaurbek. I am Highly motivated and detail-oriented
            Frontend Developer. Passionate about building responsive,
            user-friendly interfaces and constantly improving through hands-on
            projects. Seeking an opportunity to gain real-world experience and
            contribute to a dynamic development team
          </p>
          <p className="font-open-sans mt-[38px] text-center text-[14px] font-light">
            I have been learing at PDP Academy for a couple of months. I have
            been taught by experienced programmers at PDP academy for couple of
            months. Therefore, I learned not only how to program, but also how
            to behave in a team and on real projects.
          </p>
        </div>
        <div className="mt-[50px] flex flex-col items-center px-[20px]">
          <div className="flex h-[67px] w-[240px] items-center justify-center border-6">
            <h1 className="font-montserrat text-[18px] font-bold">Skills</h1>
          </div>
          <div className="mt-9 grid w-full grid-cols-2 items-center gap-y-4 md:grid-cols-3 lg:grid-cols-8">
            {mySkills.map((skill, idx) => (
              <Skill key={idx} svg={skill.svg} text={skill.text} />
            ))}
          </div>
        </div>
      </div>
      <div className="portfolio-bg flex h-[200px] items-center justify-center">
        <div className="flex h-[67px] w-[240px] items-center justify-center border-6">
          <h1 className="font-montserrat text-[18px] font-bold">Portfolio</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 bg-black py-10">
        {myProjects.map((project) => (
          <Link
            key={project.name}
            to={`/project/${encodeURIComponent(project.name)}`}
            state={{ project }}
            className="w-full cursor-pointer overflow-hidden  shadow-lg hover:scale-95 transition-all duration-300"
          >
            <img src={project.img} className="h-[200px] w-full object-cover" />
            <div className="bg-gray-300 px-4 py-2">
              <h2 className="font-bold">{project.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-gray-300 w-full h-[80px]"></div>
    </div>
  );
}
