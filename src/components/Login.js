// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { login } from '../services/authService';

// function Login() {
    
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const response = await Login(email, password);
//         // Store token and user info
//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem('user', JSON.stringify(response.data.user));
        
//         // Redirect based on user role
//         if (response.data.user.role === 'ADMIN') {
//           navigate('/admin-dashboard');
//         } else {
//           navigate('/sales-dashboard');
//         }
//       } catch (err) {
//         setError('Invalid email or password');
//         console.error('Login error', err);
//       }
//     };
  
//     return (
//       <div className="login-container">
//         <form onSubmit={handleSubmit} className="login-form">
//           <h2>Login to CodeB IMS</h2>
//           {error && <div className="error-message">{error}</div>}
//           <div className="form-group">
//             <label>Email</label>
//             <input 
//               type="email" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required 
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input 
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required 
//             />
//           </div>
//           <button type="submit" className="btn-login">Login</button>
//           <div className="form-footer">
//             <a href="/forgot-password">Forgot Password?</a>
//             <a href="/register">Register New Account</a>
//           </div>
//         </form>
//       </div>
//     );
//   }

// export default Login
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// import { login } from '../services/authService';  // ✅ Correct path

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!email.includes('@')) {
//           setError('Please enter a valid email address');
//           return;
//         }
//         try {
//             const response = await login(email, password);
//             // Store token and user info
//             localStorage.setItem('token', response.data.token);
//             localStorage.setItem('user', JSON.stringify(response.data.user));

//             // Redirect based on user role
//             if (response.data.user.role === 'ADMIN') {
//                 navigate("/admin-dashboard");
//             } else {
//                 navigate("/sales-dashboard");
//             }
//         } catch (err) {
//             setError('Invalid email or password!');
//             console.error('Login error', err);
//         }
//     };

//     return (
//         <div className="login-container">
//             <form onSubmit={handleSubmit} className="login-form">
//                 <h2>Login to CodeB IMS</h2>
//                 {error && <div className="error-message">{error}</div>}
//                 <div className="form-group">
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Password</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="btn-login">Login</button>
//                 <div className="form-footer">
//                     <a href="/forgot-password">Forgot Password?</a>
//                     <a href="/register">Register New Account</a>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.includes('@')) {
            setError('Please enter a valid email address');
            return;
        }

        try {
            const response = await login(email, password);
            // Store token and user info
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            // Redirect based on user role
            navigate('/dashboard');
        } catch (err) {
            setError('Invalid email or password!');
            console.error('Login error', err);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login to CodeB IMS</h2>
                {error && <div className="error-message">{error}</div>}
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn-login">Login</button>
                <div className="form-footer">
                    <a href="/forgot-password">Forgot Password</a>
                    <a href="/register">Register New Account</a>
                </div>
            </form>
        </div>
    );
}

export default Login;