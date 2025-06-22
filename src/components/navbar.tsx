import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="fixed top-0 left-0 z-20 hidden h-[57px] w-full items-center justify-between bg-black px-5 lg:flex pr-10">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-10">
          <h1 className="text-white font-montserrat cursor-pointer">About me</h1>
          <h1 className="text-white font-montserrat cursor-pointer">Skills</h1>
          <h1 className="text-white font-montserrat cursor-pointer">Portfolio</h1>
        </div>
      </div>
    </div>
  );
}
