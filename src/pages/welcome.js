import Navbar from "../components/authUsers/navbar";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  const [isLoggedIn, username] = props.user;

  return (
    <div className="container h-screen">
      <Navbar />
      <div className="flex w-full h-screen gap-4">
        <SideBar />
        <div className="w-full mx-auto p-4">
          <p className="font-bold text-7xl capitalize">Welcome {isLoggedIn ? username : ""}</p>
          <div className="w-full flex flex-wrap justify-center md:justify-end gap-4 py-4">
            <div className="rounded-lg w-48 lg:w-60 bg-green-300 shadow-md shadow-gray-400 py-10">
              <p className="text-lg font-semibold text-white text-center">Total Issues</p>
              <p className="text-sm font-light text-white text-center">324</p>
            </div>
            <div className="rounded-lg w-48 lg:w-60 bg-blue-300 shadow-md shadow-gray-400 py-10">
              <p className="text-lg font-semibold text-white text-center">Total Issues</p>
              <p className="text-sm font-light text-white text-center">324</p>
            </div>
            <div className="rounded-lg w-48 lg:w-60 bg-orange-300 shadow-md shadow-gray-400 py-10">
              <p className="text-lg font-semibold text-white text-center">Total Issues</p>
              <p className="text-sm font-light text-white text-center">324</p>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="bg-white border-b">
                      <tr>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          #
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          First
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Last
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-gray-100 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Mark</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Otto</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                      </tr>
                      <tr class="bg-white border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Jacob</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Thornton</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@fat</td>
                      </tr>
                      <tr class="bg-gray-100 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Thornton</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Thornton</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SideBar = () => {
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
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
            </svg>
            <span>My Reviews</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
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
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512">
              <path
                fill="currentColor"
                d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
            </svg>
            <span> My Tasks</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
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
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path>
            </svg>
            <span>Support</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
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

export default Welcome;
