import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiDownload, FiPrinter } from 'react-icons/fi';

const ReportViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock data - replace with API call
  useEffect(() => {
    const fetchReport = async () => {
      try {
        setTimeout(() => {
          const mockReports = [
            {
              id: 'REP-001',
              name: 'Sales Report Q2 2023',
              type: 'sales',
              date: '2023-06-15',
              generatedBy: 'John Doe',
              content: {
                totalSales: 125000,
                topProducts: ['Product A', 'Product B', 'Product C'],
                chartData: [
                  { month: 'Apr', sales: 35000 },
                  { month: 'May', sales: 45000 },
                  { month: 'Jun', sales: 45000 }
                ]
              }
            },
            {
              id: 'REP-002',
              name: 'Client Acquisition Report',
              type: 'clients',
              date: '2023-06-10',
              generatedBy: 'Jane Smith',
              content: {
                newClients: 24,
                sources: ['Referral', 'Website', 'Social Media'],
                conversionRate: '32%'
              }
            }
          ];
          
          const foundReport = mockReports.find(r => r.id === id);
          setReport(foundReport);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error('Failed to load report', error);
        setLoading(false);
      }
    };

    fetchReport();
  }, [id]);

  const handleDownload = () => {
    console.log('Downloading report:', id);
    // Implement download logic here
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading report...</p>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="not-found">
        <h2>Report not found</h2>
        <button onClick={() => navigate('/reports')} className="btn-back">
          Back to Reports
        </button>
      </div>
    );
  }

  return (
    <div className="report-viewer">
      <div className="report-header">
        <button onClick={() => navigate('/reports')} className="btn-back">
          <FiArrowLeft /> Back to Reports
        </button>
        <div className="report-actions">
          <button onClick={handleDownload} className="btn-download">
            <FiDownload /> Download PDF
          </button>
          <button onClick={handlePrint} className="btn-print">
            <FiPrinter /> Print
          </button>
        </div>
      </div>

      <div className="report-meta">
        <h1>{report.name}</h1>
        <div className="meta-info">
          <span>Report ID: {report.id}</span>
          <span>Type: {report.type}</span>
          <span>Generated on: {new Date(report.date).toLocaleDateString()}</span>
          <span>By: {report.generatedBy}</span>
        </div>
      </div>

      <div className="report-content">
        {report.type === 'sales' && (
          <>
            <h2>Sales Summary</h2>
            <div className="summary-card">
              <h3>Total Sales</h3>
              <p className="big-number">${report.content.totalSales.toLocaleString()}</p>
            </div>
            
            <h3>Top Products</h3>
            <ul className="top-products">
              {report.content.topProducts.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
            
            <h3>Monthly Sales</h3>
            <table className="sales-table">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Sales</th>
                </tr>
              </thead>
              <tbody>
                {report.content.chartData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.month}</td>
                    <td>${data.sales.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {report.type === 'clients' && (
          <>
            <h2>Client Acquisition</h2>
            <div className="summary-card">
              <h3>New Clients</h3>
              <p className="big-number">{report.content.newClients}</p>
            </div>
            
            <div className="summary-card">
              <h3>Conversion Rate</h3>
              <p className="big-number">{report.content.conversionRate}</p>
            </div>
            
            <h3>Acquisition Sources</h3>
            <ul className="sources-list">
              {report.content.sources.map((source, index) => (
                <li key={index}>{source}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ReportViewer;