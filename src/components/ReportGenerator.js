import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSave, FiX } from 'react-icons/fi';

const ReportGenerator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    reportName: '',
    reportType: 'sales',
    dateRange: {
      start: '',
      end: ''
    },
    filters: {
      category: 'all',
      region: 'all'
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      filters: {
        ...prev.filters,
        [name]: value
      }
    }));
  };

  const handleDateChange = (e, field) => {
    setFormData(prev => ({
      ...prev,
      dateRange: {
        ...prev.dateRange,
        [field]: e.target.value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Generating report with:', formData);
    // Here you would typically make an API call to generate the report
    // Then navigate to the report viewer or back to reports list
    navigate('/reports');
  };

  return (
    <div className="report-generator">
      <div className="form-header">
        <h1>Generate New Report</h1>
        <button onClick={() => navigate('/reports')} className="btn-cancel">
          <FiX /> Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Report Name</label>
          <input
            type="text"
            name="reportName"
            value={formData.reportName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Report Type</label>
          <select
            name="reportType"
            value={formData.reportType}
            onChange={handleChange}
          >
            <option value="sales">Sales Report</option>
            <option value="clients">Client Report</option>
            <option value="financial">Financial Report</option>
            <option value="inventory">Inventory Report</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date Range</label>
          <div className="date-range">
            <input
              type="date"
              value={formData.dateRange.start}
              onChange={(e) => handleDateChange(e, 'start')}
              required
            />
            <span>to</span>
            <input
              type="date"
              value={formData.dateRange.end}
              onChange={(e) => handleDateChange(e, 'end')}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Filters</label>
          <div className="filter-group">
            <select
              name="category"
              value={formData.filters.category}
              onChange={handleFilterChange}
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="services">Services</option>
            </select>

            <select
              name="region"
              value={formData.filters.region}
              onChange={handleFilterChange}
            >
              <option value="all">All Regions</option>
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="east">East</option>
              <option value="west">West</option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-generate">
            <FiSave /> Generate Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportGenerator;