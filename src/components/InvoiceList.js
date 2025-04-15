// src/components/InvoiceList.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
import { FiEye, FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
// import './InvoiceList.css'; // Create this CSS file

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const navigate = useNavigate();

  // Mock data fetch - replace with actual API call
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setInvoices([
            {
              id: 'INV-001',
              clientName: 'TechCorp Inc.',
              date: '2023-05-15',
              dueDate: '2023-06-15',
              total: 1250.75,
              status: 'paid',
              items: [{ description: 'Website Development', quantity: 1, price: 1250.75 }]
            },
            {
              id: 'INV-002',
              clientName: 'Digital Solutions LLC',
              date: '2023-05-20',
              dueDate: '2023-06-20',
              total: 875.50,
              status: 'sent',
              items: [{ description: 'SEO Services', quantity: 1, price: 875.50 }]
            },
            // Add more mock invoices as needed
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        // toast.error('Failed to load invoices');
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  const handleDelete = (invoiceId) => {
    if (window.confirm('Are you sure you want to delete this invoice?')) {
      // Replace with actual API call
      setInvoices(invoices.filter(invoice => invoice.id !== invoiceId));
    //   toast.success('Invoice deleted successfully');
    }
  };

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.clientName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         invoice.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || invoice.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'sent': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading invoices...</p>
      </div>
    );
  }

  return (
    <div className="invoice-list-container">
      <div className="invoice-list-header">
        <h1>Invoices</h1>
        <Link to="/invoices/new" className="btn-create-invoice">
          <FiPlus className="icon" /> New Invoice
        </Link>
      </div>

      <div className="invoice-list-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search invoices..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-dropdown">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="draft">Draft</option>
            <option value="sent">Sent</option>
            <option value="paid">Paid</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>
      </div>

      <div className="invoice-list-table">
        {filteredInvoices.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Invoice #</th>
                <th>Client</th>
                <th>Date</th>
                <th>Due Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td>{invoice.id}</td>
                  <td>{invoice.clientName}</td>
                  <td>{new Date(invoice.date).toLocaleDateString()}</td>
                  <td>{new Date(invoice.dueDate).toLocaleDateString()}</td>
                  <td>${invoice.total.toFixed(2)}</td>
                  <td>
                    <span className={`status-badge ${getStatusColor(invoice.status)}`}>
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </span>
                  </td>
                  <td className="actions">
                    <button 
                      onClick={() => navigate(`/invoices/${invoice.id}`)}
                      className="btn-view"
                    >
                      <FiEye />
                    </button>
                    <button 
                      onClick={() => navigate(`/invoices/edit/${invoice.id}`)}
                      className="btn-edit"
                    >
                      <FiEdit />
                    </button>
                    <button 
                      onClick={() => handleDelete(invoice.id)}
                      className="btn-delete"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-invoices">
            <p>No invoices found. Create your first invoice!</p>
            <Link to="/invoices/new" className="btn-create-first">
              Create Invoice
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvoiceList;