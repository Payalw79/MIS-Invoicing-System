// components/ClientList.js
import React from 'react';
import { Link } from 'react-router-dom';

function ClientList() {
  const clients = [
    {
      id: 1,
      name: 'TechCorp Inc.',
      email: 'contact@techcorp.com',
      phone: '(555) 123-4567',
      status: 'Active'
    },
    
    {
      id: 2,
      name: 'PayAdvent Ltd.',
      email: 'contact@payadvent.com',
      phone: '(777) 456-7843',
      status: 'Active'
    }
  ];

  return (
    <div className="client-management-container">
      <div className="client-list-header">
        <h1>Client Management</h1>
        <Link to="/clients/new" className="btn-add-client">
          Add New Client
        </Link>
      </div>

      <div className="client-search">
        <input type="text" placeholder="Search clients..." />
      </div>

      <div className="client-list">
        {clients.map(client => (
          <div key={client.id} className="client-card">
            <h3>{client.name}</h3>
            <p>Email: {client.email}</p>
            <p>Phone: {client.phone}</p>
            <p>Status: {client.status}</p>
            <div className="client-actions">
              <button>Edit</button>
              <button>Deactivate</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientList;