import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  // GET all tasks
  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  // ADD task
  const addTask = (task) => {
    fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((newTask) => setTasks([newTask, ...tasks]));
  };

  // DELETE task
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/api/tasks/${id}`, { method: "DELETE" })
      .then(() => setTasks(tasks.filter((task) => task._id !== id)));
  };

  // EDIT task
  const editTask = (id, updatedData) => {
    fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) =>
        setTasks(tasks.map((task) => (task._id === id ? data : task)))
      );
  };

  return (
    <div
  style={{
    maxWidth: "700px",
    margin: "30px auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  }}
>
  <h1 style={{ color: "#333", marginBottom: "20px" }}>Task Manager </h1>
  <TaskForm addTask={addTask} />
  <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
</div>


  );
}

export default App;
