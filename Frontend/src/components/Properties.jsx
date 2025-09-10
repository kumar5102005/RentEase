import React, { useState } from 'react';
import './Properties.css';

const Properties = () => {
  // Mock property data
  const [properties, setProperties] = useState([
    // Add liked property to each property object
    ...[
      
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
      availability: 'Not Available',
      liked: false
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
      liked: false
    },
    {
      id: 3,
      title: 'Luxury Penthouse Suite',
      address: '350 Park Place, Upper East Side, NY 10021',
      price: '$7,500/mo',
      beds: 3,
      baths: 3,
      sqft: 2100,
      tags: ['Luxury', 'Doorman', 'Gym'],
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
      liked: false
    },
    {
      id: 4,
      title: 'Family House in Queens',
      address: '123 Main Street, Queens, NY 11375',
      price: '$3,200/mo',
      beds: 4,
      baths: 2,
      sqft: 1800,
      tags: ['Backyard', 'Garage', 'Pets Allowed'],
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop',
      liked: false
    },
    {
      id: 5,
      title: 'Modern Downtown Apartment',
      address: '123 Main Street, Downtown, NY 10001',
      price: '$3,200/mo',
      beds: 2,
      baths: 2,
      sqft: 1100,
      tags: ['Modern', 'Gym', 'Parking'],
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop',
      liked: false
    },
    {
      id: 6,
      title: 'Cozy Studio in Brooklyn',
      address: '456 Park Avenue, Brooklyn, NY 11201',
      price: '$2,000/mo',
      beds: 1,
      baths: 1,
      sqft: 650,
      tags: ['Cozy', 'Pets Allowed', 'Utilities Included'],
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop',
      liked: false
    }
    ]
  ]);

  // Toggle like status for a property
  const toggleLike = (id) => {
    setProperties(properties.map(property => 
      property.id === id ? { ...property, liked: !property.liked } : property
    ));
  };

  // Filter states
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
    beds: '',
    baths: '',
    area: ''
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      location: '',
      propertyType: '',
      priceRange: '',
      beds: '',
      baths: '',
      area: ''
    });
  };

  return (
    <div className="properties-container">
      <div className="properties-header">
        <h1>Find Your Perfect Rental</h1>
        <p>Discover thousands of quality rental properties in your desired location</p>
      </div>
      
      <div className="properties-content">
        <div className="filters-sidebar">
          <div className="filters-header">
            <h3>Filters</h3>
            <button className="clear-all" onClick={clearFilters}>Clear all</button>
          </div>
          
          <div className="filter-section">
            <h4>Location</h4>
            <input 
              type="text" 
              placeholder="City, neighborhood, or address" 
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
            />
          </div>
          
          <div className="filter-section">
            <h4>Property Type</h4>
            <select 
              name="propertyType" 
              value={filters.propertyType}
              onChange={handleFilterChange}
            >
              <option value="">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
              <option value="studio">Studio</option>
            </select>
          </div>
          
          <div className="filter-section">
            <h4>Price Range</h4>
            <select 
              name="priceRange" 
              value={filters.priceRange}
              onChange={handleFilterChange}
            >
              <option value="">Any Price</option>
              <option value="0-1500">$0 - $1,500</option>
              <option value="1500-3000">$1,500 - $3,000</option>
              <option value="3000-5000">$3,000 - $5,000</option>
              <option value="5000+">$5,000+</option>
            </select>
          </div>
          
          <div className="filter-section">
            <h4>Bedrooms</h4>
            <select 
              name="beds" 
              value={filters.beds}
              onChange={handleFilterChange}
            >
              <option value="">Any</option>
              <option value="1">1+ bed</option>
              <option value="2">2+ beds</option>
              <option value="3">3+ beds</option>
              <option value="4">4+ beds</option>
            </select>
          </div>
          
          <div className="filter-section">
            <h4>Bathrooms</h4>
            <select 
              name="baths" 
              value={filters.baths}
              onChange={handleFilterChange}
            >
              <option value="">Any</option>
              <option value="1">1+ bath</option>
              <option value="2">2+ baths</option>
              <option value="3">3+ baths</option>
            </select>
          </div>
          
          <div className="filter-section">
            <h4>Area (sq ft)</h4>
            <div className="range-inputs">
              <input 
                type="text" 
                placeholder="Min" 
                name="minArea"
                onChange={handleFilterChange}
              />
              <span>-</span>
              <input 
                type="text" 
                placeholder="Max" 
                name="maxArea"
                onChange={handleFilterChange}
              />
            </div>
          </div>
          
          <div className="filter-section">
            <h4>Amenities</h4>
            <div className="amenities-list">
              <label className="checkbox-label">
                <input type="checkbox" name="amenity-parking" />
                Parking
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="amenity-pool" />
                Pool
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="amenity-gym" />
                Gym
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="amenity-elevator" />
                Elevator
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="amenity-balcony" />
                Balcony
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="amenity-pets" />
                Pets Allowed
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="amenity-furnished" />
                Furnished
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="amenity-garden" />
                Garden
              </label>
            </div>
          </div>
          
          <button className="apply-filters">Apply Filters</button>
        </div>
        
        <div className="properties-results">
          <div className="results-header">
            <h3>{properties.length} Properties Found</h3>
            <div className="sort-by">
              <label>Sort by:</label>
              <select>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Bedrooms</option>
                <option>Bathrooms</option>
                <option>Square Feet</option>
              </select>
            </div>
          </div>
          
          <div className="property-cards">
            {properties.map(property => (
              <div className="property-card" key={property.id}>
                <div className="property-image">
                  <img src={property.image} alt={property.title} />
                  <div className="property-price">{property.price}</div>
                  {property.availability && (
                    <div className="property-availability">{property.availability}</div>
                  )}
                  <button 
                    className="like-button" 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(property.id);
                    }}
                    aria-label={property.liked ? "Unlike property" : "Like property"}
                  >
                    {property.liked ? "❤️" : "🤍"}
                  </button>
                </div>
                <div className="property-details">
                  <h3>{property.title}</h3>
                  <p className="property-address">
                    <span className="location-icon">📍</span> {property.address}
                  </p>
                  <div className="property-features">
                    <span><i className="icon-bed"></i> {property.beds} bed</span>
                    <span><i className="icon-bath"></i> {property.baths} bath</span>
                    <span><i className="icon-size"></i> {property.sqft} sq ft</span>
                  </div>
                  <div className="property-tags">
                    {property.tags.map((tag, index) => (
                      <span className="tag" key={index}>{tag}</span>
                    ))}
                  </div>
                  <div className="property-actions">
                    <button className="view-details">View Details</button>
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

export default Properties;