import React from 'react';

const ProfilePage: React.FC = () => {
    return (
        <div className="container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="sidebar-item">
                    <span>👤</span>
                    <p>Profile</p>
                </div>
                <div className="sidebar-item">
                    <span>⚙️</span>
                    <p>Settings</p>
                </div>
                <div className="sidebar-item">
                    <span>☀️</span>
                    <p>Theme</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <header>
                    <h1>Welcome, Aldi Pratama</h1>
                    <p>Kamis, 14 November 2024</p>
                </header>

                <div className="profile">
                    <div className="profile-header">
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            className="profile-picture"
                        />
                        <div>
                            <h2>Aldi Pratama</h2>
                            <p>@aldipratama</p>
                        </div>
                        <button className="edit-button">Edit Profile</button>
                    </div>

                    <div className="profile-info">
                        <div className="info-row">
                            <div>
                                <label>Full Name</label>
                                <input type="text" value="Aldi" readOnly />
                            </div>
                            <div>
                                <label>Nick Name</label>
                                <input type="text" value="Pratama" readOnly />
                            </div>
                        </div>
                        <div className="info-row">
                            <div>
                                <label>Gender</label>
                                <input type="text" value="Laki-Laki" readOnly />
                            </div>
                            <div>
                                <label>Country</label>
                                <input type="text" value="Indonesia" readOnly />
                            </div>
                        </div>
                        <div className="info-row">
                            <div>
                                <label>Language</label>
                                <input type="text" value="English" readOnly />
                            </div>
                            <div>
                                <label>Time Zone</label>
                                <input type="text" value="Asia - Jakarta +00:07" readOnly />
                            </div>
                        </div>
                        <div className="info-row">
                            <div>
                                <label>My Email Address</label>
                                <input type="text" value="paldi0013@gmail.com" readOnly />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" value="**********" readOnly />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

/* Comments:
1. Sidebar: Contains icons and labels for navigation, following the provided design.
2. Header: Displays the greeting and date.
3. Profile Header: Includes a profile picture, username, and an Edit Profile button.
4. Profile Info: Contains rows of labeled read-only input fields for user details.
5. CSS file `ProfilePage.css` should define styles for layout, colors, and responsiveness.
*/
