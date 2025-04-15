
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const [stats, setStats] = useState({
        clients: { current: 42, previous: 39 },
        estimates: { current: 28, previous: 31 },
        invoices: { current: 35, previous: 44 },
        revenue: { current: 125000, previous: 110000 },
        activities: [
            "Investment Report 2024-01",
            "repren@credit 2024-01"
        ]
    });

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
         

            <main className="dashboard-main">
                <header>
                    <h1>Dashboard</h1>
                </header>

                <div className="quick-stats">
                    <StatCard 
                        title="Clients" 
                        value={stats.clients.current} 
                        previous={stats.clients.previous}
                        icon="👥" 
                    />
                    <StatCard 
                        title="Estimates" 
                        value={stats.estimates.current} 
                        previous={stats.estimates.previous}
                        icon="📝" 
                    />
                    <StatCard 
                        title="Invoices" 
                        value={stats.invoices.current} 
                        previous={stats.invoices.previous}
                        icon="🧾" 
                    />
                    <StatCard 
                        title="Revenue" 
                        value={`$${stats.revenue.current.toLocaleString()}`} 
                        previous={stats.revenue.previous}
                        icon="💰" 
                        isCurrency={true}
                    />
                </div>

                <div className="dashboard-widgets">
                    <section className="widget large">
                        <h3>Recent Activities</h3>
                        <ActivityList activities={stats.activities} />
                    </section>
                    <section className="widget">
                        <h3>Monthly Revenue</h3>
                        <p>Client Distribution</p>
                    </section>
                </div>
            </main>
        </div>
    );
}

const StatCard = ({ title, value, icon, previous, isCurrency = false }) => {
    const change = ((value - previous) / previous) * 100;
    const changeText = `${previous} ${change >= 0 ? '↑' : '↓'} ${Math.abs(Math.round(change))}%`;

    return (
        <div className="stat-card">
            <div className="stat-header">
                <span className="stat-icon">{icon}</span>
                <span className="stat-title">{title}</span>
            </div>
            <div className="stat-value">{value}</div>
            <div className={`stat-change ${change >= 0 ? 'positive' : 'negative'}`}>
                {changeText}
            </div>
        </div>
    );
};

const ActivityList = ({ activities }) => (
    <ul className="activity-list">
        {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
        ))}
    </ul>
);

export default Dashboard;