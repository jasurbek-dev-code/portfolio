import { Outlet } from "react-router-dom";
import NavbarMobile from "../components/navbar-mobile";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Layout() {

  return (
    <>
      <NavbarMobile/>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  );
}
