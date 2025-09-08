import "./App.css";
import ContextProvider from "./ContextProvider";
import { Context } from "./Contex";
import Input from "./Input";
import TasksList from "./TasksList";
import { useContext } from "react";

function App() {

  return (
    <ContextProvider>
      <div>
        <h2>To-Do List</h2>
        <Input/>
        <TasksList />
      </div>
    </ContextProvider>
  );
}

export default App;
