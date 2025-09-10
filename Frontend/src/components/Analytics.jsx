import React from 'react';
import './Analytics.css';

const Analytics = () => {
  // Mock data for analytics
  const analyticsData = {
    totalProperties: 3,
    totalViews: 590,
    totalInquiries: 35,
    monthlyRevenue: 2800,
    propertyStatus: [
      { status: 'Active', count: 1 },
      { status: 'Rented', count: 1 },
      { status: 'Pending', count: 1 }
    ],
    topProperties: [
      { id: 1, title: 'Luxury Downtown Loft', views: 245, inquiries: 12 },
      { id: 2, title: 'Cozy Brooklyn Apartment', views: 188, inquiries: 5 },
      { id: 3, title: 'Modern Studio with Terrace', views: 156, inquiries: 15 }
    ]
  };

  // Calculate percentage for property status
  const totalStatusCount = analyticsData.propertyStatus.reduce((sum, item) => sum + item.count, 0);
  
  return (
    <div className="analytics-container">
      <h3 className="analytics-title">Property Performance Analytics</h3>
      
      <div className="analytics-cards">
        <div className="analytics-card total-properties">
          <div className="card-content">
            <div className="card-label">Total Properties</div>
            <div className="card-value">{analyticsData.totalProperties}</div>
          </div>
          <div className="card-icon property-icon"></div>
        </div>
        
        <div className="analytics-card total-views">
          <div className="card-content">
            <div className="card-label">Total Views</div>
            <div className="card-value">{analyticsData.totalViews}</div>
          </div>
          <div className="card-icon views-icon"></div>
        </div>
        
        <div className="analytics-card total-inquiries">
          <div className="card-content">
            <div className="card-label">Total Inquiries</div>
            <div className="card-value">{analyticsData.totalInquiries}</div>
          </div>
          <div className="card-icon inquiries-icon"></div>
        </div>
        
        <div className="analytics-card monthly-revenue">
          <div className="card-content">
            <div className="card-label">Monthly Revenue</div>
            <div className="card-value">${analyticsData.monthlyRevenue.toLocaleString()}</div>
          </div>
          <div className="card-icon revenue-icon"></div>
        </div>
      </div>
      
      <div className="analytics-details">
        <div className="property-status">
          <h4>Property Status Overview</h4>
          <div className="status-list">
            {analyticsData.propertyStatus.map((item, index) => (
              <div className="status-item" key={index}>
                <div className="status-info">
                  <span className={`status-dot ${item.status.toLowerCase()}`}></span>
                  <span className="status-name">{item.status}</span>
                </div>
                <div className="status-count">
                  <span>{item.count}</span>
                  <span className="status-percent">({Math.round((item.count / totalStatusCount) * 100)}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="top-properties">
          <h4>Top Performing Properties</h4>
          <div className="top-properties-list">
            {analyticsData.topProperties.map((property, index) => (
              <div className="top-property-item" key={property.id}>
                <div className="property-rank">{index + 1}</div>
                <div className="property-info">
                  <div className="property-name">{property.title}</div>
                  <div className="property-stats">
                    <span>{property.views} views</span>
                    <span>•</span>
                    <span>{property.inquiries} inquiries</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;