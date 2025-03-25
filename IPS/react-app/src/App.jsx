import { useState } from "react";
import "./App.css";
import { studentsData } from "./lib/data";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState(studentsData);
  const handleRemoveStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };
  return (
    <div className="container mx-auto p-4 bg-black">
      <h1 className="text-3xl mb-4 font-bold text-white">Student Dashboard</h1>
      <StudentList students={students} onRemove={handleRemoveStudent} />
    </div>
  );
}
export default App;
