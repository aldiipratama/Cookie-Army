import React from 'react';

const Profile: React.FC = () => {
    return (
        <div className="container">
            {/* Sidebar */}
            <div className="sidebar">
                <h2>ShareFly</h2>
                <ul>
                    <li>Home</li>
                    <li>Search</li>
                    <li>Create Post</li>
                    <li>Read Book</li>
                    <li>Messages</li>
                    <li>Profile</li>
                </ul>
            </div>

            {/* Profile Section */}
            <div className="profile-container">
                {/* Header Section */}
                <div className="profile-header">
                    <img src="profile.jpg" alt="Profile Picture" />
                    <h3>Aldi Pratama</h3>
                    <p>@aldipratama</p>
                    <button className="edit-profile">Edit Profile</button>
                </div>

                {/* Profile Details */}
                <div className="profile-details">
                    <div className="detail">
                        <label>Full Name</label>
                        <input type="text" value="Aldi" readOnly />
                    </div>
                    <div className="detail">
                        <label>Nick Name</label>
                        <input type="text" value="Pratama" readOnly />
                    </div>
                    <div className="detail">
                        <label>Gender</label>
                        <input type="text" value="Laki-Laki" readOnly />
                    </div>
                    <div className="detail">
                        <label>Country</label>
                        <input type="text" value="Indonesia" readOnly />
                    </div>
                    <div className="detail">
                        <label>Language</label>
                        <input type="text" value="English" readOnly />
                    </div>
                    <div className="detail">
                        <label>Time Zone</label>
                        <input type="text" value="Asia - Jakarta +00:07" readOnly />
                    </div>
                    <div className="detail">
                        <label>Email Address</label>
                        <input type="email" value="paldi0013@gmail.com" readOnly />
                    </div>
                    <div className="detail">
                        <label>Password</label>
                        <input type="password" value="**********" readOnly />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
