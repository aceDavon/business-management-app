import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTask, createCategory, selectAllTasks } from "./tasksSlice";

const TasksContainer = (props) => {
  const [values, setValues] = useState({});
  const [err, setErr] = useState(false);
  const [group, setGroup] = useState([]);
  const dispatch = useDispatch();
  const [authUser, admin] = props.user;
  const username = authUser.username;
  const { categories } = useSelector(selectAllTasks);

  useEffect(() => {
    setGroup(categories);
  }, [categories]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const { title, description, priority, category, date } = values;
  const canSave = [title, description, priority, category, date].every(Boolean);

  const handleClick = () => {
    if (canSave) {
      const isoDate = new Date(date);
      dispatch(addTask(title, description, priority, category, isoDate));
      return;
    }
    setErr(!err);
  };
  return (
    <div className="block p-6 mx-auto my-4 rounded-lg shadow-lg bg-white max-w-md">
      {admin ? <CreateCategory user={username} /> : null}
      <p className="text-3xl font-bold text-center">Add tasks to the system below</p>
      <form className="my-2">
        <div className="form-group mb-6">
          <input
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput7"
            placeholder="Task Name"
            name="title"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="text"
            className=" form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="describe the task"
            name="description"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group mb-6">
          <select
            className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label=".form-select-sm example"
            name="category"
            onChange={(e) => handleChange(e)}>
            <option selected value="">
              Select category
            </option>
            {group.map((x) => {
              return (
                <option key={x.id} value={x.title} className="capitalize">
                  {x.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group mb-6">
          <select
            className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label=".form-select-sm example"
            name="priority"
            onChange={(e) => handleChange(e)}>
            <option selected value="">
              Select priority
            </option>
            <option value="default">Default</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="form-group mb-6">
          <input
            type="date"
            className=" form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Task deadline"
            name="date"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {err && <span className="text-xs text-red-600 italic">Please be sure to fill all fields</span>}
        <button
          type="button"
          className="  w-full  px-6 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition  duration-150 ease-in-out"
          onClick={() => handleClick()}>
          Submit
        </button>
      </form>
      <Link to={"../../"}>Home</Link> <Link to={"../view_all"}>All Tasks</Link>
    </div>
  );
};

const CreateCategory = (props) => {
  const [values, setValues] = useState({});
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  const user = props.user;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const { title, description } = values;
  const canSave = [title, description].every(Boolean);
  const handleClick = () => {
    if (canSave) {
      dispatch(createCategory(title, description, user));
      return;
    }
    setErr(!err);
  };
  return (
    <div className="block p-6 mx-auto my-4 rounded-lg shadow-lg bg-white max-w-md">
      <p className="text-3xl font-bold text-center">Add tasks to the system below</p>
      <form className="my-2">
        <div className="form-group mb-6">
          <input
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput7"
            placeholder="Task Name"
            name="title"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="text"
            className=" form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="describe the task"
            name="description"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {err && <span className="text-xs text-red-600 italic">Please be sure to fill all fields</span>}
        <button
          type="button"
          className="  w-full  px-6 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition  duration-150 ease-in-out"
          onClick={() => handleClick()}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default TasksContainer;
