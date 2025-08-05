import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";

export const Header = () => {
  const { language } = useContext(LanguageContext);

  return <h2>{translations[language].welcome}</h2>;
};
