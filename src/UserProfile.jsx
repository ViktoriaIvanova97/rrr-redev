import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";

export const UserProfile = () => {
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

  return <h3>{translations[language].profile}</h3>;
};
