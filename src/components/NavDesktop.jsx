import { NavLink } from "react-router-dom";
import routes from "../routes";

const NavDesktop = () => {
  return (
    <ul className="lg:flex hidden lg:items-center">
      {routes.map((route) => {
        const { path, label } = route;
        return (
          <li key={path} className="px-4">
            <NavLink to={path}>{label}</NavLink>
          </li>
        );
      })}
      <li className="rounded-md border py-2 px-4 border-primary">Sow A Seed</li>
    </ul>
  );
};

export default NavDesktop;
