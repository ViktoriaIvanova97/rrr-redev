import "./App.css";
import DogsPro from "./DogsPro";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [isTheme, setIsTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ isTheme, setIsTheme }}>
      <DogsPro />
    </ThemeContext.Provider>
  );
}

export default App;
