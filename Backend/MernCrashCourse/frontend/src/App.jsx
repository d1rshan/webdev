import { Route, Routes } from "react-router";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import HomePage from "./pages/HomePage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="forest">
      <button className="btn btn-primary">click me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};
export default App;
