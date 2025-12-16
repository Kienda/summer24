import { useState } from "react";
function NoteForm({ notes, setNotes }) {
  // formDat without using lot of state
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    // Validation
    if (!formData.title || !formData.description) return;

    // create note object
    const newNote = { id: Date.now(), ...formData };

    //add notes to state
    setNotes([newNote, ...notes]);

    //Reset form data
    setFormData({
      title: "",
      category: "Work",
      priority: "Medium",
      description: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      {/* tittle input  */}
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title:
        </label>
        <input
          type="text"
          name="title"
          className="w-full h-10 border rounded-lg text-slate-700"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      {/* priority input  */}
      <div className="mb-4">
        <label htmlFor="priority" className="block font-semibold">
          Priority:
        </label>
        <select
          name="priority"
          type="text"
          className="w-full h-10 border rounded-lg"
          value={formData.priority}
          onChange={handleChange}
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
          name="category"
          type="text"
          className="w-full h-10 border rounded-lg"
          value={formData.category}
          onChange={handleChange}
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
          name="description"
          type="text"
          className="w-full border  rounded-lg h-30 text-black"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="w-full bg-indigo-500 text-white py-2 rounded-lg cursor-pointer hover:bg-indigo-600">
        Add Note
      </button>
    </form>
  );
}
export default NoteForm;
