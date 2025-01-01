import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [requiredSkills, setRequiredSkills] = useState("");
  const [salary, setSalary] = useState("");

  const handlePostJob = () => {
    const newJob = {
      title: jobTitle,
      description: jobDescription,
      skills: requiredSkills,
      salary: salary,
      timestamp: Date.now(), // Store the current timestamp
    };

    // Save job to localStorage
    const existingJobs = JSON.parse(localStorage.getItem("postedJobs")) || [];
    existingJobs.push(newJob);
    localStorage.setItem("postedJobs", JSON.stringify(existingJobs));

    alert("Job posted successfully!");

    // Clear form fields
    setJobTitle("");
    setJobDescription("");
    setRequiredSkills("");
    setSalary("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f5",
        padding: "20px",
      }}
    >
      <div
        className="section"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          className="card"
          style={{
            width: "100%",
            maxWidth: "800px",
            padding: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ textAlign: "center", fontSize: "1.8rem", margin: 0 }}>
            Post Job
          </h2>
          <br />
          <div className="form-group">
            <label>Job Title:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter job title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Job Description:</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Enter job description"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Required Skills:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter required skills"
              value={requiredSkills}
              onChange={(e) => setRequiredSkills(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Annual Salary:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary mt-3"
            onClick={handlePostJob}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Post Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
