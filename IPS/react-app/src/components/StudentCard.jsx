import React from "react";
function StudentCard({ student }) {
  return (
    <div
      className="bg-black text-white rounded-lg p-4 transition
duration-300 ease-in-out transform hover:scale-105"
    >
      <h2 className="text-xl font-semibold text-gray800">{student.name}</h2>
      <p className="text-gray-300">Age: {student.age}</p>
    </div>
  );
}
export default StudentCard;
