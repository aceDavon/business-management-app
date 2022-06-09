import { Link } from "react-router-dom";
import { Pointer, Review, Support, Tasks } from "../../icons";

const AuthSideBar = () => {
  return (
    <div class="collapse w-64 h-full shadow-md bg-white px-1 mb-4" id="navbarSupportedContent">
      <ul class="relative">
        <li class="relative" id="sidenavEx1">
          <Link
            to={"/#"}
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavEx1"
            aria-expanded="true"
            aria-controls="collapseSidenavEx1">
            <Review />
            <span>My Reviews</span>
            <Pointer />
          </Link>
          <ul class="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
            <li class="relative">
              <Link
                to={"/#"}
                href="#!"
                class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark">
                Resolved
              </Link>
            </li>
            <li class="relative">
              <Link
                to={"/#"}
                href="#!"
                class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark">
                Unresolved
              </Link>
            </li>

            <li class="relative">
              <Link
                to={"/#"}
                href="#!"
                class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark">
                Add New Issue
              </Link>
            </li>
          </ul>
        </li>
        <li class="relative" id="sidenavEx2">
          <Link
            to={"/#"}
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavEx2"
            aria-expanded="false"
            aria-controls="collapseSidenavEx2">
            <Tasks />
            <span> My Tasks</span>
            <Pointer />
          </Link>
          <ul class="relative accordion-collapse collapse" id="collapseSidenavEx2" aria-labelledby="sidenavEx2" data-bs-parent="#sidenavExample">
            <li class="relative">
              <Link
                to={"/#"}
                href="#!"
                class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark">
                Accepted
              </Link>
            </li>
            <li class="relative">
              <Link
                to={"/#"}
                href="#!"
                class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark">
                Pending
              </Link>
            </li>
            <li class="relative">
              <Link
                to={"/#"}
                href="#!"
                class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark">
                Completed
              </Link>
            </li>
          </ul>
        </li>
        <li class="relative" id="sidenavEx3">
          <Link
            to={"/#"}
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavEx3"
            aria-expanded="false"
            aria-controls="collapseSidenavEx3">
            <Support />
            <span>Support</span>
            <Pointer />
          </Link>
          <ul class="relative accordion-collapse collapse" id="collapseSidenavEx3" aria-labelledby="sidenavEx3" data-bs-parent="#sidenavExample">
            <li class="relative">
              <Link
                to={"/#"}
                href="#!"
                class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark">
                My Tickets
              </Link>
            </li>
            <li class="relative">
              <Link
                to={"/#"}
                href="#!"
                class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark">
                Resolved Tickets
              </Link>
            </li>
            <li class="relative">
              <Link
                to={"/#"}
                href="#!"
                class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark">
                Open a Ticket
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AuthSideBar;
