import { ThemeContext } from "./ThemeContext";
import { useState } from "react";
export const ThemeProvider = ({ children }) => {
  const [isTheme, setIsTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ isTheme, setIsTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
