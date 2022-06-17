import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTask, selectAllTasks } from "../../features/tasks/tasksSlice";
import { addTask, assignTask, selectAllUsers } from "../../features/users/usersSlice";

const TasksCard = ({ admins }) => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const { tasks } = useSelector(selectAllTasks);
  const { allUsers } = useSelector(selectAllUsers);

  const handleClick = (data) => {
    const id = parseInt(userId);
    const taskCheck = JSON.parse(localStorage.getItem("allUsers"));
    taskCheck.map((x) => {
      return taskCheck ? (x.id === id && x?.tasks ? dispatch(addTask({ id, taskData: data })) : dispatch(assignTask({ id, taskData: data }))) : null;
    });
    console.log(userId);
  };

  return (
    <div className="flex flex-col h-96">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 relative">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    #
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Title
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Description
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Status
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Priority
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Due Date
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Category
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Assign User
                  </th>
                </tr>
              </thead>
              <tbody>
                {tasks.length > 0 ? (
                  tasks.map((x) => {
                    return (
                      <tr className="bg-gray-100 border-b" key={x.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{x.id}</td>
                        <td className="text-sm text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {x.title}
                          {admins ? (
                            <div className="flex flex-col gap-2 py-2">
                              <button className="btn btn-link cursor-pointer text-xs" type="button" onClick={() => dispatch(completeTask({ id: x.id }))}>
                                Mark Task complete
                              </button>
                            </div>
                          ) : (
                            <span className="block mt-2">view Description</span>
                          )}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{x.description}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <span
                            className={
                              x.status === "pending"
                                ? "bg-yellow-600 text-white hover:brightness-125 text-sm font-light text-center p-1 rounded-xl whitespace-nowrap"
                                : x.status === "accepted"
                                ? "bg-green-400 text-white hover:brightness-125 text-sm font-light text-center p-1 rounded-xl whitespace-nowrap"
                                : "text-sm text-gray-900 font-light text-center p-1 rounded-xl whitespace-nowrap"
                            }>
                            {x.status}
                          </span>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{x.priority}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{x.date.days}days </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{x.category}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {
                            <div className="form-group mb-6">
                              <select
                                className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-label=".form-select-sm example"
                                onChange={(e) => setUserId(e.target.value)}>
                                <option selected value="">
                                  Select
                                </option>
                                {allUsers.map((y) => {
                                  return (
                                    <option value={y.id} key={y.id}>
                                      {y.username}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          }
                          <button className="btn bg-blue-400 rounded-full text-white text-xs p-1" onClick={() => handleClick(x)}>
                            Assign
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <p className="text-center font-bold">No tasks here yet...</p>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksCard;
