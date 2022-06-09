import Navbar from "../components/authUsers/navbar";
import AuthSideBar from "../components/authUsers/sideBar";

const Welcome = (props) => {
  const [isLoggedIn, username] = props.user;
  const Issues = props.issues;

  return (
    <div className="container h-screen relative bottom-4">
      <Navbar />
      <div className="flex w-full h-screen gap-4">
        <AuthSideBar />
        <div className="w-full mx-auto p-4">
          <p className="font-bold text-7xl capitalize">Welcome {isLoggedIn ? username : ""}</p>
          <div className="w-full flex flex-wrap justify-center md:justify-end gap-4 py-4">
            <div className="rounded-lg w-48 lg:w-60 bg-green-300 shadow-md shadow-gray-400 py-10">
              <p className="text-lg font-semibold text-white text-center">Tasks Assigned</p>
              <p className="text-sm font-light text-white text-center">324</p>
            </div>
            <div className="rounded-lg w-48 lg:w-60 bg-blue-300 shadow-md shadow-gray-400 py-10">
              <p className="text-lg font-semibold text-white text-center">Total Issues</p>
              <p className="text-sm font-light text-white text-center">324</p>
            </div>
            <div className="rounded-lg w-48 lg:w-60 bg-orange-300 shadow-md shadow-gray-400 py-10">
              <p className="text-lg font-semibold text-white text-center">Resolved Issues</p>
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
                          Title
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Description
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Issues.length > 0 ? (
                        Issues.map((x) => {
                          return (
                            <tr class="bg-gray-100 border-b" key={x.date}>
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{x.title}</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{x.description}</td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <span className="rounded-lg bg-green-400 text-xs text-white p-2">pending</span>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <p className="font-semibold text-lg text-center w-full">No Issues added yet, Please add Issues to track here</p>
                      )}
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

export default Welcome;
