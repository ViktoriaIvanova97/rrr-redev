import { useState, useCallback, useMemo } from "react";
import "./App.css";
import SearchInput from "./SearchInput";
import ItemList from "./ItemList";
import CounterButton from "./CounterButton";
import { withRenderTracker } from "./withRenderTracker";



function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

 

  const items = useMemo(() => Array.from({ length: 150 }, (_, i) => `элемент ${i + 1}`),[],);

  const changeCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const Tracker = useMemo(() => withRenderTracker(ItemList), [search]);

  return (
    <div style={{ display: "grid" }}>
      <p>{count}</p>
      <CounterButton changeCount={changeCount} />
      <SearchInput handleChange={handleChange} />
      {/* <ItemList items={items} search={search} /> */}
      <Tracker items={items} search={search} />
    </div>
  );
}

export default App;
