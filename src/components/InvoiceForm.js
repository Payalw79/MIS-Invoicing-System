// components/InvoiceForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function InvoiceForm({ clients = [], onSubmit, initialData }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        invoiceNumber: initialData?.invoiceNumber || `INV-${Date.now()}`,
        clientId: initialData?.clientId || '',
        date: initialData?.date || new Date().toISOString().split('T')[0],
        dueDate: initialData?.dueDate || '',
        items: initialData?.items || [{ description: '', quantity: 1, price: 0 }],
        notes: initialData?.notes || '',
        status: initialData?.status || 'draft'
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleItemChange = (index, e) => {
        const { name, value } = e.target;
        const newItems = [...formData.items];
        newItems[index] = { ...newItems[index], [name]: name === 'description' ? value : Number(value) };
        setFormData(prev => ({ ...prev, items: newItems }));
    };

    const addItem = () => {
        setFormData(prev => ({
            ...prev,
            items: [...prev.items, { description: '', quantity: 1, price: 0 }]
        }));
    };

    const removeItem = (index) => {
        if (formData.items.length > 1) {
            const newItems = formData.items.filter((_, i) => i !== index);
            setFormData(prev => ({ ...prev, items: newItems }));
        }
    };

    const calculateTotal = () => {
        return formData.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.clientId) newErrors.clientId = 'Client is required';
        if (!formData.date) newErrors.date = 'Date is required';
        if (!formData.dueDate) newErrors.dueDate = 'Due date is required';
        
        formData.items.forEach((item, index) => {
            if (!item.description) newErrors[`items[${index}].description`] = 'Description is required';
            if (item.quantity <= 0) newErrors[`items[${index}].quantity`] = 'Quantity must be positive';
            if (item.price < 0) newErrors[`items[${index}].price`] = 'Price cannot be negative';
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit({
                ...formData,
                total: calculateTotal()
            });
        }
    };

    return (
        <div className="invoice-form-container">
            <h2>{initialData ? 'Edit Invoice' : 'Create New Invoice'}</h2>
            
            <form onSubmit={handleSubmit} className="invoice-form">
                <div className="form-section">
                    <h3>Invoice Details</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Invoice Number</label>
                            <input
                                type="text"
                                name="invoiceNumber"
                                value={formData.invoiceNumber}
                                onChange={handleChange}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label>Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="draft">Draft</option>
                                <option value="sent">Sent</option>
                                <option value="paid">Paid</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className={`form-group ${errors.clientId ? 'error' : ''}`}>
                            <label>Client*</label>
                            <select
                                name="clientId"
                                value={formData.clientId}
                                onChange={handleChange}
                            >
                                <option value="">Select Client</option>
                                {clients.map(client => (
                                    <option key={client.id} value={client.id}>{client.name}</option>
                                ))}
                            </select>
                            {errors.clientId && <span className="error-message">{errors.clientId}</span>}
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className={`form-group ${errors.date ? 'error' : ''}`}>
                            <label>Date*</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                            {errors.date && <span className="error-message">{errors.date}</span>}
                        </div>
                        <div className={`form-group ${errors.dueDate ? 'error' : ''}`}>
                            <label>Due Date*</label>
                            <input
                                type="date"
                                name="dueDate"
                                value={formData.dueDate}
                                onChange={handleChange}
                                min={formData.date}
                            />
                            {errors.dueDate && <span className="error-message">{errors.dueDate}</span>}
                        </div>
                    </div>
                </div>
                
                <div className="form-section">
                    <h3>Items</h3>
                    {formData.items.map((item, index) => (
                        <div key={index} className="item-row">
                            <div className={`form-group ${errors[`items[${index}].description`] ? 'error' : ''}`}>
                                <label>Description*</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={item.description}
                                    onChange={(e) => handleItemChange(index, e)}
                                />
                                {errors[`items[${index}].description`] && (
                                    <span className="error-message">{errors[`items[${index}].description`]}</span>
                                )}
                            </div>
                            <div className="form-row">
                                <div className={`form-group ${errors[`items[${index}].quantity`] ? 'error' : ''}`}>
                                    <label>Quantity*</label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => handleItemChange(index, e)}
                                    />
                                    {errors[`items[${index}].quantity`] && (
                                        <span className="error-message">{errors[`items[${index}].quantity`]}</span>
                                    )}
                                </div>
                                <div className={`form-group ${errors[`items[${index}].price`] ? 'error' : ''}`}>
                                    <label>Price*</label>
                                    <input
                                        type="number"
                                        name="price"
                                        min="0"
                                        step="0.01"
                                        value={item.price}
                                        onChange={(e) => handleItemChange(index, e)}
                                    />
                                    {errors[`items[${index}].price`] && (
                                        <span className="error-message">{errors[`items[${index}].price`]}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label>Total</label>
                                    <input
                                        type="text"
                                        value={(item.quantity * item.price).toFixed(2)}
                                        disabled
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="remove-item-btn"
                                    onClick={() => removeItem(index)}
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    ))}
                    <button type="button" className="add-item-btn" onClick={addItem}>
                        + Add Item
                    </button>
                </div>
                
                <div className="form-section">
                    <div className="form-group">
                        <label>Notes</label>
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows="3"
                        />
                    </div>
                </div>
                
                <div className="form-total">
                    <h4>Total: ${calculateTotal().toFixed(2)}</h4>
                </div>
                
                <div className="form-actions">
                    <button type="button" className="btn-secondary" onClick={() => navigate(-1)}>
                        Cancel
                    </button>
                    <button type="submit" className="btn-primary">
                        {initialData ? 'Update Invoice' : 'Create Invoice'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default InvoiceForm;