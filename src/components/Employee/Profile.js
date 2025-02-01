import React from "react";

const Profile = () => (
  <div className="form-container-">
          <header className="profile-header">
        <div className="profile-photo">
          <img 
            src={"https://via.placeholder.com/100"} 
            alt="Profile" 
            className="profile-photo-img"
          />
        </div>
        <div className="profile-info">
        <h1>Chinmay Bhake</h1>
                  <p>Front-End Developer</p>
        </div>
      </header>


    <Section title="Personal Information">
      <ul>
        <li>Email: chinmaybhake@example.com</li>
        <li>Phone: +91 7453456789</li>
        <li>Joining Date: 12/12/2024</li>
      </ul>
    </Section>

    <Section title="Recent Projects">
      {[{ name: "Project One", description: "Description of project one. (Technologies: HTML, CSS, JS)" }].map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </Section>
  </div>
);

const Section = ({ title, children }) => (
  <div className="section">
    <h2>{title}</h2>
    {children}
  </div>
);

export default Profile;
