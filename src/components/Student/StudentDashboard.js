import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileBuilder from "./ProfileBuilder";
import JobApply from "./JobApply";
import ViewAppliedJobs from "./ViewAppliedJobs";
import JobAlert from "./JobAlert";




const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("profileBuilder");
  const [studentImage, setStudentImage] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setStudentImage(reader.result);
      reader.readAsDataURL(file);
    }
  };



  return (
    <div className="dashboard d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-light p-3" style={{ width: "250px", height: "100vh" }}>
        <div className="profile text-center">
          <img
            src={studentImage || "placeholder.png"}
            alt="Student"
            className="img-thumbnail mb-2"
            style={{ width: "100px", height: "100px" }}
          />
          <p>Student Name</p>
          <input
            type="file"
            accept="image/*"
            className="mt-2"
            onChange={handleImageUpload}
          />
        </div>
        <ul className="list-unstyled mt-4">
          <li
            className={`p-2 ${activeSection === "profileBuilder" ? "bg-primary text-light" : ""}`}
            onClick={() => setActiveSection("profileBuilder")}
          >
            Profile Builder
          </li>
          <li
            className={`p-2 ${activeSection === "jobApply" ? "bg-primary text-light" : ""}`}
            onClick={() => setActiveSection("jobApply")}
          >
            Jobs
          </li>
          <li
            className={`p-2 ${activeSection === "viewAppliedJobs" ? "bg-primary text-light" : ""}`}
            onClick={() => setActiveSection("viewAppliedJobs")}
          >
            View Applied Jobs
          </li>
          <li
            className={`p-2 ${activeSection === "jobAlert" ? "bg-primary text-light" : ""}`}
            onClick={() => setActiveSection("jobAlert")}
          >
            Job Alerts
          </li>
        </ul>

      </div>

      {/* Content */}
      <div className="content flex-grow-1 p-4">
        {activeSection === "profileBuilder" && <ProfileBuilder />}
        {activeSection === "jobApply" && (
          <JobApply onApply={(job) => setAppliedJobs([...appliedJobs, job])} />
        )}
        {activeSection === "viewAppliedJobs" && <ViewAppliedJobs appliedJobs={appliedJobs} />}
        {activeSection === "jobAlert" && <JobAlert />}
      </div>
    </div>
  );
};

export default StudentDashboard;
