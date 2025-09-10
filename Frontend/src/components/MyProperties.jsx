import React from 'react';
import './MyProperties.css';

const mockProperties = [
  {
    id: 1,
    title: 'Luxury Downtown Loft',
    address: '789 Broadway, Manhattan, NY 10003',
    beds: 2,
    baths: 2,
    sqft: 1600,
    price: '$4,500/mo',
    status: 'Active',
    stats: { views: 245, inquiries: 12, featured: true, days: 587 },
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Cozy Brooklyn Apartment',
    address: '123 Park Slope, Brooklyn, NY 11215',
    beds: 1,
    baths: 1,
    sqft: 800,
    price: '$2,800/mo',
    status: 'Rented',
    stats: { views: 189, inquiries: 8, featured: false, days: 599 },
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f?q=80&w=1200&auto=format&fit=crop'
  }
];

const StatBox = ({ label, value, sublabel }) => (
  <div className="stat-box">
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
    {sublabel && <div className="stat-sublabel">{sublabel}</div>}
  </div>
);

const PropertyCard = ({ property }) => (
  <div className="property-card">
    <div className="property-media">
      <img src={property.image} alt={property.title} />
    </div>
    <div className="property-body">
      <div className="property-header">
        <h4 className="property-title">{property.title}</h4>
        <div className="property-right">
          <div className="property-price">{property.price}</div>
          <span className={`badge ${property.status === 'Active' ? 'success' : 'neutral'}`}>{property.status}</span>
        </div>
      </div>
      <div className="property-address"><span className="ico location"/> {property.address}</div>
      <div className="property-meta">
        <span className="meta-item"><span className="ico bed"/> {property.beds} bed</span>
        <span className="meta-item"><span className="ico bath"/> {property.baths} bath</span>
        <span className="meta-item"><span className="ico sqft"/> {property.sqft} sqft</span>
      </div>

      <div className="property-stats">
        <StatBox label="Views" value={property.stats.views} />
        <StatBox label="Inquiries" value={property.stats.inquiries} />
        <StatBox label="Featured" value={property.stats.featured ? 'Yes' : 'No'} />
        <StatBox label="Days Listed" value={property.stats.days} />
      </div>

      <div className="property-actions">
        <button className="btn outline"><span className="ico link"/> View Listing</button>
        <button className="btn outline"><span className="ico edit"/> Edit</button>
        <button className="btn outline analytics-btn"><span className="ico analytics"/> Analytics</button>
        <button className="btn outline"><span className="ico pause"/> Pause</button>
      </div>
    </div>
  </div>
);

const MyProperties = () => {
  return (
    <div className="my-properties">
      <div className="list-header">
        <h3>My Listed Properties</h3>
        <button className="btn primary"><span className="ico">＋</span> Add New Property</button>
      </div>
      <div className="property-list">
        {mockProperties.map(p => (
          <div className="property-item" key={p.id}>
            <PropertyCard property={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProperties;


