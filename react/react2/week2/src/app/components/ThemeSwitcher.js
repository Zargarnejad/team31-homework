"use client";
import { useTheme } from "../contexts/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#bbb" : "#eee",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Current theme: {theme}</h2>
      <button onClick={toggleTheme}> Change Background color </button>
    </div>
  );
}
