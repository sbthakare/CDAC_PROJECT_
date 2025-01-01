import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("id"); // Get job ID from query params

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5119/api/job/${jobId}`);
        setJob(response.data);
      } catch (error) {
        setError("Failed to fetch job details. Please try again later.");
      }
    };

    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId]);

  if (error) {
    return <div className="container mt-5 text-danger">{error}</div>;
  }

  if (!job) {
    return <div className="container mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h2 className="mb-4">{job.title}</h2>
          <p><strong>Description:</strong> {job.description}</p>
          <p><strong>Skills Required:</strong> {job.skills}</p>
          <p><strong>Salary:</strong> ${job.salary}</p>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5>Job Details</h5>
              <p><strong>Type:</strong> {job.type}</p>
              <p><strong>Posted On:</strong> {new Date(job.postedDate).toLocaleDateString()}</p>
              <button className="btn btn-primary w-100" onClick={() => alert(`Applied for ${job.title}`)}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
