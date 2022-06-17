import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Chat, Pointer, Review, Stacks, Stats, Support, Tasks } from "../icons";
import { selectAllUsers } from "../features/users/usersSlice";

const SideBar = () => {
  const { authUser } = useSelector(selectAllUsers);
  const { firstname, lastname } = authUser.name;
  return (
    <div className="md:block absolute left-0" id="navbarSupportedContent">
      <div className="w-60 h-full shadow-md bg-white">
        <div className="pt-4 pb-2 px-6">
          <Link to={"/#"}>
            <div className="flex items-center">
              <div className="shrink-0">
                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-full w-10" alt="Avatar" />
              </div>
              <div className="grow ml-3">
                <p className="text-sm font-semibold text-blue-600 capitalize">
                  {firstname} {lastname}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <ul className="relative px-1">
          <li className="relative">
            <Link
              to={"/#"}
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary">
              <Review />
              <span>Edit Profile</span>
            </Link>
          </li>
          <li className="relative" id="sidenavSecEx2">
            <Link
              to={"/#"}
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavSecEx2"
              aria-expanded="false"
              aria-controls="collapseSidenavSecEx2">
              <Tasks />
              <span>Tasks</span>
              <Pointer />
            </Link>
            <ul className="relative accordion-collapse collapse" id="collapseSidenavSecEx2" aria-labelledby="sidenavSecEx2" data-bs-parent="#sidenavSecExample">
              <li className="relative">
                <Link
                  to={"/tasks/add"}
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary">
                  All Tasks
                </Link>
              </li>
              <li className="relative">
                <Link
                  to={"/tasks/completed"}
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary">
                  Completed Tasks
                </Link>
              </li>
              <li className="relative">
                <Link
                  to={"/tasks/assign"}
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary">
                  Assign Tasks
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative" id="sidenavSecEx3">
            <Link
              to={"/#"}
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavSecEx3"
              aria-expanded="false"
              aria-controls="collapseSidenavSecEx3">
              <Support />
              <span>Support Tickets</span>
              <Pointer />
            </Link>
            <ul className="relative accordion-collapse collapse" id="collapseSidenavSecEx3" aria-labelledby="sidenavSecEx3" data-bs-parent="#sidenavSecExample">
              <li className="relative">
                <Link
                  to={"/#"}
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary">
                  Link 3
                </Link>
              </li>
              <li className="relative">
                <Link
                  to={"/#"}
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary">
                  Link 4
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <hr className="my-2" />
        <ul className="relative px-1">
          <li className="relative">
            <Link
              to={"/#"}
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary">
              <Stacks />
              <span>All Users</span>
            </Link>
          </li>
          <li className="relative" id="sidenavXxEx2">
            <Link
              to={"/#"}
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavXxEx2"
              aria-expanded="false"
              aria-controls="collapseSidenavXxEx2">
              <Chat />
              <span>Issues</span>
              <Pointer />
            </Link>
            <ul className="relative accordion-collapse collapse" id="collapseSidenavXxEx2" aria-labelledby="sidenavXxEx2" data-bs-parent="#sidenavSecExample">
              <li className="relative">
                <Link
                  to={"/#"}
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary">
                  Link 5
                </Link>
              </li>
              <li className="relative">
                <Link
                  to={"/#"}
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary">
                  Link 6
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative" id="sidenavXxEx3">
            <Link
              to={"/#"}
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavXxEx3"
              aria-expanded="false"
              aria-controls="collapseSidenavXxEx3">
              <Stats />
              <span>Users Activity</span>
              <Pointer />
            </Link>
            <ul className="relative accordion-collapse collapse" id="collapseSidenavXxEx3" aria-labelledby="sidenavXxEx3" data-bs-parent="#sidenavSecExample">
              <li className="relative">
                <Link
                  to={"/#"}
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary">
                  Link 7
                </Link>
              </li>
              <li className="relative">
                <Link
                  to={"/#"}
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary">
                  Link 8
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="text-center relative bottom-0 w-full">
        <hr class="m-0" />
        <p className="py-2 text-sm text-gray-700">Hevons synergy</p>
      </div>
    </div>
  );
};

export default SideBar;
