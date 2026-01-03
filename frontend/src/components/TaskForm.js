import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontWeight: "bold",
          }}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
