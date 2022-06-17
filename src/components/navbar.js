import React from "react";
import { Link } from "react-router-dom";
import { Hamburger } from "../icons";
import NavIcons from "./navIcons";

const Navbar = () => {
  return (
    <nav
      className=" relative w-full
  flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <button
          className="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          {/* hamburger Icon */}
          <Hamburger />
        </button>
        {/* navbar */}
        <div className="collapse navbar-collapse flex-grow items-center">
          <Link to={"/#"} className=" flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1">
            <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" style={{ height: 15 }} alt="" loading="lazy" />
          </Link>
          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <li className="nav-item p-2">
              <Link to={"/#"} className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0">
                Dashboard
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link to={"/#"} className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0">
                Team
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link to={"/#"} className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0">
                Projects
              </Link>
            </li>
          </ul>
        </div>
        {/* sideBar */}
        {/* <SideBar /> */}
        {/* Nav Icons */}
        <NavIcons />
      </div>
    </nav>
  );
};

export default Navbar;
