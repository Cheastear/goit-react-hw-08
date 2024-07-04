import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Tasks from "./components/Tasks/Tasks";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tasks" element={<Tasks />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/logIn" element={<LogIn />}></Route>
      </Routes>
    </>
  );
}

export default App;
