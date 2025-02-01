import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Project = () => {
  const [formData, setFormData] = useState({
    title: "",
    purpose: "",
    deadline: "",
    description: "",
    features: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Data Submitted:", formData);
    // Reset form after submission (optional)
    setFormData({
      title: "",
      purpose: "",
      deadline: "",
      description: "",
      features: "",
    });
  };

  return (
    <div className="container project-form mt-4">
      <h2 className="text-center mb-4">Project Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="title">Project Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="purpose">Project Purpose:</label>
          <textarea
            id="purpose"
            name="purpose"
            className="form-control"
            value={formData.purpose}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="deadline">Project Deadline:</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            className="form-control"
            value={formData.deadline}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="description">Project Description:</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="features">Required Features:</label>
          <textarea
            id="features"
            name="features"
            className="form-control"
            value={formData.features}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit Project Details
        </button>
      </form>
    </div>
  );
};

export default Project;
