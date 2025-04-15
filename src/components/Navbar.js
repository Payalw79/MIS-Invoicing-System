
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';

// function Navbar() {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const navigate = useNavigate();
//     const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//         navigate('/login');
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-brand">
//                 <Link to="/">CodeB IMS</Link>
//                 {isMobile && (
//                     <button 
//                         className="mobile-menu-toggle"
//                         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                     >
//                         ☰
//                     </button>
//                 )}
//             </div>
            
//             <div className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
//                 {user ? (
//                     <>
//                         <Link to="/dashboard">Dashboard</Link>
//                         <Link to="/clients">Clients</Link>
//                         <Link to="/estimates">Estimates</Link>
//                         <Link to="/invoices">Invoices</Link>
//                         <Link to="/reports">Reports</Link>
//                         {user.role === "ADMIN" && <Link to="/admin">Admin</Link>}
//                         <button onClick={handleLogout}>Logout</button>
//                     </>
//                 ) : (
//                     <>
//                         <Link to="/login">Login</Link>
//                         <Link to="/register">Register</Link>
//                     </>
//                 )}
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaPowerOff } from 'react-icons/fa';

function Navbar() {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">CodeB IMS</Link>
                {isMobile && (
                    <button 
                        className="mobile-menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        ☰
                    </button>
                )}
            </div>
            
            <div className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
                {user ? (
     
                    <>
                        
                        {user.role === "ADMIN" && <Link to="/admin">Admin</Link>}
                        <button 
                            onClick={handleLogout}
                            className="logout-button"
                            title="Sign Out"
                        >
                            <FaPowerOff />
                            {isMobile && <span>Sign Out</span>}
                        </button>
                    </>
                ) : (
                    // Guest menu (only Login)
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;