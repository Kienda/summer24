import { useState } from "react";
function NoteForm() {
  const [title, setTittle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Work");
  const [description, setDescription] = useState("");
  return (
    <form className="mb-6">
      {/* tittle input  */}
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Tittle:
        </label>
        <input
          type="text"
          className="w-full h-10 border rounded-lg"
          value={title}
          onChange={(e) => setTittle(e.target.value)}
        />
      </div>
      {/* priority input  */}
      <div className="mb-4">
        <label htmlFor="priority" className="block font-semibold">
          Priority:
        </label>
        <select
          type="text"
          className="w-full h-10 border rounded-lg"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">🔴High</option>
          <option value="Medium">🟠Medium</option>
          <option value="Low">🟢Low</option>
        </select>
      </div>
      {/* Category input  */}
      <div className="mb-4">
        <label htmlFor="category" className="block font-semibold">
          category
        </label>
        <select
          type="text"
          className="w-full h-10 border rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Work">💼Work</option>
          <option value="Personal">🤵Personal</option>
          <option value="Ideas">🤔Ideas</option>
        </select>
      </div>
      {/* Description input */}
      <div className="mb-4">
        <label htmlFor="description" className="block font-semibold">
          Description:
        </label>
        <textarea
          type="text"
          className="w-full border rounded-lg h-30"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button className="w-full bg-indigo-500 text-white py-2 rounded-lg cursor-pointer hover:bg-indigo-600">
        Add Note
      </button>
    </form>
  );
}
export default NoteForm;
