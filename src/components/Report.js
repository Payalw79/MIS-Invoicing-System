// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FiFileText, FiFilter, FiDownload, FiPlus } from 'react-icons/fi';

// const Report = () => {
//   const [reports, setReports] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   // Mock data fetch - similar to your Estimate.js
//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         setTimeout(() => {
//           setReports([
//             {
//               id: 'REP-001',
//               name: 'Sales Report',
//               type: 'sales',
//               date: '2023-06-01',
//               generatedBy: 'John Doe'
//             },
//             {
//               id: 'REP-002',
//               name: 'Client Acquisition',
//               type: 'clients',
//               date: '2023-06-05',
//               generatedBy: 'Jane Smith'
//             },
//           ]);
//           setLoading(false);
//         }, 1000);
//       } catch (error) {
//         console.error('Failed to load reports', error);
//         setLoading(false);
//       }
//     };

//     fetchReports();
//   }, []);

//   const filteredReports = reports.filter(report => 
//     filter === 'all' || report.type === filter
//   );

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="loading-spinner"></div>
//         <p>Loading reports...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="report-container">
//       <div className="report-header">
//         <h1>
//           <FiFileText className="header-icon" /> Reports
//         </h1>
//         <Link to="/reports/generate" className="btn-create-report">
//           <FiPlus className="icon" /> Generate Report
//         </Link>
//       </div>

//       <div className="report-controls">
//         <div className="filter-dropdown">
//           <FiFilter className="filter-icon" />
//           <select
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//           >
//             <option value="all">All Reports</option>
//             <option value="sales">Sales</option>
//             <option value="clients">Clients</option>
//             <option value="financial">Financial</option>
//           </select>
//         </div>
//       </div>

//       <div className="report-list">
//         {filteredReports.length > 0 ? (
//           <table>
//             <thead>
//               <tr>
//                 <th>Report ID</th>
//                 <th>Name</th>
//                 <th>Type</th>
//                 <th>Date Generated</th>
//                 <th>Generated By</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredReports.map((report) => (
//                 <tr key={report.id}>
//                   <td>{report.id}</td>
//                   <td>{report.name}</td>
//                   <td className="capitalize">{report.type}</td>
//                   <td>{new Date(report.date).toLocaleDateString()}</td>
//                   <td>{report.generatedBy}</td>
//                   <td className="actions">
//                     <button 
//                       onClick={() => navigate(`/reports/view/${report.id}`)}
//                       className="btn-view"
//                     >
//                       View
//                     </button>
//                     <button 
//                       onClick={() => console.log('Download', report.id)}
//                       className="btn-download"
//                     >
//                       <FiDownload />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <div className="no-reports">
//             <p>No reports found. Generate your first report!</p>
//             <Link to="/reports/generate" className="btn-create-first">
//               Generate Report
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Report;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFileAlt, FaDownload, FaPlus, FaSearch, FaFilter } from 'react-icons/fa';

const Report = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setTimeout(() => {
          setReports([
            {
              id: 'REP-001',
              name: 'Sales Report',
              type: 'sales',
              date: '2023-06-01',
              generatedBy: 'John Doe'
            },
            {
              id: 'REP-002',
              name: 'Client Acquisition',
              type: 'clients',
              date: '2023-06-05',
              generatedBy: 'Jane Smith'
            },
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Failed to load reports', error);
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         report.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || report.type === filter;
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading reports...</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="flex items-center">
              <FaFileAlt className="mr-2" /> Reports
            </h1>
          </div>
          <div className="header-right">
            <button 
              className="generate-report-button"
              onClick={() => navigate('/reports/generate')}
            >
              <FaPlus className="mr-1" /> Generate Report
            </button>
          </div>
        </div>

        <div className="search-filter-container">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-dropdown">
            <FaFilter className="filter-icon" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Reports</option>
              <option value="sales">Sales</option>
              <option value="clients">Clients</option>
              <option value="financial">Financial</option>
            </select>
          </div>
        </div>
      </div>

      <div className="content-container">
        {loading ? (
          <div className="loading">Loading reports...</div>
        ) : filteredReports.length > 0 ? (
          <table className="data-table">
            <thead>
              <tr>
                <th>Report ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Date Generated</th>
                <th>Generated By</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map((report) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.name}</td>
                  <td className="capitalize">{report.type}</td>
                  <td>{new Date(report.date).toLocaleDateString()}</td>
                  <td>{report.generatedBy}</td>
                  <td>
                    <button 
                      className="action-button view"
                      onClick={() => navigate(`/reports/view/${report.id}`)}
                    >
                      View
                    </button>
                    <button 
                      className="action-button download"
                      onClick={() => console.log('Download', report.id)}
                    >
                      <FaDownload />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-data">
            <p>No reports found. Generate your first report!</p>
            <button 
              className="generate-report-button"
              onClick={() => navigate('/reports/generate')}
            >
              <FaPlus className="mr-1" /> Generate Report
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;