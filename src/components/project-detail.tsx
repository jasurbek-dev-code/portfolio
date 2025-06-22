import { useLocation } from "react-router-dom";
import type { Project } from "../pages/home/home";

export default function ProjectDetail() {
  const location = useLocation();
  const project = location.state?.project as Project;

  if (!project) {
    return (
      <div className="mt-10 text-center text-white">Project not found</div>
    );
  }

  return (
    <div className="mt-12 bg-gray-300 p-6 text-black lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-7">
      <img
        src={project.img}
        className="mb-6 h-[200px] w-full object-cover md:h-[300px] lg:h-[400px] lg:w-[60%]"
      />
      <h1 className="mb-2 text-2xl font-bold">{project.name}</h1>
      <p className="mb-4 lg:w-[60%] lg:text-center">{project.description}</p>

      <h2 className="text-xl font-semibold">Key Features</h2>
      <ul className="mb-4 list-disc pl-6 lg:flex lg:list-none lg:flex-col lg:items-center lg:gap-2">
        {project.keyFeatures.map((feature: string, idx: number) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold">Frontend Technologies</h2>
      <ul className="mb-4 list-disc pl-6 lg:flex lg:list-none lg:flex-col lg:items-center lg:gap-2">
        {project.frontTecnologies.map((tech: string, idx: number) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>

      {project.backendTecnologies && (
        <>
          <h2 className="text-xl font-semibold">Backend Technologies</h2>
          <ul className="list-disc pl-6 lg:flex lg:list-none lg:flex-col lg:items-center lg:gap-2">
            {project.backendTecnologies.map((tech: string, idx: number) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </>
      )}
      {project.name === "Copywriter AI" && (
        <h1 className="text-[14px] my-5 text-center text-red-400">
          Due to free backend hosting, the server may take 1–2 minutes to start
          when you first register or log in. Please be patient!
        </h1>
      )}
      <div className="mt-8 flex flex-col items-center gap-4">
        <h1 className="text-xl font-semibold">Source code:</h1>
        <a
          href={project.github}
          className="font-montserrat cursor-pointer text-center text-[14px] text-blue-500 underline"
          target="_blank"
        >
          {project.github}
        </a>
      </div>
      <div className="mt-8 flex flex-col items-center gap-4">
        <h1 className="text-xl font-semibold">Visit:</h1>
        <a
          href={project.vercel}
          className="font-montserrat cursor-pointer text-center text-[14px] text-blue-500 underline"
          target="_blank"
        >
          {project.vercel}
        </a>
      </div>
    </div>
  );
}
