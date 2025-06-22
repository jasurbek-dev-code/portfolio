export default function HeaderMobile() {
  return (
    <div>
      <div className="header-bg flex h-[700px] w-full flex-col items-center lg:hidden">
        <h1 className="font-advent-pro mt-[251px] text-[25px] text-white">
          My name is Jasurbek
        </h1>
        <h1 className="font-montserrat text-[32px] font-semibold text-white">
          I’M A DEVELOPER
        </h1>
        <div className="mt-36px flex items-center gap-[32px]">
          <a
            href="https://t.me/jasurbek1029"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[30px] text-white"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a
            href="https://github.com/JasurbekFront-end"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[30px] text-white"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jasurbek-yoqubjonov-96065224a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[30px] text-white"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
           href="https://wa.me/998972061020"
           target="_blank"
            rel="noopener noreferrer"
            className="text-[30px] text-white"
          >
           <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
