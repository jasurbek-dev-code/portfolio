import { useLocation } from "react-router-dom";
import type { Project } from "../pages/home/home";

export default function ProjectDetail() {
  const location = useLocation();
  const project = location.state?.project as Project;

  if (!project) {
    return <div className="text-center mt-10 text-white">Project not found</div>;
  }

  return (
    <div className="p-6 text-black bg-gray-300 mt-12 lg:flex lg:items-center lg:justify-center lg:flex-col lg:gap-7">
      <img src={project.img} className="w-full h-[200px] object-cover mb-6 md:h-[300px] lg:w-[60%] lg:h-[400px]" />
      <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
      <p className="mb-4 lg:w-[60%] lg:text-center">{project.description}</p>

      <h2 className="text-xl font-semibold">Key Features</h2>
      <ul className="list-disc pl-6 mb-4 lg:flex lg:flex-col lg:items-center lg:list-none lg:gap-2">
        {project.keyFeatures.map((feature:string, idx:number) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold">Frontend Technologies</h2>
      <ul className="list-disc pl-6 mb-4 lg:flex lg:flex-col lg:items-center lg:list-none lg:gap-2">
        {project.frontTecnologies.map((tech:string, idx:number) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>

      {project.backendTecnologies && (
        <>
          <h2 className="text-xl font-semibold">Backend Technologies</h2>
          <ul className="list-disc pl-6 lg:flex lg:flex-col lg:items-center lg:list-none lg:gap-2">
            {project.backendTecnologies.map((tech:string, idx:number) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </>
      )}
      <div className="flex items-center gap-4 flex-col mt-8">
        <h1 className="text-xl font-semibold">Source code:</h1>
        <a href={project.github} className="underline text-blue-500 cursor-pointer font-montserrat text-[14px] text-center" target="_blank">{project.github}</a>
      </div>
       <div className="flex items-center gap-4 flex-col mt-8">
        <h1 className="text-xl font-semibold">Visit:</h1>
        <a href={project.vercel} className="underline text-blue-500 cursor-pointer font-montserrat text-[14px] text-center" target="_blank">{project.vercel}</a>
      </div>
    </div>
  );
}
