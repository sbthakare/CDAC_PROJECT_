// src/components/Admin/TaskAssignment.js

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskAssignment = ({ onAssignTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [employee, setEmployee] = useState("");
  const [status, setStatus] = useState("Assigned");

  const handleAssignTask = () => {
    if (!taskTitle || !taskDescription || !employee) {
      alert("Please fill out all fields.");
      return;
    }

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      status: status,
      employee: employee,
    };

    onAssignTask(newTask);

    alert("Task assigned successfully!");

    // Reset form fields
    setTaskTitle("");
    setTaskDescription("");
    setEmployee("");
    setStatus("Assigned");
  };

  return (
    <div className="task-form card p-4">
      <h4 className="card-title">Assign Task to Employee</h4>
      <div className="form-group mb-3">
        <label>Employee:</label>
        <input
          type="text"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
          placeholder="Enter employee name"
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <label>Task Title:</label>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter task title"
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <label>Task Description:</label>
        <textarea
          rows="4"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Enter task description"
          className="form-control"
        ></textarea>
      </div>
      <button onClick={handleAssignTask} className="btn btn-assign">
        Assign Task
      </button>
    </div>
  );
};

export default TaskAssignment;
