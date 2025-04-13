import { useState } from "react";
import { useTodo } from "../contexts/index";

export const TodoInput = () => {
  const { addTodo } = useTodo();
  const [todo, setTodo] = useState("");

  function handleAddTodo() {
    if (!todo) return;
    addTodo(todo);
    setTodo("");
  }

  return (
    <div className="flex justify-between border-[1.5px] border-black dark:border-white rounded-lg overflow-hidden">
      <input
        type="text"
        value={todo}
        placeholder="Enter todo.."
        onChange={(e) => setTodo(e.target.value)}
        className="p-2 outline-none bg-white dark:bg-black flex-1"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo();
          }
        }}
      />
      <button
        className="bg-black text-white dark:bg-white dark:text-black py-1 px-2"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
};
