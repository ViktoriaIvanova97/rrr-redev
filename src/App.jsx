import "./App.css";
import MyComp from "./MyComp";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`theme theme--${theme}`}>
      <button onClick={() => toggleTheme()}>Theme mode</button>
      <MyComp />
    </div>
  );
}

export default App;
