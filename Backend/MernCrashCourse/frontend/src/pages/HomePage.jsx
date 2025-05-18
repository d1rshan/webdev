import { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import axios from "axios";
import toast from "react-hot-toast";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/notes");
      console.log(res.data);
      console.log(res.data[0].title);
      setNotes(res.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching notes");
      toast.error("Failed to load notes!f");
    }
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">Loading notes...</div>
        )}

        {notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default HomePage;
