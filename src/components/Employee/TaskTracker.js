import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);

    const handleStorageChange = () => {
      const updatedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(updatedTasks);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const updateTaskStatus = (index, status) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const clearTasks = () => {
    localStorage.removeItem("tasks");
    setTasks([]);
  };

  return (
    <div className="container mt-4">
      <h2>Task Tracker</h2>
      <button className="btn btn-danger mb-3" onClick={clearTasks}>
        Clear Tasks
      </button>
      <div className="row">
        {tasks.length === 0 ? (
          <p>No tasks assigned yet.</p>
        ) : (
          tasks.map((task, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{task.employee}</h5>
                  <p className="card-text">{task.details}</p>
                  <p className="card-text">
                    <strong>Status:</strong> {task.status || "Not Started"}
                  </p>
                  {task.status !== "Completed" && (
                    <>
                      <button
                        className="btn btn-warning me-2"
                        onClick={() => updateTaskStatus(index, "In Progress")}
                      >
                        In Progress
                      </button>
                      <button
                        className="btn btn-success"
                        onClick={() => updateTaskStatus(index, "Completed")}
                      >
                        Completed
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskTracker;
