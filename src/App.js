import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Welcome from "./pages/welcome";
import { fetchUsers, getLocal, selectAllUsers } from "./features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import Landing from "./pages/landing";
import { useEffect, useState } from "react";
import IssueContainer from "./features/issues/issueContainer";

function App() {
  const { isLoggedIn, authUser } = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const local = JSON.parse(localStorage.getItem("appUser"));
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (!local) {
      dispatch(fetchUsers());
    } else {
      dispatch(getLocal(local));
    }
    setUsername(authUser.username);
  }, [dispatch, authUser.username]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={isLoggedIn ? <Welcome user={[isLoggedIn, username]} /> : <Landing />} />
        <Route path="/issues">
          <Route path="add" element={<IssueContainer {...authUser} />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
