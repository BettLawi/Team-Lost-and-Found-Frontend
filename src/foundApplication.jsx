import React, { useState } from 'react';
import './foundApplication.css'; // Replace with your CSS file

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
    <div className="backGround">
      <form onSubmit={handleSubmit}>
        <h2>Fill the application for found item</h2>
        <div className="bottom">
          <div className="input-group">
            <label htmlFor="foundItem">Found Item *</label>
            <input
              type="text"
              id="foundItem"
              value={foundItem}
              onChange={(e) => setFoundItem(e.target.value)}
              placeholder="E.g., Keys, Wallet, Sunglasses, etc."
            />
          </div>

          <div className="input-group">
            <label htmlFor="image">Image of the Found Item *</label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              placeholder="Select an image file"
            />
          </div>

          <div className="input-group">
            <label htmlFor="category">Category of the Item *</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="E.g., Electronics, Accessories, Clothing, etc."
            />
          </div>

          <button type="submit">Send Application</button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
