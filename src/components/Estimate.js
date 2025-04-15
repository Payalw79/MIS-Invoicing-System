
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// import { FiEye, FiEdit, FiTrash2, FiPlus, FiFileText , FiSearch , FiEdit2} from 'react-icons/fi';


// const Estimate = () => {
//   const [estimates, setEstimates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterStatus, setFilterStatus] = useState('all');
//   const navigate = useNavigate();

//   // Mock data fetch - replace with actual API call
//   useEffect(() => {
//     const fetchEstimates = async () => {
//       try {
//         // Simulate API call
//         setTimeout(() => {
//           setEstimates([
//             {
//               id: 'EST-001',
//               clientName: 'TechCorp Inc.',
//               date: '2023-05-15',
//               expiryDate: '2023-06-15',
//               total: 1250.75,
//               status: 'accepted',
//               items: [{ description: 'Website Development', quantity: 1, price: 1250.75 }]
//             },
//             {
//               id: 'EST-002',
//               clientName: 'Digital Solutions LLC',
//               date: '2023-05-20',
//               expiryDate: '2023-06-20',
//               total: 875.50,
//               status: 'pending',
//               items: [{ description: 'SEO Services', quantity: 1, price: 875.50 }]
//             },
        
//           ]);
//           setLoading(false);
//         }, 1000);
//       } catch (error) {
   
//         setLoading(false);
//       }
//     };

//     fetchEstimates();
//   }, []);

//   const handleDelete = (estimateId) => {
//     if (window.confirm('Are you sure you want to delete this estimate?')) {
    
//       setEstimates(estimates.filter(estimate => estimate.id !== estimateId));

//     }
//   };

//   const handleConvertToInvoice = (estimateId) => {
//     const estimateToConvert = estimates.find(est => est.id === estimateId);
//     navigate('/invoices/new', { state: { estimate: estimateToConvert } });
 
//   };

//   const filteredEstimates = estimates.filter(estimate => {
//     const matchesSearch = estimate.clientName.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                          estimate.id.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesStatus = filterStatus === 'all' || estimate.status === filterStatus;
//     return matchesSearch && matchesStatus;
//   });

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'accepted': return 'bg-green-100 text-green-800';
//       case 'pending': return 'bg-yellow-100 text-yellow-800';
//       case 'rejected': return 'bg-red-100 text-red-800';
//       case 'expired': return 'bg-gray-100 text-gray-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="loading-spinner"></div>
//         <p>Loading estimates...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="page-container">
//       <div className="page-header">
//         <h1>
//           <FiFileText /> Estimates
//         </h1>
//         <div className="header-actions">
//           <div className="search-bar">
//             <FiSearch className="search-icon" />
//             <input
//               type="text"
//               placeholder="Search estimates..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <Link to="/estimates/new" className="create-button">
//             <FiPlus /> New Estimate
//           </Link>
//         </div>
//       </div>

//       <div className="content-container">
//         {loading ? (
//           <div className="loading">Loading estimates...</div>
//         ) : (
//           <table className="data-table">
//             <thead>
//               <tr>
//                 <th>Estimate #</th>
//                 <th>Client</th>
//                 <th>Date</th>
//                 <th>Expiry Date</th>
//                 <th>Total</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredEstimates.map((estimate) => (
//                 <tr key={estimate.id}>
//                   <td>{estimate.id}</td>
//                   <td>{estimate.clientName}</td>
//                   <td>{new Date(estimate.date).toLocaleDateString()}</td>
//                   <td>{new Date(estimate.expiryDate).toLocaleDateString()}</td>
//                   <td>${estimate.total.toFixed(2)}</td>
//                   <td>
//                     <span className={`status-badge ${getStatusColor(estimate.status)}`}>
//                       {estimate.status}
//                     </span>
//                   </td>
//                   <td>
//                     <button 
//                       className="action-button edit"
//                       onClick={() => navigate(`/estimates/edit/${estimate.id}`)}
//                     >
//                       <FiEdit2 />
//                     </button>
//                     <button 
//                       className="action-button delete"
//                       onClick={() => handleDelete(estimate.id)}
//                     >
//                       <FiTrash2 />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Estimate;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlus, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';

const Estimate = () => {
  const [estimates, setEstimates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const navigate = useNavigate();

  // Mock data fetch - replace with actual API call
  useEffect(() => {
    const fetchEstimates = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setEstimates([
            {
              id: 'EST-001',
              clientName: 'TechCorp Inc.',
              date: '2023-05-15',
              expiryDate: '2023-06-15',
              total: 1250.75,
              status: 'accepted',
              items: [{ description: 'Website Development', quantity: 1, price: 1250.75 }]
            },
            {
              id: 'EST-002',
              clientName: 'Digital Solutions LLC',
              date: '2023-05-20',
              expiryDate: '2023-06-20',
              total: 875.50,
              status: 'pending',
              items: [{ description: 'SEO Services', quantity: 1, price: 875.50 }]
            },
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchEstimates();
  }, []);

  const handleDelete = (estimateId) => {
    if (window.confirm('Are you sure you want to delete this estimate?')) {
      setEstimates(estimates.filter(estimate => estimate.id !== estimateId));
    }
  };

  const handleConvertToInvoice = (estimateId) => {
    const estimateToConvert = estimates.find(est => est.id === estimateId);
    navigate('/invoices/new', { state: { estimate: estimateToConvert } });
  };

  const filteredEstimates = estimates.filter(estimate => {
    const matchesSearch = estimate.clientName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         estimate.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || estimate.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'expired': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading estimates...</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>
          <FiFileText /> Estimates
        </h1>
        <div className="header-actions">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search estimates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Link to="/estimates/new" className="create-button">
            <FaPlus /> New Estimate
          </Link>
        </div>
      </div>

      <div className="content-container">
        {loading ? (
          <div className="loading">Loading estimates...</div>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>Estimate #</th>
                <th>Client</th>
                <th>Date</th>
                <th>Expiry Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEstimates.map((estimate) => (
                <tr key={estimate.id}>
                  <td>{estimate.id}</td>
                  <td>{estimate.clientName}</td>
                  <td>{new Date(estimate.date).toLocaleDateString()}</td>
                  <td>{new Date(estimate.expiryDate).toLocaleDateString()}</td>
                  <td>${estimate.total.toFixed(2)}</td>
                  <td>
                    <span className={`status-badge ${getStatusColor(estimate.status)}`}>
                      {estimate.status}
                    </span>
                  </td>
                  <td>
                    <button 
                      className="action-button edit"
                      onClick={() => navigate(`/estimates/edit/${estimate.id}`)}
                    >
                      <FaEdit />
                    </button>
                    <button 
                      className="action-button delete"
                      onClick={() => handleDelete(estimate.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Estimate;

