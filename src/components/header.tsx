import me from "../assets/me.jpg";

export default function Header() {
  return (
    <div className="relative hidden h-[700px] w-full justify-between bg-gray-200 lg:flex">
      <div className="flex flex-col justify-center pl-30">
        <h1 className="font-montserrat text-[35px]">Hi, I am</h1>
        <h1 className="font-advent-pro text-[55px] font-bold">
          Yoqubjonov Jasurbek
        </h1>
        <p className="font-open-sans text-[20px] font-[600] text-gray-500">
          Frontend Developer
        </p>
        <div className="mt-10 flex items-center gap-10">
          <a
            href="https://t.me/jasurbek1029"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[30px] text-black hover:scale-95 transition-all duration-300"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a
            href="https://github.com/JasurbekFront-end"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[30px] text-black hover:scale-95 transition-all duration-300"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jasurbek-yoqubjonov-96065224a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[30px] -bltext-black hover:scale-95 transition-all duration-300"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://wa.me/998972061020"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[30px] -bltext-black hover:scale-95 transition-all duration-300"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div className="flex h-full w-[55%] items-center justify-center bg-black">
        <div className="w-[70%]">
          <img src={me} className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
