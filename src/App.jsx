import "./App.css";
import ContextProvider from "./ContextProvider";
import Input from "./Input";
import TasksList from "./TasksList";
import TasksFilter from "./TaskFilter";
import DeleteCompleted from "./DeleteCompleted";
import CountActive from "./CountActive";

function App() {
  return (
    <ContextProvider>
      <div>
        <h2>To-Do List</h2>
        <Input />
        <TasksList />
        <TasksFilter />
        <DeleteCompleted />
        <CountActive />
      </div>
    </ContextProvider>
  );
}

export default App;
