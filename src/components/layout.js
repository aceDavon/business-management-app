import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import { selectAllUsers } from "../features/users/usersSlice";
import { useSelector } from "react-redux";
import Footer from "./footer";

const Layout = () => {
  const { isLoggedIn, admin } = useSelector(selectAllUsers);

  const dashboard = [isLoggedIn, admin].every(Boolean);
  return (
    <>
      {dashboard && <Navbar />}
      <div className="w-full flex gap-10 relative">
        <div className={dashboard ? "w-9/12 ml-auto" : "w-full px-4"}>
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
