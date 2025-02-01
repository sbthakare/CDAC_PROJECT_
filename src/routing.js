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
import ClientDashboard from "./components/Client/ClientDashboard";
// Routes with Header and Footer
const appRoutes = [
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
        path: "loginpage",
        element: <Login />,
      },
      {
        path: "registerpage",
        element: <Register />,
      },
      {
        path: "forgotpasswordpage",
        element: <ForgetPassword />,
      },
    ],
  },
];

// Routes without Header and Footer
const dashboardRoutes = [
  {
    path: "studentpage",
    element: <StudentDashboard />,
  },
  {
    path: "admingpage",
    element: <AdminDashboard />,
  },
  {
    path: "employeepage",
    element: <EmployeeDashboard />,
  },
  {
    path: "clientpage",
    element: <ClientDashboard />,
  }
];

// Combine both route groups
const router = createBrowserRouter([
  ...appRoutes,
  ...dashboardRoutes,
]);

export default router;
