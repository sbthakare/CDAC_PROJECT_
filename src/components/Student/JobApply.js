import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import axios from "axios";

const JobApply = ({ selectedJob, onApply }) => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [jobsPerPage] = useState(6);

  const fetchJobs = useCallback(async (page) => {
    try {
      const response = await axios.get("http://localhost:5119/api/job/list");
      const filteredJobs = selectedJob ? [selectedJob] : response.data;
      setJobs(filteredJobs);
      setTotalPages(Math.ceil(filteredJobs.length / jobsPerPage));
    } catch (error) {
      setError("Failed to fetch jobs. Please try again later.");
    }
  }, [selectedJob, jobsPerPage]);

  const applyForJob = (job) => {
    alert(`Applied for job: ${job.title}`);
    const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    appliedJobs.push({ ...job, status: "Applied" });
    localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));

    if (onApply) onApply(job);
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scroll(0, 0);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scroll(0, 0);
    }
  };

  useEffect(() => {
    fetchJobs(currentPage);
  }, [currentPage, selectedJob, fetchJobs]);

  if (error) {
    return (
      <div className="container mt-5">
        <p className="text-center text-danger">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Job Listings</h2>
      {currentJobs.length === 0 ? (
        <p className="text-center">No jobs available at the moment.</p>
      ) : (
        <div>
          <div className="row">
            {currentJobs.map((job) => (
              <div className="col-md-4 mb-3" key={job.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <p className="card-text">{job.description}</p>
                    <p><strong>Skills:</strong> {job.skills}</p>
                    <p><strong>Salary:</strong> ${job.salary}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => applyForJob(job)}
                    >
                      Apply
                    </button>
                    {/* Link to JobDetails page */}
                    <Link to={`/jobdetails?id=${job.id}`} className="btn btn-info mt-2">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-secondary"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-secondary"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApply;
