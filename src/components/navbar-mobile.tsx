import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/close.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function NavbarMobile() {
  const navigate=useNavigate()

  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <div>
      <div className="fixed top-0 left-0 z-20 flex h-[57px] w-full items-center justify-between bg-black px-5 lg:hidden">
        <div onClick={()=>navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <div>
          <img
            src={isModalOpen ? close : hamburger}
            onClick={() => setisModalOpen(!isModalOpen)}
          />
        </div>
      </div>
      <ModalNavbarMobile isModalOpen={isModalOpen} />
    </div>
  );
}
interface ModalNavbarMobileProps {
  isModalOpen: boolean;
}
export function ModalNavbarMobile({ isModalOpen }: ModalNavbarMobileProps) {
  return (
    <div
      className={`fixed left-0 z-10 flex h-[180px] w-full flex-col bg-black/70 transition-all duration-300 ${isModalOpen ? "top-[56px]" : "-top-[100%]"}`}
    >
      <div className="flex w-full flex-1 items-center justify-center">
        <h1 className="font-montserrat text-white">About me</h1>
      </div>
      <div className="flex w-full flex-1 items-center justify-center">
        <h1 className="font-montserrat text-white">Skills</h1>
      </div>
      <div className="flex w-full flex-1 items-center justify-center">
        <h1 className="font-montserrat text-white">Portfolio</h1>
      </div>
    </div>
  );
}
