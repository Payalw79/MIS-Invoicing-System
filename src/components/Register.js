// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { register } from '../services/authService';
// function Register() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         role: 'SALES_PERSON'
//       });
//       const [error, setError] = useState('');
//       const navigate = useNavigate();
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//           ...prev,
//           [name]: value
//         }));
//       };
    
//       const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         // Validate form
//         if (formData.password !== formData.confirmPassword) {
//           setError('Passwords do not match');
//           return;
//         }
    
//         try {
//           const response = await register({
//             name: formData.name,
//             email: formData.email,
//             password: formData.password,
//             role: formData.role
//           });
    
//           // Redirect to login or dashboard
//           navigate('/login');
//         } catch (err) {
//           setError(err.response?.data?.message || 'Registration failed');
//           console.error('Registration error', err);
//         }
//       };
    
//       return (
//         <div className="register-container">
//           <form onSubmit={handleSubmit} className="register-form">
//             <h2>Register for CodeB IMS</h2>
//             {error && <div className="error-message">{error}</div>}
            
//             <div className="form-group">
//               <label>Full Name</label>
//               <input 
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required 
//               />
//             </div>
    
//             <div className="form-group">
//               <label>Email</label>
//               <input 
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required 
//               />
//             </div>
    
//             <div className="form-group">
//               <label>Password</label>
//               <input 
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required 
//               />
//             </div>
    
//             <div className="form-group">
//               <label>Confirm Password</label>
//               <input 
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required 
//               />
//             </div>
    
//             <div className="form-group">
//               <label>Role</label>
//               <select 
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//               >
//                 <option value="SALES_PERSON">Sales Person</option>
//                 <option value="ADMIN">Admin</option>
//               </select>
//             </div>
    
//             <button type="submit" className="btn-register">Register</button>
            
//             <div className="form-footer">
//               Already have an account? <a href="/login">Login</a>
//             </div>
//           </form>
//         </div>
//       );
//     }

// export default Register
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from '../services/authService';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'SALES PERSON'
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await register({ 
                name: formData.name, 
                email: formData.email, 
                password: formData.password, 
                role: formData.role 
            });
            
            // Redirect to login or dashboard
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
            console.error('Registration error', err);
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className="register-form">
                <h2>Register for CodeB IMS</h2>
                {error && <div className="error-message">{error}</div>}

                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Role</label>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="SALES PERSON">Sales Person</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                </div>

                <button type="submit" className="btn-register">Register</button>
                <div className="form-footer">
                    Already have an account? <a href="/login">Login</a>
                </div>
            </form>
        </div>
    );
}

export default Register;