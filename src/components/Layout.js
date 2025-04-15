import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

const Layout = ({ children, activePage }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <h2>CodeB IMS</h2>
        <ul>
          <li 
            className={activePage === 'dashboard' ? 'active' : ''} 
            onClick={() => navigate('/dashboard')}
          >
            Dashboard
          </li>
          <li 
            className={activePage === 'clients' ? 'active' : ''} 
            onClick={() => navigate('/clients')}
          >
            Client Management
          </li>
          <li 
            className={activePage === 'estimates' ? 'active' : ''} 
            onClick={() => navigate('/estimates')}
          >
            Estimates
          </li>
          <li 
            className={activePage === 'invoices' ? 'active' : ''} 
            onClick={() => navigate('/invoices')}
          >
            Invoices
          </li>
          <li 
            className={activePage === 'reports' ? 'active' : ''} 
            onClick={() => navigate('/reports')}
          >
            Reports
          </li>
          {user?.role === "ADMIN" && (
            <li 
              className={activePage === 'admin' ? 'active' : ''} 
              onClick={() => navigate('/admin')}
            >
              Admin
            </li>
          )}
        </ul>
        <div className="user-profile">
          <span>{user?.name}</span>
          <button onClick={handleLogout}>
            <FaSignOutAlt /> Sign Out
          </button>
        </div>
      </nav>

      <main className="dashboard-main">
        {children}
      </main>
    </div>
  );
};

export default Layout;