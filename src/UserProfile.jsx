import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";

export const UserProfile = () => {
  const { language } = useContext(LanguageContext);

  return <h3>{translations[language].profile}</h3>;
};
