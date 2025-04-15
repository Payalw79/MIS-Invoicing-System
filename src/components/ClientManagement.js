import React, { useState, useEffect } from 'react';
import { FaPlus, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../Api';
const API_BASE_URL = 'http://localhost:8080/api/clients';

function ClientManagement() {
    const navigate = useNavigate();
    const [clients, setClients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        try {
            setLoading(true);
            const response = await axios.get(API_BASE_URL);
            setClients(response.data);
            setError(null);
        } catch (err) {
            console.error('Error fetching clients:', err);
            setError('Failed to load clients. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteClient = async (id) => {
        if (window.confirm('Are you sure you want to delete this client?')) {
            try {
                await axios.delete(`${API_BASE_URL}/${id}`);
                setClients(clients.filter(client => client.id !== id));
            } catch (err) {
                console.error('Error deleting client:', err);
                alert('Failed to delete client. Please try again.');
            }
        }
    };

    const handleEditClient = (client) => {
        navigate(`/clients/edit/${client.id}`);
    };

    const filteredClients = clients.filter(client => {
        const name = client.name || '';
        const email = client.email || '';
        const phone = client.phone || '';
        
        return (
            name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            phone.includes(searchTerm)
        );
    });

    return (
        <div className="client-management">
            <div className="page-header">
                <h1 className="page-title">Client Management</h1>
                <button 
                    className="add-button" 
                    onClick={() => navigate('/clients/new')}
                >
                    <FaPlus /> Add Client
                </button>
            </div>
            
            <div className="search-bar">
                <FaSearch className="search-icon" />
                <input 
                    type="text" 
                    placeholder="Search clients..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            
            {loading ? (
                <div className="loading">Loading clients...</div>
            ) : error ? (
                <div className="error">{error}</div>
            ) : (
                <div className="clients-table-container">
                    <table className="clients-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredClients.length > 0 ? (
                                filteredClients.map(client => (
                                    <tr key={client.id}>
                                        <td>{client.name || '-'}</td>
                                        <td>{client.email || '-'}</td>
                                        <td>{client.phone || '-'}</td>
                                        <td>
                                            <span className={`status-badge ${client.status?.toLowerCase() || 'active'}`}>
                                                {client.status || 'Active'}
                                            </span>
                                        </td>
                                        <td className="actions">
                                            <button 
                                                className="action-button edit"
                                                onClick={() => handleEditClient(client)}
                                            >
                                                <FaEdit />
                                            </button>
                                            <button 
                                                className="action-button delete"
                                                onClick={() => handleDeleteClient(client.id)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="no-clients">
                                        No clients found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ClientManagement;

// import React, { useState, useEffect } from 'react';
// import { FaPlus, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { getClients, deleteClient} from '../Api'; // Adjust the import path as necessary

// function ClientManagement() {
//     const navigate = useNavigate();
//     const [clients, setClients] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetchClients();
//     }, []);

//     const fetchClients = async () => {
//         try {
//             setLoading(true);
//             const response = await getClients();
//             setClients(response.data);
//             setError(null);
//         } catch (err) {
//             console.error('Error fetching clients:', err);
//             setError('Failed to load clients. Please try again later.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleDeleteClient = async (id) => {
//         if (window.confirm("Are you sure you want to delete this client?")) {
//             try {
//                 await deleteClient(id);
//                 setClients(clients.filter(client => client.id !== id));
//             } catch (err) {
//                 console.error('Error deleting client:', err);
//                 alert('Failed to delete client. Please try again.');
//             }
//         }
//     };

//     const handleEditClient = (client) => {
//         navigate(`/clients/edit/${client.id}`);
//     };

//     const filteredClients = clients.filter(client => {
//         const name = client.name || '';
//         const email = client.email || '';
//         const phone = client.phone || '';

//         return (
//             name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             phone.includes(searchTerm)
//         );
//     });

//     return (
//         <div className="client-management">
//             <div className="page-header">
//                 <h1 className="page-title">Client Management</h1>
//                 <button
//                     className="add-button"
//                     onClick={() => navigate("/clients/new")}
//                 >
//                     <FaPlus /> Add Client
//                 </button>
//             </div>

//             <div className="search-bar">
//                 <FaSearch className="search-icon" />
//                 <input
//                     type="text"
//                     placeholder="Search clients..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//             </div>

//             {loading ? (
//                 <div className="loading">Loading clients...</div>
//             ) : error ? (
//                 <div className="error">{error}</div>
//             ) : (
//                 <div className="clients-table-container">
//                     <table className="clients-table">
//                         <thead>
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Phone</th>
//                                 <th>Status</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredClients.length > 0 ? (
//                                 filteredClients.map(client => (
//                                     <tr key={client.id}>
//                                         <td>{client.name || '-'}</td>
//                                         <td>{client.email || '-'}</td>
//                                         <td>{client.phone || '-'}</td>
//                                         <td>
//                                             <span className={`status-badge ${
//                                                 client.status?.toLowerCase() || 'active'
//                                             }`}>
//                                                 {client.status || 'Active'}
//                                             </span>
//                                         </td>
//                                         <td className="actions">
//                                             <button
//                                                 className="action-button edit"
//                                                 onClick={() => handleEditClient(client)}
//                                             >
//                                                 <FaEdit />
//                                             </button>
//                                             <button
//                                                 className="action-button delete"
//                                                 onClick={() => handleDeleteClient(client.id)}
//                                             >
//                                                 <FaTrash />
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="5" className="no-clients">
//                                         No clients found
//                                     </td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ClientManagement;
