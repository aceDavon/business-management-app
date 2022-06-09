import { Link } from "react-router-dom";
import { Bell, Hamburger } from "../../icons";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../features/users/usersSlice";
import { useEffect, useState } from "react";
import Logo from "../../img/logo.png";

const Navbar = () => {
  const { authUser, isLoggedIn } = useSelector(selectAllUsers);
  const [username, setusername] = useState("");

  useEffect(() => {
    isLoggedIn ? setusername(authUser.username) : setusername("");
  }, [isLoggedIn]);

  return (
    <nav className=" relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <button
          className=" navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <Hamburger />
        </button>
        <div className="collapse navbar-collapse flex-grow items-center">
          <Link to={"/#"} className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1">
            <img src={Logo} style={{ height: 15 }} alt="" loading="lazy" />
          </Link>
          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <li className="nav-item p-2">
              <Link to={"/#"} className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">
                Dashboard
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link to={"/#"} className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">
                Issues
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link to={"/#"} className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">
                Tasks
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center relative">
          <div className="dropdown relative">
            <Link
              to={"/#"}
              className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 dropdown-toggle hidden-arrow flex items-center "
              id="dropdownMenuButton1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <Bell />
              <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">1</span>
            </Link>
            <ul
              className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0 "
              aria-labelledby="dropdownMenuButton1">
              <li>
                <Link
                  to={"/#"}
                  className="dropdown-item text-sm py-2 px-4 font-normal  block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                  Support tickets
                </Link>
              </li>
              <li>
                <Link
                  to={"/#"}
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                  My Reviews
                </Link>
              </li>
              <li>
                <Link
                  to={"/#"}
                  className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 ">
                  My Tasks
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
              aria-expanded="false">
              <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-full" style={{ height: 25, width: 25 }} alt="" loading="lazy" />
            </Link>
            <ul
              className=" dropdown-menu min-w-max absolute bg-white text-base z-50 float-lef py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding  border-none left-auto right-0 "
              aria-labelledby="dropdownMenuButton2">
              <li className=" dropdown-item text-sm py-2 px-4 active text-white block w-full whitespace-nowrap bg-transparent hover:bg-gray-100 capitalize font-semibold">
                {isLoggedIn ? username : ""}
              </li>
              <li>
                <Link
                  to={"/#"}
                  className="dropdown-item text-sm py-2 px-4 font-normal block  w-full whitespace-nowrap  bg-transparent  text-gray-700 hover:bg-gray-100 ">
                  Edit Profile
                </Link>
              </li>
              <li>
                <Link
                  to={"/#"}
                  className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 ">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
