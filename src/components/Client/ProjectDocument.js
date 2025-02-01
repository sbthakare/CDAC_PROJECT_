import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css";

const ProjectDocument = () => (
  <div className="card">
    <div class="card-body">
      <h5>Project Files</h5>
      <table class="table table-striped project-docs-table">
        <thead>
          <tr>
            <th>Document Name</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Contract Agreement</td>
            <td>12th Jan 2024</td>
            <td>
              <a href="#" class="btn btn-info btn-sm">
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>Blueprints</td>
            <td>20th Jan 2024</td>
            <td>
              <a href="#" class="btn btn-info btn-sm">
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>Permits</td>
            <td>22nd Jan 2024</td>
            <td>
              <a href="#" class="btn btn-info btn-sm">
                Download
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <button class="btn btn-primary file-upload-btn">Upload Document</button>
    </div>
  </div>
);

export default ProjectDocument;