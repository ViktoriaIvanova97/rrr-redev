import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchInput from "./SearchInput";
import ItemList from "./ItemList";
import CounterButton from "./CounterButton";


function App() {
  return (
    <>
      <SearchInput />
      <ItemList />
      <CounterButton/>
    </>
  );
}

export default App;
