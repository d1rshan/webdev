import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function handleAddTodo() {
    if (input) {
      setTodos([...todos, { id: todos.length, text: input }]);
      setInput("");
    }
  }
  function handleDeleteTask(id) {
    setTodos(todos.filter((task) => task.id !== id));
  }
  return (
    <>
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="Enter your task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        style={{
          padding: "5px",
          cursor: "pointer",
          backgroundColor: "black",
          color: "white",
        }}
        onClick={handleAddTodo}
      >
        Add
      </button>

      <ul>
        {todos.map((todo) => (
          <li>
            {todo.text + "   "}
            <span
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => handleDeleteTask(todo.id)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TodoApp;
