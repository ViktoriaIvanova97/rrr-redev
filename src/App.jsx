import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserProfile from "./UserProfile";
import TaskList from "./TaskList";

function App() {
  return (
    <>
      <UserProfile />
      <TaskList/>
    </>
  );
}

export default App;
