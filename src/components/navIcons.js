import React from "react";
import { Link } from "react-router-dom";
import { Bell, Cart } from "../icons";

const NavIcons = () => {
  return (
    <div className="flex items-center relative">
      <Link
        to={"/#"}
        className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4"
      >
        {/* cart icon */}
        <Cart />
      </Link>
      <div className="dropdown relative">
        <Link
          to={"/#"}
          className="
          text-gray-500
          hover:text-gray-700
          focus:text-gray-700
          mr-4
          dropdown-toggle
          hidden-arrow
          flex items-center
        "
          id="dropdownMenuButton1"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {/* notification icon */}
          <Bell />
          <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
            1
          </span>
        </Link>
        <ul
          className="
      dropdown-menu
      min-w-max
      absolute
      bg-white
      text-base
      z-50
      float-left
      py-2
      list-none
      text-left
      rounded-lg
      shadow-lg
      mt-1
      hidden
      m-0
      bg-clip-padding
      border-none
      left-auto
      right-0
    "
          aria-labelledby="dropdownMenuButton1"
        >
          <li>
            <Link
              to={"/#"}
              className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        "
            >
              Action
            </Link>
          </li>
          <li>
            <Link
              to={"/#"}
              className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        "
            >
              Another action
            </Link>
          </li>
          <li>
            <Link
              to={"/#"}
              className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        "
            >
              Something else here
            </Link>
          </li>
        </ul>
      </div>
      <div className="dropdown relative">
        <Link
          to={"/#"}
          className="dropdown-toggle flex items-center hidden-arrow"
          id="dropdownMenuButton2"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbootstrap.com/img/new/avatars/2.jpg"
            className="rounded-full"
            style={{ height: 25, width: 25 }}
            alt=""
            loading="lazy"
          />
        </Link>
        <ul
          className="
    dropdown-menu
    min-w-max
    absolute
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    hidden
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-0
  "
          aria-labelledby="dropdownMenuButton2"
        >
          <li>
            <Link
              to={"/#"}
              className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
            >
              Action
            </Link>
          </li>
          <li>
            <Link
              to={"/#"}
              className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
            >
              Another action
            </Link>
          </li>
          <li>
            <Link
              to={"/#"}
              className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
            >
              Something else here
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavIcons;
