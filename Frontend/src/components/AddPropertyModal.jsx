import React, { useState } from 'react';
import './AddPropertyModal.css';

const AddPropertyModal = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState({
    title: '',
    type: '',
    rent: '',
    bedrooms: '',
    bathrooms: '',
    sqft: '1200',
    description: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    availableDate: '',
    leaseTerm: '',
    petPolicy: '',
    parking: '',
    furnished: '',
    utilities: '',
    contactEmail: '',
    contactPhone: ''
  });

  const update = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
    onClose();
  };

  return (
    <div className="ap-overlay" onClick={onClose}>
      <div className="ap-dialog" onClick={(e) => e.stopPropagation()} style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        <button className="ap-close" onClick={onClose}>×</button>
        <div className="ap-hero">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="3" y="3" width="18" height="14" rx="2" ry="2"></rect>
            <path d="M3 13l4-4 4 4 4-4 4 4"></path>
            <path d="M8 21h8"></path>
          </svg>
        </div>
        <div className="ap-title">List Your Property</div>
        <div className="ap-subtitle">Add your property details to start receiving inquiries from potential tenants</div>

        <form onSubmit={submit}>
          <div className="ap-grid">
            <div className="ap-field" style={{ gridColumn: '1 / span 2' }}>
              <label>Property Title *</label>
              <input name="title" placeholder="e.g., Modern 2BR Apartment in Downtown" value={form.title} onChange={update} required />
            </div>
            <div className="ap-field">
              <label>Property Type *</label>
              <select name="type" value={form.type} onChange={update} required>
                <option value="">Select property type</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
                <option>Townhouse</option>
                <option>Studio</option>
              </select>
            </div>
            <div className="ap-field">
              <label>Monthly Rent *</label>
              <input name="rent" type="number" placeholder="2500" value={form.rent} onChange={update} required />
            </div>
            <div className="ap-field">
              <label>Bedrooms *</label>
              <select name="bedrooms" value={form.bedrooms} onChange={update} required>
                <option value="">Select bedrooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>
            <div className="ap-field">
              <label>Bathrooms *</label>
              <select name="bathrooms" value={form.bathrooms} onChange={update} required>
                <option value="">Select bathrooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>
            <div className="ap-field" style={{ gridColumn: '1 / span 2' }}>
              <label>Square Footage</label>
              <input name="sqft" value={form.sqft} onChange={update} />
            </div>

            <div className="ap-field" style={{ gridColumn: '1 / span 2' }}>
              <label>Property Description *</label>
              <textarea name="description" placeholder="Describe your property, key features and nearby amenities..." value={form.description} onChange={update} rows={4} required />
            </div>

            <div className="ap-field" style={{ gridColumn: '1 / span 2', marginTop: 6 }}>
              <label className="ap-section-title">Location</label>
            </div>
            <div className="ap-field" style={{ gridColumn: '1 / span 2' }}>
              <label>Street Address *</label>
              <input name="street" placeholder="123 Main Street, Apt 4B" value={form.street} onChange={update} required />
            </div>
            <div className="ap-field">
              <label>City *</label>
              <input name="city" value={form.city} onChange={update} required />
            </div>
            <div className="ap-field">
              <label>State/Province *</label>
              <input name="state" value={form.state} onChange={update} required />
            </div>
            <div className="ap-field">
              <label>ZIP/Postal Code *</label>
              <input name="zip" value={form.zip} onChange={update} required />
            </div>
            <div className="ap-field">
              <label>Country *</label>
              <input name="country" value={form.country} onChange={update} required />
            </div>

            <div className="ap-field">
              <label>Available Date</label>
              <input name="availableDate" placeholder="dd-mm-yyyy" value={form.availableDate} onChange={update} />
            </div>
            <div className="ap-field">
              <label>Lease Term</label>
              <select name="leaseTerm" value={form.leaseTerm} onChange={update}>
                <option value="">Select lease term</option>
                <option>6 Months</option>
                <option>12 Months</option>
                <option>24 Months</option>
                <option>Month to Month</option>
              </select>
            </div>
            <div className="ap-field">
              <label>Pet Policy</label>
              <select name="petPolicy" value={form.petPolicy} onChange={update}>
                <option value="">Select pet policy</option>
                <option>No Pets</option>
                <option>PETS OK</option>
                <option>Small Pets</option>
              </select>
            </div>
            <div className="ap-field">
              <label>Parking</label>
              <select name="parking" value={form.parking} onChange={update}>
                <option value="">Select parking option</option>
                <option>Street</option>
                <option>Garage</option>
                <option>Covered</option>
              </select>
            </div>
            <div className="ap-field">
              <label>Furnished</label>
              <select name="furnished" value={form.furnished} onChange={update}>
                <option value="">Select furnishing</option>
                <option>Unfurnished</option>
                <option>Semi-furnished</option>
                <option>Fully furnished</option>
              </select>
            </div>
            <div className="ap-field">
              <label>Utilities Included</label>
              <input name="utilities" placeholder="e.g., Water, Electricity, Internet" value={form.utilities} onChange={update} />
            </div>

            <div className="ap-field" style={{ gridColumn: '1 / span 2', marginTop: 6 }}>
              <label className="ap-section-title">Contact Information</label>
            </div>
            <div className="ap-field">
              <label>Contact Email *</label>
              <input name="contactEmail" type="email" placeholder="your-email@example.com" value={form.contactEmail} onChange={update} required />
            </div>
            <div className="ap-field">
              <label>Contact Phone</label>
              <input name="contactPhone" placeholder="+1 (555) 123-4567" value={form.contactPhone} onChange={update} />
            </div>
          </div>

          <div className="ap-actions">
            <button type="button" className="ap-btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="ap-btn-primary">List Property</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPropertyModal;


