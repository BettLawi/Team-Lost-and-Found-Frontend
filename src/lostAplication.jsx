import React, { useState } from 'react';
import './lostAplication.css'; // Replace with your CSS file

const ApplicationFormLost = () => {
  const [lostItem, setLostItem] = useState('');
  const [image, setImage] = useState('');
  const [Description, setDescription] = useState('');
  const [Reward, setReward] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    if (!lostItem || !image || !Description) {
      alert('Please fill in all required fields.');
      return;
    }

    // Submit the form data
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Fill the application for lost item</h2>

      <div className="input-group">
        <label htmlFor="lostItem">Lost Item *</label>
        <input
          type="text"
          id="lostItem"
          value={lostItem}
          onChange={(e) => setLostItem(e.target.value)}
          placeholder="E.g., Wallet, Keys, Phone, etc."
        />
      </div>

      <div className="input-group">
        <label htmlFor="image">Image of the Lost Item *</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
          placeholder="Select an image file"
        />
      </div>

      <div className="input-group">
        <label htmlFor="Description">Description of the Item *</label>
        <input
          type="text"
          id="Description"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Provide a detailed description of the lost item"
        />
      </div>

      <div className="input-group">
        <label htmlFor="Reward">Reward when found *</label>
        <input
          type="number"
          id="Reward"
          value={Reward}
          onChange={(e) => setReward(e.target.value)}
          placeholder="Enter the reward amount (if applicable)"
        />
      </div>

      <button type="submit">Send Application</button>
    </form>
  );
};

export default ApplicationFormLost;
