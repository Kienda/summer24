import { useState } from "react";
import { CgNotes } from "react-icons/cg";
import NoteForm from "./components/NoteForm";
const App = () => {
  const [notes, setNotes] = useState([]);
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg show-lg p-10">
      <h2 className="flex items-center justify-center gap-3 text-2xl font-bold">
        <CgNotes className="text-indigo-600 text-3xl" />
        <span>Notes App</span>
      </h2>
      <NoteForm notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default App;
