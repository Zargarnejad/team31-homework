"use client";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { translations } from "../../lib/translations";

export default function LocalizedComponent() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];

  return (
    <div className="container">
      <h1>{t.title}</h1>
      <h2>{t.text}</h2>
      <button onClick={toggleLanguage}>{t.changeLanguage}</button>
      <button onClick={toggleTheme} style={{ marginRight: "10px" }}>
        {t.changeTheme}
      </button>
    </div>
  );
}
