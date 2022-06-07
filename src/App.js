import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Welcome from "./pages/welcome";
import { selectAllUsers } from "./features/users/usersSlice";
import { useSelector } from "react-redux";
import Landing from "./pages/landing";

function App() {
  const { isLoggedIn } = useSelector(selectAllUsers);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={isLoggedIn ? <Welcome /> : <Landing />} />
      </Route>
    </Routes>
  );
}

export default App;
