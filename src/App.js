import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Welcome from "./pages/welcome";
import { fetchUsers, getLocal, selectAllUsers } from "./features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import Landing from "./pages/landing";
import { useEffect, useState } from "react";
import IssueContainer from "./features/issues/issueContainer";
import { selectAllIssues } from "./features/issues/issuesSlice";
import TasksContainer from "./features/tasks/tasksContainer";

function App() {
  const { isLoggedIn, authUser, admin } = useSelector(selectAllUsers);
  const { issues } = useSelector(selectAllIssues);
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
        <Route index element={isLoggedIn ? <Welcome user={[isLoggedIn, username, admin]} issues={issues} /> : <Landing />} />
        <Route path="/issues">
          <Route path="add" element={<IssueContainer user={[authUser, admin]} />} />
        </Route>
        <Route path="/tasks">
          <Route path="add" element={<TasksContainer user={[authUser, admin]} />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
