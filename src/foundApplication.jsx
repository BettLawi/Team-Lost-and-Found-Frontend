import React, { useState } from 'react';
import './foundApplication.css'

const ApplicationForm = () => {
  const [foundItem, setFoundItem] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    if (!foundItem || !image || !category) {
      alert('Please fill in all required fields.');
      return;
    }

    // Submit the form data
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Fill the application for found item</h2>

      <div className="input-group">
        <label htmlFor="foundItem">Found Item *</label>
        <input type="text" id="foundItem" value={foundItem} onChange={(e) => setFoundItem(e.target.value)} />
      </div>

      <div className="input-group">
        <label htmlFor="image">Image of the Found Item *</label>
        <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} />
      </div>

      <div className="input-group">
        <label htmlFor="category">Category of the Item *</label>
        <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>

      <button type="submit">Send Application</button>
    </form>
  );
};

export default ApplicationForm;
