import { useEffect, useState } from "react";
import { ThemeContext, TodoContext } from "./contexts/index";
import { Button, TodoCard, TodoInput } from "./comp/index";
import "./index.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(null);
  // [{id: 1, todo: "learn react js", status: false}]
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), todo: todo, status: false },
    ]);
  }

  function updateTodo(id, todo) {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, todo: todo } : prevTodo
      )
    );
    console.log(todos);
  }

  function removeTodo(id) {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  }

  function toggleComplete(id) {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, status: !prevTodo.status }
          : prevTodo
      )
    );
  }

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    const storedIsDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
    if (storedIsDarkMode !== null) setIsDarkMode(storedIsDarkMode);
  }, []);

  useEffect(() => {
    console.log(isDarkMode);
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(isDarkMode ? "dark" : "light");
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) setTodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <TodoContext.Provider
        value={{ todos, addTodo, updateTodo, removeTodo, toggleComplete }}
      >
        <div className="min-h-screen w-full dark:bg-black flex flex-col items-center p-20 gap-6 dark:text-white">
          <Button />
          <h1 className="text-3xl font-bold">Manage Your Todos</h1>
          <div className="w-2/3">
            <TodoInput />
            <div className="flex flex-col gap-2 mt-6">
              {todos.map((item) => (
                <TodoCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </TodoContext.Provider>
    </ThemeContext.Provider>
  );
};
export default App;
