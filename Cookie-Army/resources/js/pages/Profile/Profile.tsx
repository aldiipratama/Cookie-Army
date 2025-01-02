import React from 'react';
import './Profile.css';

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
                <div className="profile-header">
                    <img src="profile.jpg" alt="Profile Picture" />
                    <h3>Kim Hye-yoon</h3>
                    <p>@kim_Hye-yoon</p>
                    <div className="profile-stats">
                        <span>1 Posts</span>
                        <span>1000 Followers</span>
                        <span>1000 Following</span>
                    </div>
                </div>
                <div className="profile-content">
                    <div className="tabs">
                        <div className="active">Posts</div>
                        <div>Saved</div>
                        <div>Likes</div>
                    </div>
                    <div className="posts">
                        <img src="post.jpg" alt="Post Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
