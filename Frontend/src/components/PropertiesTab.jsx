import React, { useState } from 'react';
import './PropertiesTab.css';

const PropertiesTab = () => {
  // Mock property data
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: 'Historic Brownstone',
      address: '654 Brownstone Ave, Manhattan, NY 10025',
      price: '$4,200/mo',
      beds: 3,
      baths: 2,
      sqft: 2000,
      tags: ['Historic Character', 'Fireplace', 'High Ceilings'],
      image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop',
      availability: 'Not Available'
    },
    {
      id: 2,
      title: 'Waterfront Condo',
      address: '987 Harbor View, Jersey City, NJ 07302',
      price: '$3,800/mo',
      beds: 2,
      baths: 2,
      sqft: 1400,
      tags: ['Water Views', 'Balcony', 'Gym'],
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop',
      availability: ''
    }
  ]);
  
  // Filter states
  const [filters, setFilters] = useState({
    priceRange: '',
    bedrooms: '',
    area: {
      min: '',
      max: ''
    },
    amenities: []
  });

  return (
    <div className="properties-tab">
      <div className="filters-section">
        <h3>Price Range</h3>
        <div className="price-filter">
          <select>
            <option>Any Price</option>
            <option>$0 - $1,500</option>
            <option>$1,500 - $3,000</option>
            <option>$3,000 - $5,000</option>
            <option>$5,000+</option>
          </select>
        </div>
        
        <h3>Bedrooms</h3>
        <div className="bedrooms-filter">
          <select>
            <option>Any Bedrooms</option>
            <option>1+ bed</option>
            <option>2+ beds</option>
            <option>3+ beds</option>
            <option>4+ beds</option>
          </select>
        </div>
        
        <h3>Area (sq ft)</h3>
        <div className="area-filter">
          <div className="area-inputs">
            <input type="text" placeholder="Min" />
            <input type="text" placeholder="Max" />
          </div>
        </div>
        
        <h3>Amenities</h3>
        <div className="amenities-filter">
          <label className="checkbox-label">
            <input type="checkbox" name="gym" />
            Gym
          </label>
          <label className="checkbox-label">
            <input type="checkbox" name="pool" />
            Pool
          </label>
          <label className="checkbox-label">
            <input type="checkbox" name="parking" />
            Parking
          </label>
          <label className="checkbox-label">
            <input type="checkbox" name="pet-friendly" />
            Pet Friendly
          </label>
          <label className="checkbox-label">
            <input type="checkbox" name="balcony" />
            Balcony
          </label>
          <label className="checkbox-label">
            <input type="checkbox" name="garden" />
            Garden
          </label>
        </div>
        
        <button className="apply-filters">Apply Filters</button>
      </div>
      
      <div className="properties-tab-grid">
        {properties.map(property => (
          <div className="property-tab-card" key={property.id}>
            <div className="property-tab-image">
              <img src={property.image} alt={property.title} />
              <div className="property-tab-price">{property.price}</div>
              {property.availability && (
                <div className="property-availability">{property.availability}</div>
              )}
            </div>
            <div className="property-tab-details">
              <h3>{property.title}</h3>
              <p className="property-tab-address">
                <span className="location-icon">📍</span> {property.address}
              </p>
              <div className="property-tab-features">
                <span><i className="icon-bed"></i> {property.beds} bed</span>
                <span><i className="icon-bath"></i> {property.baths} bath</span>
                <span><i className="icon-size"></i> {property.sqft} sq ft</span>
              </div>
              <div className="property-tab-tags">
                {property.tags.map((tag, index) => (
                  <span className="property-tag" key={index}>{tag}</span>
                ))}
              </div>
              <button className="view-details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesTab;