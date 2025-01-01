import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    termsAccepted: false,
  });
  const [error, setError] = useState(""); // To handle error messages

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // If the user is typing in the password field, clear the error
    if (name === "password" && error) {
      setError("");
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if password meets the criteria
    if (!validatePassword(formData.password)) {
      setError("Password must be at least 6 characters long and contain alphanumeric characters and symbols.");
      return;
    }

    // Check if terms are accepted
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    // If everything is valid
    setError(""); // Clear any previous errors
    console.log("Registration successful:", formData);
    navigate("/loginpage"); // Redirect to the login page after registration
  };

  return (
    <div className="a1">
      <div className="wrapper">
        <div className="form-box register">
          <form onSubmit={handleSubmit}>
            <h1>Registration</h1>

            {/* Username */}
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                required
                value={formData.username}
                onChange={handleChange}
              />
              <FaUser className="icon" />
            </div>

            {/* Email */}
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <FaEnvelope className="icon" />
            </div>

            {/* Password */}
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <FaLock className="icon" />
            </div>

            {/* Error Message */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Terms & Conditions Checkbox */}
            <div className="remember-forgot">
              <label>
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                />{" "}
                I agree to terms & conditions
              </label>
            </div>

            <button type="submit">Register</button>

            {/* Login Link */}
            <div className="register-link">
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/loginpage")}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
