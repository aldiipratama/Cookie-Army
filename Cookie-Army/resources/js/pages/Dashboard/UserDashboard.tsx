import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <h2>ShareFly</h2>
                <ul>
                    <li className="active">Overview</li>
                    <li>Posts</li>
                    <li>Report</li>
                    <li>Message</li>
                    <li>Statistic</li>
                    <li>Setting</li>
                </ul>
            </div>

            {/* Dashboard Content */}
            <div className="dashboard-content">
                <h1>Dashboard User</h1>
                <table className="dashboard-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First name</th>
                            <th>User name</th>
                            <th>Email</th>
                            <th>Create Date</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Sample Data */}
                        {[...Array(7)].map((_, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>First{index + 1}</td>
                                <td>User{index + 1}</td>
                                <td>user{index + 1}@example.com</td>
                                <td>2024-01-01</td>
                                <td>
                                    <button className="edit-btn">✏️</button>
                                    <button className="delete-btn">🗑️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
