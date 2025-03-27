import React from "react";

function NavBar() {
  return (
    <div className="bg-green-400 py-4 px-4 rounded-b-2xl flex justify-between">
      <span className="font-bold text-2xl cursor-pointer">Movies</span>
      <div className="flex gap-4">
        <span className="cursor-pointer hover:underline">Home</span>
        <span className="cursor-pointer hover:underline">Favorites</span>
      </div>
    </div>
  );
}

export default NavBar;
