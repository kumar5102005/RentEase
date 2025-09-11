import React, { useState } from 'react';
import './ProfilePage.css';
import MyProperties from './MyProperties';
import Analytics from './Analytics';
import Footer from './Footer';

const ProfilePage = () => {
  // State to track if edit mode is active
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock user data
  const [userData, setUserData] = useState({
    fullName: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    joinDate: '1/15/2024',
    memberType: 'Premium Member',
    phone: '+1 (555) 123-4567',
    address: {
      street: '456 Oak Avenue',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States'
    }
  });
  
  // Tabs
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'properties' | 'analytics'

  // Handle form input changes
  const handleInputChange = (e, section, field) => {
    if (section === 'address') {
      setUserData({
        ...userData,
        address: {
          ...userData.address,
          [field]: e.target.value
        }
      });
    } else {
      setUserData({
        ...userData,
        [field]: e.target.value
      });
    }
  };
  
  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };
  
  // Handle save changes
  const handleSaveChanges = () => {
    // Here you would typically send the updated data to a server
    // For now, we'll just exit edit mode
    setIsEditing(false);
  };
  
  // Handle cancel
  const handleCancel = () => {
    // Reset any unsaved changes and exit edit mode
    // In a real app, you might want to reload the original data from the server
    setIsEditing(false);
  };

  return (
    <div className={`profile-container ${isEditing ? 'editing' : ''}`}>
      <div className="profile-header">
        <div className="profile-avatar-section">
          <div className="profile-avatar">
            <div className="avatar-placeholder"></div>
          </div>
          <div className="profile-info">
            <h2>{userData.fullName}</h2>
            <p>{userData.email}</p>
            <div className="profile-meta">
              <span><i className="calendar-icon"></i> Joined {userData.joinDate}</span>
              <span><i className="premium-icon"></i> {userData.memberType}</span>
            </div>
          </div>
        </div>
        <div className="profile-actions">
          {isEditing ? (
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          ) : (
            <button className="edit-profile-btn" onClick={toggleEditMode}>
              <i className="edit-icon"></i> Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="profile-tabs">
        <div className={`tab tab-profile ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}><span className="tab-icon profile"></span>Profile Details</div>
        <div className={`tab tab-properties ${activeTab === 'properties' ? 'active' : ''}`} onClick={() => setActiveTab('properties')}><span className="tab-icon properties"></span>My Properties (3)</div>
        <div className={`tab tab-analytics ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => setActiveTab('analytics')}><span className="tab-icon analytics"></span>Analytics</div>
      </div>

      <div className="profile-content">
        {activeTab === 'profile' && (
        <>
        <div className="info-section">
          <h3>Personal Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <label>Full Name</label>
              {isEditing ? (
                <input 
                  type="text" 
                  value={userData.fullName} 
                  onChange={(e) => handleInputChange(e, 'personal', 'fullName')} 
                  className="edit-input"
                />
              ) : (
                <p>{userData.fullName}</p>
              )}
            </div>
            <div className="info-item">
              <label>Email Address</label>
              {isEditing ? (
                <input 
                  type="email" 
                  value={userData.email} 
                  onChange={(e) => handleInputChange(e, 'personal', 'email')} 
                  className="edit-input"
                />
              ) : (
                <p>{userData.email}</p>
              )}
            </div>
            <div className="info-item">
              <label>Phone Number</label>
              {isEditing ? (
                <input 
                  type="tel" 
                  value={userData.phone} 
                  onChange={(e) => handleInputChange(e, 'personal', 'phone')} 
                  className="edit-input"
                />
              ) : (
                <p>{userData.phone}</p>
              )}
            </div>
          </div>
        </div>

        <div className="info-section">
          <h3>Address Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <label>Street Address</label>
              {isEditing ? (
                <input 
                  type="text" 
                  value={userData.address.street} 
                  onChange={(e) => handleInputChange(e, 'address', 'street')} 
                  className="edit-input"
                />
              ) : (
                <p>{userData.address.street}</p>
              )}
            </div>
            <div className="info-item">
              <label>City</label>
              {isEditing ? (
                <input 
                  type="text" 
                  value={userData.address.city} 
                  onChange={(e) => handleInputChange(e, 'address', 'city')} 
                  className="edit-input"
                />
              ) : (
                <p>{userData.address.city}</p>
              )}
            </div>
            <div className="info-item">
              <label>State</label>
              {isEditing ? (
                <input 
                  type="text" 
                  value={userData.address.state} 
                  onChange={(e) => handleInputChange(e, 'address', 'state')} 
                  className="edit-input"
                />
              ) : (
                <p>{userData.address.state}</p>
              )}
            </div>
            <div className="info-item">
              <label>ZIP Code</label>
              {isEditing ? (
                <input 
                  type="text" 
                  value={userData.address.zip} 
                  onChange={(e) => handleInputChange(e, 'address', 'zip')} 
                  className="edit-input"
                />
              ) : (
                <p>{userData.address.zip}</p>
              )}
            </div>
            <div className="info-item">
              <label>Country</label>
              {isEditing ? (
                <input 
                  type="text" 
                  value={userData.address.country} 
                  onChange={(e) => handleInputChange(e, 'address', 'country')} 
                  className="edit-input"
                />
              ) : (
                <p>{userData.address.country}</p>
              )}
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="form-actions">
            <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
            <button className="save-btn" onClick={handleSaveChanges}><i className="save-icon"></i> Save Changes</button>
            <div className="form-help-text">All changes will be saved immediately</div>
          </div>
        )}
        </>
        )}

        {activeTab === 'properties' && (
          <MyProperties />
        )}

        {activeTab === 'analytics' && (
          <Analytics />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;