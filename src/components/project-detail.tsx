import { useLocation, Link } from "react-router-dom";
import type { Project } from "../pages/home/home";
import { useLanguage } from "../language-context";

export default function ProjectDetail() {
  const location = useLocation();
  const { t } = useLanguage();
  const project = location.state?.project as Project;

  if (!project) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-zinc-950 px-4 text-center">
        <h1 className="text-2xl font-bold text-white">
          {t("detail.notFound")}
        </h1>
        <p className="mt-2 text-zinc-400">{t("detail.notFoundDesc")}</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:bg-cyan-400"
        >
          <i className="fa-solid fa-arrow-left"></i>
          {t("detail.backHome")}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-20 text-zinc-200">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          to="/#portfolio"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-cyan-400"
        >
          <i className="fa-solid fa-arrow-left"></i>
          {t("detail.back")}
        </Link>

        {/* Project Image */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
          <img
            src={project.img}
            alt={project.name}
            className="h-[280px] w-full object-cover sm:h-[400px]"
          />
        </div>

        {/* Title & Actions */}
        <div className="mt-8 flex flex-col justify-between gap-4 border-b border-zinc-800 pb-8 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
              {project.name}
            </h1>
            <p className="mt-1 text-sm text-cyan-400">
              {t(project.projectTypeKey ?? "detail.type")}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.vercel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              {t("projects.btnLive")}
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-all hover:border-cyan-400 hover:text-white"
            >
              <i className="fa-brands fa-github text-base"></i>
              {project.backendGithub
                ? t("projects.btnFrontend")
                : t("projects.btnSource")}
            </a>
            {project.backendGithub && (
              <a
                href={project.backendGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-all hover:border-cyan-400 hover:text-white"
              >
                <i className="fa-brands fa-github text-base"></i>
                {t("projects.btnBackend")}
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6">
          <h2 className="text-lg font-bold text-white">{t("detail.about")}</h2>
          <p className="mt-3 leading-relaxed text-zinc-300">
            {t(project.descriptionKey)}
          </p>
        </div>

        {/* Key Features */}
        <div className="mt-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6">
          <h2 className="text-lg font-bold text-white">
            {t("detail.features")}
          </h2>
          <ul className="mt-4 space-y-3">
            {project.keyFeatureKeys.map((featureKey: string, idx: number) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-zinc-300"
              >
                <i className="fa-solid fa-circle-check mt-1 text-cyan-400"></i>
                <span>{t(featureKey)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6">
          <h2 className="text-lg font-bold text-white">{t("detail.tech")}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.frontTecnologies.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="rounded-lg border border-zinc-700 bg-zinc-800/80 px-3 py-1.5 text-xs font-medium text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
