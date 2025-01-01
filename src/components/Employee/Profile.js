import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  // Static local data for demonstration purposes
  const [profile, setProfile] = useState({
    name: "John Doe",
    designation: "Software Engineer",
    joiningDate: "2022-01-01",
    email: "john.doe@example.com",
    profilePhoto: "https://via.placeholder.com/150", // Placeholder image
    username: "johndoe_123",
  });

  useEffect(() => {
    // In a real-world scenario, you might fetch this data from an API
    // For now, we're using static data initialized above
    setProfile(profile);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Employee Profile</h2><br />
      <div className="row">
        <div className="col-md-4">
          {/* Profile Picture */}
          <div className="profile-picture text-center">
            <img
              src={profile.profilePhoto}
              alt="Profile"
              className="img-thumbnail rounded-circle"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
        </div>
        <div className="col-md-8">
          {/* Profile Details */}
          <div className="profile-details">
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Designation:</strong> {profile.designation}</p>
            <p><strong>Joining Date:</strong> {profile.joiningDate}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Username:</strong> {profile.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
