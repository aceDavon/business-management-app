import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import { selectAllUsers } from "../features/users/usersSlice";
import { useSelector } from "react-redux";

const Layout = () => {
  const { isLoggedIn, admin } = useSelector(selectAllUsers);

  const dashboard = [isLoggedIn, admin].every(Boolean);
  return (
    <>
      {dashboard && <Navbar />}
      <div className="w-full flex gap-10">
        <div className={dashboard ? "w-9/12 ml-auto" : "w-full px-6"}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
