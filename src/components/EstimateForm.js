// import React, { useState } from 'react';

// const EstimateForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     projectType: '',
//     description: '',
//     budget: '',
//     timeline: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const projectTypes = [
//     'Web Development',
//     'Mobile App',
//     'E-commerce',
//     'UX/UI Design',
//     'Digital Marketing',
//     'Other'
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: null
//       });
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }
    
//     if (!formData.email) {
//       newErrors.email = 'Email is required';

    
//     if (!formData.projectType) {
//       newErrors.projectType = 'Please select a project type';
//     }
    
//     if (!formData.description.trim()) {
//       newErrors.description = 'Please describe your project';
//     } else if (formData.description.trim().length < 30) {
//       newErrors.description = 'Description should be at least 30 characters';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;
    
//     setIsSubmitting(true);
    
//     try {
   
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       setSubmitSuccess(true);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         projectType: '',
//         description: '',
//         budget: '',
//         timeline: '',
//       });
//     } catch (error) {
//       console.error('Submission error:', error);
//       setErrors({
//         ...errors,
//         submit: 'There was an error submitting your request. Please try again.'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (submitSuccess) {
//     return (
//       <div className="estimate-success">
//         <h3>Thank You!</h3>
//         <p>Your estimate request has been received. We'll review your project details and get back to you within 2 business days.</p>
//         <button 
//           onClick={() => setSubmitSuccess(false)}
//           className="btn btn-primary"
//         >
//           Request Another Estimate
//         </button>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="estimate-form">
//       <h2>Request a Free Estimate</h2>
      
//       <div className="form-group">
//         <label htmlFor="name">Name*</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className={errors.name ? 'error' : ''}
//         />
//         {errors.name && <span className="error-message">{errors.name}</span>}
//       </div>
      
//       <div className="form-group">
//         <label htmlFor="email">Email*</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className={errors.email ? 'error' : ''}
//         />
//         {errors.email && <span className="error-message">{errors.email}</span>}
//       </div>
      
//       <div className="form-group">
//         <label htmlFor="phone">Phone Number</label>
//         <input
//           type="tel"
//           id="phone"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//       </div>
      
//       <div className="form-group">
//         <label htmlFor="projectType">Project Type*</label>
//         <select
//           id="projectType"
//           name="projectType"
//           value={formData.projectType}
//           onChange={handleChange}
//           className={errors.projectType ? 'error' : ''}
//         >
//           <option value="">Select a project type</option>
//           {projectTypes.map(type => (
//             <option key={type} value={type}>{type}</option>
//           ))}
//         </select>
//         {errors.projectType && <span className="error-message">{errors.projectType}</span>}
//       </div>
      
//       <div className="form-group">
//         <label htmlFor="description">Project Description*</label>
//         <textarea
//           id="description"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           rows="5"
//           className={errors.description ? 'error' : ''}
//           placeholder="Tell us about your project goals, requirements, and any specific needs..."
//         />
//         {errors.description && <span className="error-message">{errors.description}</span>}
//       </div>
      
//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="budget">Estimated Budget</label>
//           <select
//             id="budget"
//             name="budget"
//             value={formData.budget}
//             onChange={handleChange}
//           >
//             <option value="">Select budget range</option>
//             <option value="1k-5k">$1,000 - $5,000</option>
//             <option value="5k-15k">$5,000 - $15,000</option>
//             <option value="15k-50k">$15,000 - $50,000</option>
//             <option value="50k+">$50,000+</option>
//           </select>
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="timeline">Project Timeline</label>
//           <select
//             id="timeline"
//             name="timeline"
//             value={formData.timeline}
//             onChange={handleChange}
//           >
//             <option value="">Select timeline</option>
//             <option value="1-3 months">1-3 months</option>
//             <option value="3-6 months">3-6 months</option>
//             <option value="6-12 months">6-12 months</option>
//             <option value="flexible">Flexible</option>
//           </select>
//         </div>
//       </div>
      
//       {errors.submit && (
//         <div className="form-error">
//           {errors.submit}
//         </div>
//       )}
      
//       <button 
//         type="submit" 
//         className="btn btn-primary"
//         disabled={isSubmitting}
//       >
//         {isSubmitting ? 'Submitting...' : 'Get My Free Estimate'}
//       </button>
      
//       <div className="form-note">
//         <p>* Required fields</p>
//       </div>
//     </form>
//   );
// };
// }
// export default EstimateForm;

// EstimateForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../Api'; // Adjust the import based on your project structure

const EstimateForm = ({ estimateId }) => {
  const navigate = useNavigate();
  const isEditMode = !!estimateId;
  
  // Initialize form data - adjust fields to match your database
  const [formData, setFormData] = useState({
    clientId: '',
    chainId: '',
    estimateDate: new Date().toISOString().split('T')[0],
    expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    items: [{ description: '', quantity: 1, unitPrice: 0 }],
    notes: '',
    status: 'draft'
  });

  const createEstimate = async (estimateData) => {
    try {
      const response = await api.post('/estimates', estimateData); // token automatically added here
      console.log(response.data);
    } catch (error) {
      console.error("Error creating estimate:", error);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your submit logic here
  //   console.log('Form submitted:', formData);
  //   navigate('/estimates');
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Construct payload
    const payload = {
      client: { id: formData.clientId },
      chain: { id: formData.chainId },
      estimateDate: formData.estimateDate,
      expiryDate: formData.expiryDate,
      items: formData.items,
      notes: formData.notes,
      status: formData.status,
    };
  
    try {
      const response = await fetch('http://localhost:8080/api/estimates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) throw new Error('Failed to create estimate');
  
      const data = await response.json();
      console.log('Estimate created:', data);
      navigate('/estimates');
    } catch (error) {
      console.error('Error submitting estimate:', error);
      alert('Failed to submit estimate.');
    }
  };
  

  const handleItemChange = (index, field, value) => {
    const newItems = [...formData.items];
    newItems[index][field] = value;
    setFormData({...formData, items: newItems});
  };

  const addNewItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { description: '', quantity: 1, unitPrice: 0 }]
    });
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>{isEditMode ? 'Edit Estimate' : 'New Estimate'}</h1>
      </div>

      <div className="content-container">
        <form onSubmit={handleSubmit} className="estimate-form">
          {/* Client Selection */}
          <div className="form-group">
            <label>Client</label>
            <select
              value={formData.clientId}
              onChange={(e) => setFormData({...formData, clientId: e.target.value})}
              required
            >
              <option value="">Select Client</option>
              {/* Populate with actual clients from API */}
              <option value="1">TechCorp Inc.</option>
              <option value="2">Digital Solutions LLC</option>
            </select>
          </div>

          {/* Estimate Dates */}
          <div className="form-row">
            <div className="form-group">
              <label>Estimate Date</label>
              <input
                type="date"
                value={formData.estimateDate}
                onChange={(e) => setFormData({...formData, estimateDate: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                type="date"
                value={formData.expiryDate}
                onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                required
              />
            </div>
          </div>

          {/* Items Table */}
          <div className="form-group">
            <label>Items</label>
            <table className="items-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {formData.items.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
                        min="1"
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={item.unitPrice}
                        onChange={(e) => handleItemChange(index, 'unitPrice', parseFloat(e.target.value))}
                        min="0"
                        step="0.01"
                        required
                      />
                    </td>
                    <td>${(item.quantity * item.unitPrice).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" onClick={addNewItem} className="add-item-btn">
              + Add Item
            </button>
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button type="button" onClick={() => navigate('/estimates')} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              {isEditMode ? 'Update Estimate' : 'Create Estimate'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EstimateForm;

