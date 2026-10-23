import { useLanguage } from "../language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="border-t border-zinc-800 bg-zinc-950 py-12 text-zinc-400">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Col 1 */}
          <div>
            <h3 className="font-montserrat text-lg font-bold text-white">
              Jasurbek Yoqubjonov
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              {t("footer.desc")}
            </p>
            <p className="mt-4 text-xs text-zinc-500">
              📍 Shayxontohur, Tashkent, Uzbekistan
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-2.5 text-sm">
            <h4 className="font-montserrat text-sm font-semibold tracking-wider text-zinc-200 uppercase">
              {t("footer.touch")}
            </h4>
            <a
              href="mailto:yoqubjonovjasurbek612@gmail.com"
              className="inline-flex items-center gap-2 text-zinc-300 transition-colors hover:text-cyan-400"
            >
              <i className="fa-solid fa-envelope text-cyan-400"></i>
              yoqubjonovjasurbek612@gmail.com
            </a>
            <a
              href="tel:+998972061020"
              className="inline-flex items-center gap-2 text-zinc-300 transition-colors hover:text-cyan-400"
            >
              <i className="fa-solid fa-phone text-cyan-400"></i>
              +998 97 206 10 20
            </a>
            <a
              href="https://docs.google.com/document/d/1i8kaSPEmKOldGr5kzr9BXawqsRGQKUxF/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 transition-colors hover:underline"
            >
              <i className="fa-solid fa-file-lines"></i>
              Google Docs {t("nav.resume")}
            </a>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-montserrat text-sm font-semibold tracking-wider text-zinc-200 uppercase">
              {t("footer.connect")}
            </h4>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://github.com/JasurbekFront-end"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 transition-all hover:border-cyan-400 hover:text-cyan-400"
              >
                <i className="fa-brands fa-github text-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/jasurbek-yoqubjonov-96065224a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 transition-all hover:border-cyan-400 hover:text-cyan-400"
              >
                <i className="fa-brands fa-linkedin text-lg"></i>
              </a>
              <a
                href="https://t.me/jasurbek1029"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 transition-all hover:border-cyan-400 hover:text-cyan-400"
              >
                <i className="fa-brands fa-telegram text-lg"></i>
              </a>
              <a
                href="https://wa.me/998972061020"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 transition-all hover:border-cyan-400 hover:text-cyan-400"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800/80 pt-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Jasurbek Yoqubjonov. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
