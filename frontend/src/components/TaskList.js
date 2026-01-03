import React, { useState } from "react";

function TaskList({ tasks, deleteTask, editTask }) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");

  const startEdit = (task) => {
    setEditingId(task._id);
    setEditTitle(task.title);
    setEditDesc(task.description);
  };

  const saveEdit = (id) => {
    editTask(id, { title: editTitle, description: editDesc });
    setEditingId(null);
  };

  const colors = ["#FFCDD2", "#C8E6C9", "#BBDEFB", "#FFF9C4", "#D1C4E9"]; // colorful boxes

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task, index) => (
        <li
          key={task._id}
          style={{
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "15px",
            backgroundColor: colors[index % colors.length],
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {editingId === task._id ? (
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                style={{
                  flex: 1,
                  padding: "6px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <input
                value={editDesc}
                onChange={(e) => setEditDesc(e.target.value)}
                style={{
                  flex: 1,
                  padding: "6px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                onClick={() => saveEdit(task._id)}
                style={{
                  backgroundColor: "#2196F3",
                  color: "white",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Save
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <strong>{task.title}</strong> – {task.description}
              </div>
              <div>
                <button
                  onClick={() => startEdit(task)}
                  style={{
                    backgroundColor: "#FFC107",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "5px",
                    marginRight: "5px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task._id)}
                  style={{
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
