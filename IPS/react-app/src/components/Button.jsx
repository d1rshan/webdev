import React from "react";
function Button({ children, onClick }) {
  return (
    <button
      className="bg-black cursor-pointer hover:bg-gray-800 text-white font-bold
py-2 px-4 rounded transition duration-300 ease-in-out transform
hover:scale-105"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
