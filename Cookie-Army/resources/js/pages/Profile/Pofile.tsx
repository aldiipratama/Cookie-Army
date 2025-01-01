import React from 'react';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
    return (
        <div className="container">
            {/* Sidebar */}
            <div className="sidebar">
                <h1>ShareFly</h1>
                <a href="#"><span>🏠</span> Home</a>
                <a href="#"><span>🔍</span> Search</a>
                <a href="#"><span>➕</span> Create Post</a>
                <a href="#"><span>📚</span> Read Book</a>
                <a href="#"><span>✉️</span> Messages</a>
                <a href="#"><span>👤</span> Profile</a>
                <div className="menu">
                    <a href="#"><span>☰</span> Menu</a>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Header Section */}
                <div className="header">
                    <img src="https://via.placeholder.com/100" alt="Profile" className="profile-picture" />
                    <div className="info">
                        <h2>Kim Hye-yoon</h2>
                        <p>@Kim_Hye-yoon</p>
                        <div className="stats">
                            <div>
                                <strong>1</strong>
                                <p>Posts</p>
                            </div>
                            <div>
                                <strong>1000</strong>
                                <p>Followers</p>
                            </div>
                            <div>
                                <strong>1000</strong>
                                <p>Following</p>
                            </div>
                        </div>
                        <p>Followed by Kwon_Yu-ri + 80 more</p>
                    </div>
                    <button className="edit-button">Edit Profile</button>
                </div>

                {/* Tabs Section */}
                <div className="tabs">
                    <button className="active">Posts</button>
                    <button>Saved</button>
                    <button>Likes</button>
                </div>

                {/* Posts Section */}
                <div className="posts">
                    <div className="post">
                        <img src="https://via.placeholder.com/300x200" alt="Post" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
