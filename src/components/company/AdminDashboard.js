import React, { useState } from "react";
import PostJob from "./PostJob";
import WorkTracker from "./WorkTracker";
import ViewStudents from "./ViewStudents";
import ViewEmployees from "./ViewEmployees";
import EmployeeCalendar from "./EmployeeCalendar";
import AdminJobManagement from "./AdminJobManagement";


const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("postJob");

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };

 

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Admin Dashboard</h3>
        <ul>
        
          <li onClick={() => showSection("postJob")}>Post Job</li>
          <li onClick={() => showSection("workTracker")}>Task Assign</li>
          <li onClick={() => showSection("viewStudents")}>View Students</li>
          <li onClick={() => showSection("viewEmployees")}>Employees Management</li>
          <li onClick={() => showSection("viewEmployeescal")}>EmployeeCalendar</li>
          <li onClick={() => showSection("adminjobmanage")}>AdminJobManagement</li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="content">
        {activeSection === "postJob" && <PostJob />}
        {activeSection === "workTracker" && <WorkTracker />}
        {activeSection === "viewStudents" && <ViewStudents />}
        {activeSection === "viewEmployees" && <ViewEmployees />}
        {activeSection === "viewEmployeescal" && <EmployeeCalendar />}
        {activeSection === "adminjobmanage" && <AdminJobManagement />}
      </div>
    </div>
  );
};

export default AdminDashboard;
