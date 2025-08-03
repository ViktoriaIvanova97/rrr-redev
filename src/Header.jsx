import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";

export const Header = () => {
  const translations = {
    en: {
      welcome: "Welcome",
      profile: "Your profile",
    },
    ru: {
      welcome: "Добро пожаловать",
      profile: "Твой профиль",
    },
  };

  const { language } = useContext(LanguageContext);

  return <h2>{translations[language].welcome}</h2>;
};
