import "./globals.css";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Localized from "./components/Localized";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    
      <div className="container">
        <h1> React2 - Week2 - Exercises : </h1>
        <ThemeSwitcher />
        <Localized />
        <Counter />
        <TodoList/>
      </div>
  );
}
