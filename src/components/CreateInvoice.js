
import React from 'react';
import InvoiceForm from './InvoiceForm';
import { useNavigate } from 'react-router-dom';

function CreateInvoice() {
    const navigate = useNavigate();
    const [clients, setClients] = useState([]);

    // Fetch clients from API
    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch('/api/clients');
                const data = await response.json();
                setClients(data);
            } catch (error) {
                console.error('Failed to fetch clients', error);
            }
        };
        fetchClients();
    }, []);

    const handleSubmit = async (invoiceData) => {
        try {
            const response = await fetch('/api/invoices', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(invoiceData),
            });
            if (response.ok) {
                navigate('/invoices');
            }
        } catch (error) {
            console.error('Failed to create invoice', error);
        }
    };

    return (
        <div className="page-container">
            <InvoiceForm 
                clients={clients}
                onSubmit={handleSubmit}
                onCancel={() => navigate('/invoices')}
            />
        </div>
    );
}

export default CreateInvoice;