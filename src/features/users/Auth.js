import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveUser, selectAllUsers, signIn } from "./usersSlice";

const Auth = () => {
  const [values, setValues] = useState({});
  const { status, local } = useSelector(selectAllUsers);
  const [canLog, setCanLog] = useState(false);
  const dispatch = useDispatch();
  const [err, setErr] = useState(false);
  const [noUser, setNoUser] = useState(false);

  const { email, psw } = values;

  const canSave = [email, psw].every(Boolean);
  const regUsers = JSON.parse(localStorage.getItem("allUsers"));

  useEffect(() => {
    status === "successful" || regUsers ? setCanLog(!canLog) : setCanLog(false);
  }, [status]);

  const handleClick = (e) => {
    e.preventDefault();
    const user = regUsers.find((x) => x.password === psw && x.email === email);

    if (canSave && (user || local)) {
      if (local) {
        alert("You are already logged in");
        return;
      } else if (user) {
        dispatch(signIn({ auth: user }));
      } else {
        setNoUser(!noUser);
      }
      setErr(false);
    } else {
      setErr(!err);
    }
  };

  const handlechange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <form>
        <div className="form-group mb-6">
          <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">
            Email address
          </label>
          <input
            type="email"
            name="email"
            onChange={(e) => handlechange(e)}
            className="form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="psw"
            onChange={(e) => handlechange(e)}
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
            id="exampleInputPassword2"
            placeholder="Password"
          />
          {err && <p className="text-xs text-red-600 italic capitalize">credentials not valid...</p>}
          {noUser && <p className="text-xs text-red-600 italic capitalize">no user found, if this is your first time, check you have a working network.</p>}
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck2"
            />
            <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">
              Remember me
            </label>
          </div>
          <a href="#!" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">
            Forgot password?
          </a>
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
          onClick={(e) => handleClick(e)}
          disabled={!canLog}>
          {canLog ? "signin" : "Waiting..."}
        </button>
        <p className="text-gray-800 mt-6 text-center">
          Not a member?{" "}
          <Link to={"/users/register"} className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Auth;
