import { NavLink } from "react-router-dom";
import logo from "../assets/images/FFCI Phil Logo.jpg";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const NavBar = () => {
  return (
    <div className="max-w-7xl mx-auto py-4 pl-6 pr-4 sm:px-8">
      <div className="flex flex-1 justify-between items-center font-poppins py-1">
        <NavLink to="/" className="flex items-center flex-shrink-0 mr-4">
          <img className="h-12 w-auto" src={logo} alt="FFCI Phil Logo" />
          <span className="hidden sm:block text-2xl ml-2 font-gloock">
            FFCI-Mindanao
          </span>
        </NavLink>
        <NavMobile />
        <NavDesktop />
      </div>
    </div>
  );
};

export default NavBar;
