import { useLanguage } from "../language-context";

export default function Header() {
  const { t } = useLanguage();

  return (
    <div className="relative hidden min-h-[640px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-zinc-900 to-black px-8 py-20 lg:flex">
      {/* Decorative gradient glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[480px] w-[480px] rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          {t("hero.badge")}
        </div>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {t("hero.greeting")}{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            {t("hero.name")}
          </span>
        </h1>

        <p className="mt-4 text-xl font-medium text-cyan-300 sm:text-2xl">
          {t("hero.role")}
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          {t("hero.desc")}
        </p>

        {/* Quick info badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-400">
          <span className="inline-flex items-center gap-1.5">
            <i className="fa-solid fa-location-dot text-cyan-400"></i>
            {t("hero.location")}
          </span>
          <span className="hidden text-zinc-600 sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5">
            <i className="fa-solid fa-building text-cyan-400"></i>
            {t("hero.workBadge")}
          </span>
          <span className="hidden text-zinc-600 sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5">
            <i className="fa-solid fa-certificate text-cyan-400"></i>
            {t("hero.certBadge")}
          </span>
        </div>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
          >
            <i className="fa-solid fa-folder-open mr-2"></i>
            {t("hero.btnProjects")}
          </a>
          <a
            href="https://docs.google.com/document/d/1i8kaSPEmKOldGr5kzr9BXawqsRGQKUxF/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-zinc-700 bg-zinc-900/80 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-zinc-800"
          >
            <i className="fa-solid fa-file-pdf mr-2 text-cyan-400"></i>
            {t("hero.btnResume")}
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-zinc-700 bg-zinc-900/80 px-6 py-3 text-sm font-semibold text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-zinc-500 hover:text-white"
          >
            {t("hero.btnContact")}
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex items-center gap-5">
          <a
            href="https://github.com/JasurbekFront-end"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
          >
            <i className="fa-brands fa-github text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jasurbek-yoqubjonov-96065224a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
          >
            <i className="fa-brands fa-linkedin text-xl"></i>
          </a>
          <a
            href="https://t.me/jasurbek1029"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
          >
            <i className="fa-brands fa-telegram text-xl"></i>
          </a>
          <a
            href="https://wa.me/998972061020"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i>
          </a>
          <a
            href="mailto:yoqubjonovjasurbek612@gmail.com"
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
          >
            <i className="fa-solid fa-envelope text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
