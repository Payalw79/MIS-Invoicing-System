import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardLayout.css'; 

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>CodeB IMS</h2>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/clients">Client Management</Link></li>
            <li><Link to="/estimates">Estimates</Link></li>
            <li><Link to="/invoices">Invoices</Link></li>
            <li><Link to="/reports">Reports</Link></li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Dashboard Stats Bar */}
        <div className="stats-bar">
          <div className="stat-card">
            <h3>Clients</h3>
            <p>42 <span>39.1%</span></p>
          </div>
          <div className="stat-card">
            <h3>Estimates</h3>
            <p>28 <span>31.1%</span></p>
          </div>
          <div className="stat-card">
            <h3>Invoices</h3>
            <p>35 <span>41.1%</span></p>
          </div>
          <div className="stat-card">
            <h3>Revenue</h3>
            <p>$125,000 <span>110000.1 HxM%</span></p>
          </div>
        </div>

        {/* Page Content */}
        <div className="page-content">
          {children}
        </div>

        {/* Recent Activities */}
        <div className="recent-activities">
          <h3>Recent Activities</h3>
          <ul>
            <li>Investment Report 2024-01</li>
            <li>regren@credit 2024-01</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;