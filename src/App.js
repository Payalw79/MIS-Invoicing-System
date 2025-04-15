import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Navbar from './components/Navbar';
import './styles/style_mis.css';
import './App.css';
import './styles/main.css';
import ClientForm from './components/ClientForm';
import InvoiceForm from './components/InvoiceForm';
import ClientManagement from './components/ClientManagement';
import ClientList from './components/ClientList';
import InvoiceList from './components/InvoiceList';
import EstimateForm from './components/EstimateForm';
import Estimate from './components/Estimate';
import Report from './components/Report';
import ReportViewer from './components/ReportViewer';
import ReportGenerator from './components/ReportGenerator';

// Create a layout component that includes the dashboard
const DashboardLayout = ({ children }) => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="dashboard-container">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>CodeB IMS</h2>
          <nav>
            <ul>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/clients">Client Management</a></li>
              <li><a href="/estimates">Estimates</a></li>
              <li><a href="/invoices">Invoices</a></li>
              <li><a href="/reports">Reports</a></li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="main-content">
   

          {/* Page Content */}
          <div className="page-content">
            {children}
          </div>

        
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Auth Routes (without dashboard) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          {/* Main Routes (with dashboard layout) */}
          <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          
          {/* Client Routes */}
          <Route path="/clients" element={<DashboardLayout><ClientManagement /></DashboardLayout>} />
          <Route path="/clients/new" element={<DashboardLayout><ClientForm /></DashboardLayout>} />
          <Route path="/clients/edit/:id" element={<DashboardLayout><ClientForm /></DashboardLayout>} />
          
          {/* Invoice Routes */}
          <Route path="/invoices" element={<DashboardLayout><InvoiceList /></DashboardLayout>} />
          <Route path="/invoices/new" element={<DashboardLayout><InvoiceForm /></DashboardLayout>} />
          <Route path="/invoices/edit/:id" element={<DashboardLayout><InvoiceForm /></DashboardLayout>} />
          
          {/* Estimate Routes */}
          <Route path="/estimates" element={<DashboardLayout><Estimate /></DashboardLayout>} />
          <Route path="/estimates/new" element={<DashboardLayout><EstimateForm /></DashboardLayout>} />
          <Route path="/estimates/edit/:estimateId" element={<DashboardLayout><EstimateForm /></DashboardLayout>} />

          {/* Report Routes */}
          <Route path="/reports" element={<DashboardLayout><Report /></DashboardLayout>} />
          <Route path="/reports/view/:id" element={<DashboardLayout><ReportViewer /></DashboardLayout>} />
          <Route path="/reports/generate" element={<DashboardLayout><ReportGenerator /></DashboardLayout>} />

          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';
// import ForgotPassword from './components/ForgotPassword';
// import ResetPassword from './components/ResetPassword';
// import Navbar from './components/Navbar';
// import style_mis from './styles/style_mis.css';
// import './App.css';
// import './styles/main.css';
// import ClientForm from './components/ClientForm';
// import InvoiceForm from './components/InvoiceForm';
// import ClientManagement from './components/ClientManagement';
// import ClientList from './components/ClientList';
// import InvoiceList from './components/InvoiceList';
// import EstimateForm from './components/EstimateForm';
// import Estimate from './components/Estimate';
// import Report from './components/Report';
// import ReportViewer from './components/ReportViewer';
// import ReportGenerator from './components/ReportGenerator';

// // Create a PrivateRoute component for protected routes
// const PrivateRoute = ({ children }) => {
//     const token = localStorage.getItem('token');
//     return token ? children : <Navigate to="/login" />;
// };

// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <Routes>
//                     {/* Auth Routes (without dashboard) */}
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/register" element={<Register />} />
//                     <Route path="/forgot-password" element={<ForgotPassword />} />
//                     <Route path="/reset-password/:token" element={<ResetPassword />} />

//                     {/* Main Routes (with dashboard layout) */}
//                     <Route path="/dashboard" element={
//                         <PrivateRoute>
//                             <Navbar />
//                             <Dashboard />
//                         </PrivateRoute>
//                     } />

//                     {/* Client Routes */}
//                     <Route path="/clients" element={
//                         <PrivateRoute>
//                             <Navbar />
//                             <ClientManagement />
//                         </PrivateRoute>
//                     } />

//                     <Route path="/clients/new" element={
//                         <PrivateRoute>
//                             <Navbar />
//                             <ClientForm />
//                         </PrivateRoute>
//                     } />

//                     <Route path="/clients/edit/:id" element={
//                         <PrivateRoute>
//                             <Navbar />
//                             <ClientForm />
//                         </PrivateRoute>
//                     } />

//                     {/* Invoice Routes */}
//                     <Route path="/invoices" element={
//                         <PrivateRoute>
//                             <Navbar />
//                             <InvoiceList />
//                         </PrivateRoute>
//                     } />

//                     <Route path="/invoices/new" element={
//                         <PrivateRoute>
//                             <Navbar />
//                             <InvoiceForm />
//                         </PrivateRoute>
//                     } />

//                     <Route path="/invoices/edit/:id" element={
//                         <PrivateRoute>
//                             <Navbar />
//                             <InvoiceForm />
//                         </PrivateRoute>
//                     } />

//                     {/* Estimate Routes */}
//                     <Route path="/estimates" element={
//                         <PrivateRoute>
//                             <Navbar />
//                             <Estimate />
//                         </PrivateRoute>
//                     } />

//                     <Route path="/estimates/new" element={
//                         <PrivateRoute>
//                             <Navbar />
//                             <EstimateForm />
//                         </PrivateRoute>
//                     } />

//                     <Route path="/estimates/edit/:id" element={
//                         <PrivateRoute>
//                             <Navbar />
//                             <EstimateForm />
//                         </PrivateRoute>
//                     } />

//                     {/* Report Routes */}
//                     <Route path="/reports" element={
//                         <PrivateRoute>
//                             <Navbar />
//                             <Report />
//                         </PrivateRoute>
//                     } />

//                     <Route path="/reports/view/:id" element={
//                         <PrivateRoute>
//                             <Navbar />
//                             <ReportViewer />
//                         </PrivateRoute>
//                     } />

//                     <Route path="/reports/generate" element={
//                         <PrivateRoute>
//                             <Navbar />
//                             <ReportGenerator />
//                         </PrivateRoute>
//                     } />

//                     <Route path="*" element={<Navigate to="/dashboard" />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;