import React from "react";
import StudentCard from "./StudentCard";
import Button from "./button";

function StudentList({ students, onRemove }) {
  return (
    <div className="p-6 bg-white rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-black">Student List</h1>
      <div className="flex flex-col space-y-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="flex justify-between itemscenter bg-white border border-black p-4 rounded-lg shadow-md transition duration-300 easein-out transform hover:border-[2px]"
          >
            <StudentCard student={student} />
            <Button onClick={() => onRemove(student.id)}>Remove</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default StudentList;
