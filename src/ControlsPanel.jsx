
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";

export const ControlsPanel = () => {
  const { toggleLanguage } = useContext(LanguageContext);
  const { toggleTheme } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{display:"flex", gap:'20px'}}>
      <button className={`button--${theme}`} onClick={toggleLanguage}>Сменить язык</button>
      <button  className={`button--${theme}`} onClick={toggleTheme}>Сменить тему</button>
    </div>
  );
};
