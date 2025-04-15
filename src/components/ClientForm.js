
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../Api';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/clients';

function ClientForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [client, setClient] = useState({ 
        name: '', 
        email: '', 
        phone: '', 
        status: 'Active' 
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            fetchClient();
        }
    }, [id]);

    const fetchClient = async () => {
        const response = await api.get(`/clients/${id}`);
        try {
            setLoading(true);
            const token = localStorage.getItem('token'); // Get auth token
            const response = await axios.get(`${API_BASE_URL}/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}` // Add auth header
                }
            });
            setClient(response.data);
        } catch (err) {
            console.error('Error fetching client:', err);
            setError(err.response?.data?.message || 'Failed to load client. Please check your permissions.');
            // Handle 403 specifically
            if (err.response?.status === 403) {
                setError('Access denied. Please ensure you have proper permissions.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (id) {
                await axios.put(`${API_BASE_URL}/${id}`, client, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
            } else {
                await axios.post(API_BASE_URL, client, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
            }
            navigate('/clients');
        } catch (err) {
            console.error('Error saving client:', err);
            setError(err.response?.data?.message || 'Failed to save client');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient(prev => ({ ...prev, [name]: value }));
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="client-form">
            <h1>{id ? 'Edit Client' : 'Add New Client'}</h1>
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={client.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={client.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={client.phone}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="form-group">
                    <label>Status</label>
                    <select
                        name="status"
                        value={client.status}
                        onChange={handleChange}
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                
                <div className="form-actions">
                    <button 
                        type="button" 
                        onClick={() => navigate('/clients')}
                        disabled={loading}
                    >
                        Cancel
                    </button>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Saving...' : 'Save'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ClientForm;

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getClient, createClient, updateClient } from '..Api'; // Adjust the import path as necessary

// function ClientForm() {
//     const navigate = useNavigate();
//     const { id } = useParams();
//     const [client, setClient] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         status: 'Active'
//     });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         if (id) {
//             fetchClient();
//         }
//     }, [id]);

//     const fetchClient = async () => {
//         try {
//             setLoading(true);
//             const response = await getClient(id);
//             setClient(response.data);
//         } catch (err) {
//             console.error('Error fetching client:', err);
//             setError(err.response?.data?.message || 'Failed to load client');
//             if (err.response?.status === 403) {
//                 setError('Access denied. Please ensure you have proper permissions.');
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             setLoading(true);
//             if (id) {
//                 await updateClient(id, client);
//             } else {
//                 await createClient(client);
//             }
//             navigate("/clients");
//         } catch (err) {
//             console.error("Error saving client:", err);
//             setError(err.response?.data?.message || 'Failed to save client');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setClient(prev => ({ ...prev, [name]: value }));
//     };

//     if (loading) return <div>Loading...</div>;

//     return (
//         <div className="client-form">
//             <h1>{id ? "Edit Client" : "Add New Client"}</h1>
//             {error && <div className="error-message">{error}</div>}
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={client.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={client.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Phone</label>
//                     <input
//                         type="text"
//                         name="phone"
//                         value={client.phone}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Status</label>
//                     <select
//                         name="status"
//                         value={client.status}
//                         onChange={handleChange}
//                     >
//                         <option value="Active">Active</option>
//                         <option value="Inactive">Inactive</option>
//                     </select>
//                 </div>

//                 <div className="form-actions">
//                     <button
//                         type="button"
//                         onClick={() => navigate("/clients")}
//                         disabled={loading}
//                     >
//                         Cancel
//                     </button>
//                     <button type="submit" disabled={loading}>
//                         {loading ? 'Saving...' : 'Save'}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default ClientForm;