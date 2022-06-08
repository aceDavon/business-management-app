import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Welcome from "./pages/welcome";
import { fetchUsers, getLocal, selectAllUsers } from "./features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import Landing from "./pages/landing";
import { useEffect } from "react";

function App() {
  const { isLoggedIn } = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const local = JSON.parse(localStorage.getItem("appUser"));
  useEffect(() => {
    if (!local) {
      dispatch(fetchUsers());
    } else {
      dispatch(getLocal(local));
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={isLoggedIn ? <Welcome /> : <Landing />} />
      </Route>
    </Routes>
  );
}

export default App;
