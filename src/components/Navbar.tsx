import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">HRMS</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/employees">Employees</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/leaves">Leaves</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/attendance">Attendance</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/payroll">Payroll</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/reports">Reports</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/settings">Settings</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
