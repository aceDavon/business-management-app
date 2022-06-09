import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../components/authUsers/navbar";
import { addIssue } from "./issuesSlice";

const IssueContainer = ({ authUser, isLoggedIn }) => {
  const [values, setValues] = useState({});
  const dispatch = useDispatch();
  const [err, setErr] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const { title, description } = values;

  const canSave = [title, description].every(Boolean);

  const handleClick = () => {
    canSave ? dispatch(addIssue(values)) : setErr(!err);
  };
  return (
    <>
      <Navbar />
      <div className="block p-6 mx-auto my-4 rounded-lg shadow-lg bg-white max-w-md">
        <p className="text-3xl font-bold text-center">Add issues to the system below</p>
        <form className="my-2">
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Issue Name"
              name="title"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="describe the issue"
              name="description"
              onChange={(e) => handleChange(e)}></textarea>
          </div>
          <button
            type="button"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            onClick={() => handleClick()}>
            Submit
          </button>
        </form>
        <Link to={"../../"}>Home</Link>
      </div>
    </>
  );
};

export default IssueContainer;
