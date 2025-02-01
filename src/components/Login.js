import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("Student"); // Default role
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState(""); // To handle error messages
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/registerpage");
  };

  const handleForgetpass = () => {
    navigate("/forgotpasswordpage");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Clear the error message if the user starts typing in the password field
    if (name === "password" && error) {
      setError("");
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" || type === "radio" ? checked : value,
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
      setError(
        "Password must be at least 6 characters long and contain alphanumeric characters and symbols."
      );
      return;
    }

    // Check if 'Remember Me' is checked
    if (!formData.rememberMe) {
      alert("Please check 'Remember me' before logging in.");
      return;
    }

    // Handle login based on role
    if (role === "Student") {
      console.log("Student Login successful:", formData);
      navigate("/studentpage"); // Redirect to Student dashboard
    } else if (role === "Employee") {
      console.log("Employee Login successful:", formData);
      navigate("/employeepage"); // Redirect to Employee dashboard
    } else if (role === "Admin") {
      console.log("Admin Login successful:", formData);
      navigate("/admingpage"); // Redirect to Admin dashboard
    } else if(role === "Client"){
       console.log("Client Login successful:", formData);
       navigate("/clientpage"); // Redirect to Client dashboard
    }
  };

  return (
    <div className="a1">
      <div className="wrapper">
        <div className="form-box login">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>

            {/* Role Selection */}
            <div className="role-selection">
              <h6>Select Your Role:</h6>
              <div>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="Student"
                    checked={role === "Student"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Student
                </label>
                <label className="ms-3">
                  <input
                    type="radio"
                    name="role"
                    value="Employee"
                    checked={role === "Employee"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Employee
                </label>
                <label className="ms-3">
                  <input
                    type="radio"
                    name="role"
                    value="Admin"
                    checked={role === "Admin"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Admin
                </label>
                <label className="ms-3">
                  <input
                    type="radio"  
                    name="role"
                    value="Client"
                    checked={role === "Client"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Client
                </label>
              </div>
            </div>

            {/* Email Input */}
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <FaUser className="icon" />
            </div>

            {/* Password Input */}
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

            {/* Remember Me Checkbox */}
            <div className="remember-forgot">
              <label>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />{" "}
                Remember me
              </label>

              {/* Changed from <a> to <button> */}
              <button
                onClick={handleForgetpass}
                style={{
                  background: "none",
                  border: "none",
                  color: "blue",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                aria-label="Forgot Password"
              >
                Forgot Password
              </button>
            </div>


            {/* Submit Button */}
            <button type="submit">Login</button>

            {/* Register Link (only for Students) */}
            {role === "Student" && (
              <div className="register-link">
                <p>
                  Don't have an account?{" "}
                  <span
                    onClick={handleRegister}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    Register
                  </span>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
