"use client";
import{useTheme} from "../contexts/ThemeContext"

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#eee",
        color: theme === "dark" ? "#ccc" : "#000",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Current theme: {theme}</h2>
      <button onClick={toggleTheme}> Change Theme</button>
    </div>
  );
}
