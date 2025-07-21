import { useState, useCallback, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchInput from "./SearchInput";
import ItemList from "./ItemList";
import CounterButton from "./CounterButton";

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const items = useMemo(() => Array.from({ length: 150 }, (_, i) => `элемент ${i + 1}`), []);

  const changeCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return (
    <div style={{ display: "grid" }}>
      <p>{count}</p>
      <CounterButton clickButton={changeCount} />
      <SearchInput handleChange={handleChange} />
      <ItemList items={items} search={search} />
    </div>
  );
}

export default App;
