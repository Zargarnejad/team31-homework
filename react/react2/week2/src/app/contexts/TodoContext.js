"use client";

import { createContext, useReducer, useContext } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, []);

  function todoReducer(state, action) {
    switch (action.type) {
      case "ADD":
        return [...state, { id: Date.now(), text: action.text, done: false }];
      case "REMOVE":
        return state.filter((t) => t.id !== action.id);
      case "TOGGLE":
        return state.map((t) =>
          t.id === action.id ? { ...t, done: !t.done } : t
        );
      default:
        return state;
    }
  }

  return (
    <TodoContext.Provider value={{ todos: state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}
