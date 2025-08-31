import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const ButtonTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="buttonTheme"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <img src="/darkMode1.png" alt="theme icon" width="50" />
      ) : (
        <img src="/lightMode.png" alt="theme icon" width="50" />
      )}
    </button>
  );
};
