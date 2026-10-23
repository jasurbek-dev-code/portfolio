import { useLanguage } from "../language-context";

export default function HeaderMobile() {
  const { t } = useLanguage();

  return (
    <div className="relative flex min-h-[580px] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-zinc-900 to-black px-6 py-16 text-center lg:hidden">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-2xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-400 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          {t("hero.badge")}
        </div>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {t("hero.greeting")}{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            {t("hero.name")}
          </span>
        </h1>

        <p className="mt-2 text-lg font-semibold text-cyan-300">
          {t("hero.role")}
        </p>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-300">
          {t("hero.desc")}
        </p>

        {/* CTA buttons */}
        <div className="mt-6 flex flex-col w-full max-w-xs gap-3">
          <a
            href="#portfolio"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25"
          >
            <i className="fa-solid fa-folder-open"></i>
            {t("hero.btnProjects")}
          </a>
          <a
            href="https://docs.google.com/document/d/1i8kaSPEmKOldGr5kzr9BXawqsRGQKUxF/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/80 px-5 py-2.5 text-sm font-semibold text-white"
          >
            <i className="fa-solid fa-file-pdf text-cyan-400"></i>
            {t("hero.btnResume")}
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex items-center gap-4">
          <a
            href="https://github.com/JasurbekFront-end"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-300"
          >
            <i className="fa-brands fa-github text-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jasurbek-yoqubjonov-96065224a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-300"
          >
            <i className="fa-brands fa-linkedin text-lg"></i>
          </a>
          <a
            href="https://t.me/jasurbek1029"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-300"
          >
            <i className="fa-brands fa-telegram text-lg"></i>
          </a>
          <a
            href="https://wa.me/998972061020"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-300"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
          </a>
          <a
            href="mailto:yoqubjonovjasurbek612@gmail.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-300"
          >
            <i className="fa-solid fa-envelope text-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
