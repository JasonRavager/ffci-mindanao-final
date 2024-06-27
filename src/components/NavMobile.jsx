import { Divide as Hamburger } from "hamburger-react";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useClickAway } from "react-use";
import routes from "../routes";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className="lg:hidden">
      <Hamburger
        color="#005413"
        toggled={isOpen}
        toggle={setIsOpen}
        size={20}
      />
      {isOpen && (
        <div className="fixed left-0 right-0 p-5 pt-0 pr-12">
          <ul className="grid gap-2 justify-end text-right">
            {routes.map((route) => {
              return (
                <li key={route.label} className="w-full">
                  <NavLink
                    to={route.path}
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    {route.label}
                  </NavLink>
                </li>
              );
            })}
            <li className="w-full">Sow A Seed</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
