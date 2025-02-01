import React, { useState } from "react";
import Communication from "./Communication";
import ProjectDocument from "./ProjectDocument";
import Issue from "./Issue";
import Project from "./Project";
const ClientDashboard = () => {
  const [activeSection, setActiveSection] = useState("Communication");

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  const logout = () => {
    localStorage.clear();
    alert("You have been logged out!");
    window.location.href = "/loginpage";
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div
        className="sidebar bg-dark text-light p-3"
        style={{ width: "250px", height: "340vh" }}
      >
        <h3>Client Dashboard</h3>
        <ul>
          <li onClick={() => showSection("Communication")}>Communication</li>
          <li onClick={() => showSection("ProjectDocument")}>
            Project Document
          </li>
          <li onClick={() => showSection("Issue")}>Issue</li>
          <li onClick={() => showSection("Project")}>Project</li>
        </ul>
        <button className="btn btn-secondary logout-button" onClick={logout}>
          Logout
        </button>
      </div>

      {/* Content Area */}
      <div className="content">
        {activeSection === "Communication" && <Communication />}
        {activeSection === "ProjectDocument" && <ProjectDocument />}
        {activeSection === "Issue" && <Issue />}
        {activeSection === "Project" && <Project />}
      </div>
    </div>
  );
};

export default ClientDashboard;
