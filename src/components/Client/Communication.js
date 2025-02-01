import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Communication = () => (
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
        <h5>Message History</h5>
        <div class="chat-box">
          <div class="message left">
            <p>
              <strong>Admin:</strong> The construction is progressing well, we
              expect to finish on time.
            </p>
          </div>
          <div class="message right">
            <p>
              <strong>Client:</strong> Great! Let me know if anything needs my
              attention.
            </p>
          </div>
        </div>

        <form class="mt-4">
          <textarea
            class="form-control"
            rows="3"
            placeholder="Send a message"
          ></textarea>
          <button class="btn btn-primary mt-3">Send</button>
        </form>

        <div class="mt-4">
          <h5>Change Request</h5>
          <form>
            <textarea
              class="form-control"
              rows="4"
              placeholder="Describe the change request"
            ></textarea>
            <button class="btn btn-success mt-3">Submit Change Request</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Communication;
