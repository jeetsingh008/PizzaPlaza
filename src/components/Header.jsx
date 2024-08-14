import React from "react";
import { Link, NavLink } from "react-router-dom";
import pizzaIcon from "../assets/pizzaicon.png";
import basketIcon from "../assets/wicker-basket.png";

const Header = () => {
  return (
    <nav className="flex overflow-hidden bg-white min-w-[430px]  justify-between py-2 px-4 max-w-screen-xl m-auto shadow sticky top-0 z-50 items-start">
      <div className="flex justify-center items-center gap-4">
        <img className="w-6 md:w-8 lg:w-10" src={pizzaIcon} alt="" />
        <h1 className="text-sm hidden lg:block lg:text-lg text-orange-600 font-bold">
          Pizza Palace
        </h1>
      </div>
      <ul className="flex justify-center items-center lg:gap-2 text-gray-700 text-base lg:font-semibold cursor-pointer">
        <li>
          <NavLink
            to="home"
            className={({ isActive }) =>
              `block py-2 px-4 hover:text-orange-700 ${
                isActive ? "text-orange-700" : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `block py-2 px-4 hover:text-orange-700 ${
                isActive ? "text-orange-700" : "text-gray-700"
              }`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="catalogue"
            className={({ isActive }) =>
              `block py-2 px-4 hover:text-orange-700 ${
                isActive ? "text-orange-700" : "text-gray-700"
              }`
            }
          >
            Catalogue
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `block py-2 px-4 hover:text-orange-700 ${
                isActive ? "text-orange-700" : "text-gray-700"
              }`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
