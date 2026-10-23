import logo from "../assets/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage, type Language } from "../language-context";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const handleNavClick = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "uz", label: "UZ" },
    { code: "ru", label: "RU" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-30 hidden h-16 w-full items-center justify-between border-b border-zinc-800/80 bg-zinc-950/80 px-8 backdrop-blur-md lg:flex">
      <div
        onClick={() => navigate("/")}
        className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80"
      >
        <img src={logo} alt="Logo" className="h-7 w-auto" />
        <span className="font-montserrat text-sm font-semibold tracking-wider text-white uppercase">
          Jasurbek<span className="text-cyan-400">.dev</span>
        </span>
      </div>

      <div className="flex items-center gap-7 text-sm font-medium text-zinc-300">
        <button
          onClick={() => handleNavClick("about")}
          className="cursor-pointer transition-colors hover:text-cyan-400"
        >
          {t("nav.about")}
        </button>
        <button
          onClick={() => handleNavClick("experience")}
          className="cursor-pointer transition-colors hover:text-cyan-400"
        >
          {t("nav.experience")}
        </button>
        <button
          onClick={() => handleNavClick("education")}
          className="cursor-pointer transition-colors hover:text-cyan-400"
        >
          {t("nav.education")}
        </button>
        <button
          onClick={() => handleNavClick("skills")}
          className="cursor-pointer transition-colors hover:text-cyan-400"
        >
          {t("nav.skills")}
        </button>
        <button
          onClick={() => handleNavClick("portfolio")}
          className="cursor-pointer transition-colors hover:text-cyan-400"
        >
          {t("nav.projects")}
        </button>
        <button
          onClick={() => handleNavClick("certifications")}
          className="cursor-pointer transition-colors hover:text-cyan-400"
        >
          {t("nav.certificates")}
        </button>
        <button
          onClick={() => handleNavClick("contact")}
          className="cursor-pointer transition-colors hover:text-cyan-400"
        >
          {t("nav.contact")}
        </button>

        {/* Language Switcher */}
        <div className="flex items-center rounded-lg border border-zinc-800 bg-zinc-900/90 p-1 text-xs">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`rounded-md px-2.5 py-1 font-semibold transition-all ${
                lang === l.code
                  ? "bg-cyan-500 text-black shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <a
          href="https://docs.google.com/document/d/1i8kaSPEmKOldGr5kzr9BXawqsRGQKUxF/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300 transition-all hover:border-cyan-400 hover:bg-cyan-500/20"
        >
          <i className="fa-solid fa-file-pdf"></i>
          {t("nav.resume")}
        </a>
      </div>
    </nav>
  );
}
