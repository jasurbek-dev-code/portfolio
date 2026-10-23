import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/close.svg";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage, type Language } from "../language-context";

export default function NavbarMobile() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const handleNavClick = (id: string) => {
    setIsModalOpen(false);
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
    <div>
      <div className="fixed top-0 left-0 z-30 flex h-14 w-full items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-4 backdrop-blur-md lg:hidden">
        <div
          onClick={() => {
            navigate("/");
            setIsModalOpen(false);
          }}
          className="flex cursor-pointer items-center gap-2"
        >
          <img src={logo} alt="Logo" className="h-6 w-auto" />
          <span className="font-montserrat text-xs font-semibold tracking-wider text-white uppercase">
            Jasurbek<span className="text-cyan-400">.dev</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick mobile language pill */}
          <div className="flex items-center rounded-md border border-zinc-800 bg-zinc-900 p-0.5 text-xs">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`rounded px-1.5 py-0.5 font-semibold text-[11px] transition-all ${
                  lang === l.code
                    ? "bg-cyan-500 text-black"
                    : "text-zinc-400"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            aria-label="Toggle navigation menu"
            className="p-1.5 text-zinc-300"
          >
            <img
              src={isModalOpen ? close : hamburger}
              alt="Menu"
              className="h-5 w-5 invert"
            />
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`fixed left-0 z-20 flex w-full flex-col border-b border-zinc-800 bg-zinc-950/95 px-6 py-4 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isModalOpen ? "top-14 opacity-100" : "-top-96 opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => handleNavClick("about")}
          className="py-2.5 text-left text-sm font-medium text-zinc-200 transition-colors hover:text-cyan-400"
        >
          {t("nav.about")}
        </button>
        <button
          onClick={() => handleNavClick("experience")}
          className="py-2.5 text-left text-sm font-medium text-zinc-200 transition-colors hover:text-cyan-400"
        >
          {t("nav.experience")}
        </button>
        <button
          onClick={() => handleNavClick("education")}
          className="py-2.5 text-left text-sm font-medium text-zinc-200 transition-colors hover:text-cyan-400"
        >
          {t("nav.education")}
        </button>
        <button
          onClick={() => handleNavClick("skills")}
          className="py-2.5 text-left text-sm font-medium text-zinc-200 transition-colors hover:text-cyan-400"
        >
          {t("nav.skills")}
        </button>
        <button
          onClick={() => handleNavClick("portfolio")}
          className="py-2.5 text-left text-sm font-medium text-zinc-200 transition-colors hover:text-cyan-400"
        >
          {t("nav.projects")}
        </button>
        <button
          onClick={() => handleNavClick("certifications")}
          className="py-2.5 text-left text-sm font-medium text-zinc-200 transition-colors hover:text-cyan-400"
        >
          {t("nav.certificates")}
        </button>
        <button
          onClick={() => handleNavClick("contact")}
          className="py-2.5 text-left text-sm font-medium text-zinc-200 transition-colors hover:text-cyan-400"
        >
          {t("nav.contact")}
        </button>

        <a
          href="https://docs.google.com/document/d/1i8kaSPEmKOldGr5kzr9BXawqsRGQKUxF/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-cyan-500/20 py-2.5 text-xs font-semibold text-cyan-300"
        >
          <i className="fa-solid fa-file-pdf"></i>
          {t("nav.resume")}
        </a>
      </div>
    </div>
  );
}
