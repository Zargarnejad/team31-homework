"use client";
import "../globals.css";
import { useState } from "react";
import { useTodos } from "../contexts/TodoContext";

export default function TodoList() {
  const { todos, dispatch } = useTodos();
  const [text, setText] = useState("");

  const addTodo = () => {
    const trimmedText = text.trim();
    if (trimmedText) {
      dispatch({ type: "ADD", text: trimmedText });
      setText("");
    }
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>

      <div className="todo-form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add your new task here ..."
        />
        <button onClick={addTodo}>Add task</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? "done" : ""}>
            <span onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>
              Delete task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
