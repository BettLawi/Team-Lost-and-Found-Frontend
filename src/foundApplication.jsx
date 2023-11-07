import React, { useState } from 'react';
import './foundApplication.css'; // Replace with your CSS file

const ApplicationForm = () => {
  const [item_name, setItemName] = useState('');
  const [item_description, setItemDescription] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [user_reported_id, setUserId] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data
    if (!item_name || !image_url || !item_description || !user_reported_id || !category) {
      alert('Please fill in all required fields.');
      return;
    }

    const formData = {
      item_name,
      image_url,
      item_description,
      user_reported_id,
      category,
    };

    try {
      // Make the POST request using fetch
      const response = await fetch('http://127.0.0.1:5555/lost&found/reportfounditem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        alert('Found item reported successfully. Awaiting admin approval.');
      } else {
        // Handle the error
        alert('Error reporting found item');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while reporting the found item.');
    }
  };

  return (
    <div className="backGround">
      <form onSubmit={handleSubmit}>
        <h1>Report Found Item</h1>
        <div className="bottom">
          <div className="input-group">
            <label htmlFor="itemName">Item Name *</label>
            <input
              type="text"
              id="itemName"
              value={item_name}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="E.g., Keys, Wallet, Sunglasses, etc."
            />
          </div>

          <div className="input-group">
            <label htmlFor="imageUrl">Image URL *</label>
            <input
              type="text"
              id="imageUrl"
              value={image_url}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter the image URL"
            />
          </div>

          <div className="input-group">
            <label htmlFor="category">Category *</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter the category"
            />
          </div>

          <div className="input-group">
            <label htmlFor="itemDescription">Item Description *</label>
            <input
              type="text"
              id="itemDescription"
              value={item_description}
              onChange={(e) => setItemDescription(e.target.value)}
              placeholder="Enter item description"
            />
          </div>

          <div className="input-group">
            <label htmlFor="userId">User ID *</label>
            <input
              type="number"
              id="userId"
              value={user_reported_id}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your user ID"
            />
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
