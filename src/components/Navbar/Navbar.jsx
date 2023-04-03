import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "../NavLink/NavLink";

const Navbar = () => {
  const [routes, setRoutes] = useState([]);

//   by default open value is false 
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetch("navbar.json")
      .then((res) => res.json())
      .then((data) => setRoutes(data));
  }, []);
  return (
    <nav className="p-2 bg-teal-300 ">
        {/* Openr man open hoile close icon dekhabe nahole 3bar dekhabe  */}
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <span>
            {open === true ? 
                <XMarkIcon className="h-6 w-6 text-teal-800" /> 
                : <Bars3Icon className="h-6 w-6 text-teal-800" />
            }
        </span>
      </div>

      <ul className={`md:flex absolute md:static duration-500  bg-teal-300 p-3 ${open ? 'top-8' : '-top-36'}`}>
        {routes.map((route) => (
          <NavLink route={route} key={route.id}></NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
