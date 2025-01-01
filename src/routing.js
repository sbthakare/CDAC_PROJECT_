import React from "react";

import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import StudentDashboard from "./components/Student/StudentDashboard";
import ForgetPassword from "./components/ForgetPassword";
import AdminDashboard from "./components/company/AdminDashboard";
import EmployeeDashboard from "./components/Employee/EmployeeDashboard";
import About from "./About ";
import Contact from "./Contact";
import JobDetails from "./JobDetails";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "header",
        element: <Header />,
      },
      {
        path: "footer",
        element: <Footer />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "aboutpage",
        element: <About />,
      },
      {
        path: "contactpage",
        element: <Contact />,
      },
      
      {
        path: "loginpage",
        element: <Login />,
      },
      
      {
        path: "registerpage",
        element: <Register />,
      },
      {
        path: "forgotpasswordpage",
        element: <ForgetPassword/>,
      },
      {
        path: "jobdetails",
        element: <JobDetails/>,
      },
      {
        path: "studentpage",
        element: <StudentDashboard/>,
      },
      {
        path: "admingpage",
        element: <AdminDashboard/>,
      },
      {
        path: "employeepage",
        element: <EmployeeDashboard/>,
      },
 
    ],
  },
]);

export default router;