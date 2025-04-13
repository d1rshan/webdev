import { useState } from "react";
import { useTodo } from "../contexts/index";

export const TodoCard = ({ item }) => {
  const { toggleComplete, removeTodo, updateTodo } = useTodo();
  const [isEditable, setIsEditable] = useState(false);
  const [todo, setTodo] = useState(item.todo);

  function handleEditSave() {
    if (item.status) return;

    if (todo.length === 0) {
      alert("Todo cannot be empty!");
      setTodo(item.todo);
      setIsEditable(!isEditable);
      return;
    }
    if (isEditable) {
      updateTodo(item.id, todo);
    }
    setIsEditable(!isEditable);
  }

  return (
    <div className="flex gap-4 justify-between items-center border-[1.5px] border-black dark:border-white rounded-lg p-2">
      <div className="flex gap-2 flex-1">
        <input
          type="checkbox"
          className=""
          checked={item.status}
          onChange={() => toggleComplete(item.id)}
        />

        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          readOnly={!isEditable}
          className={`flex-1 outline-none ${
            item.status ? "line-through" : ""
          } bg-transparent `}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleEditSave();
            }
          }}
        />
      </div>
      <div className="flex gap-1">
        <span
          className="cursor-pointer dark:bg-white bg-black p-1 rounded-lg"
          onClick={handleEditSave}
        >
          {isEditable ? "📩" : "✏️"}
        </span>
        <span
          className="cursor-pointer dark:bg-white bg-black p-1 rounded-lg "
          onClick={() => removeTodo(item.id)}
        >
          ❌
        </span>
      </div>
    </div>
  );
};
