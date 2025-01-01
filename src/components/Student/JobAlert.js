import React, { useState, useEffect } from "react";

const JobAlert = () => {
  const [jobAlerts, setJobAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = () => {
      const storedJobs = JSON.parse(localStorage.getItem("postedJobs")) || [];
      const twoDaysAgo = Date.now() - 48 * 60 * 60 * 1000; // 48 hours in milliseconds

      // Filter jobs posted within the last 48 hours
      const recentJobs = storedJobs.filter((job) => job.timestamp >= twoDaysAgo);
      setJobAlerts(recentJobs.reverse());
    };

    fetchAlerts();

    // Listen to storage changes for live updates (cross-tab support)
    window.addEventListener("storage", fetchAlerts);

    return () => {
      window.removeEventListener("storage", fetchAlerts);
    };
  }, []);

  const formatRelativeTime = (timestamp) => {
    const timeElapsed = Date.now() - timestamp;
    const hoursElapsed = Math.floor(timeElapsed / (1000 * 60 * 60));

    if (hoursElapsed === 0) return "Just posted";
    if (hoursElapsed === 1) return "1 hour ago";
    if (hoursElapsed < 24) return `${hoursElapsed} hours ago`;
    return "1 day ago";
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Job Alerts</h2>
      {jobAlerts.length === 0 ? (
        <p className="text-center">No new job alerts.</p>
      ) : (
        <div className="row">
          {jobAlerts.map((alert, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{alert.title}</h5>
                  <p className="card-text">{alert.description}</p>
                  <p><strong>Skills:</strong> {alert.skills}</p>
                  <p><strong>Salary:</strong> ${alert.salary}</p>
                  <p className="text-muted">{formatRelativeTime(alert.timestamp)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobAlert;
