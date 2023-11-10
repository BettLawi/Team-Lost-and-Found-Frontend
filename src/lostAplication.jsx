import React, { useState } from 'react';
import './lostAplication.css'; // Replace with your CSS file

const ApplicationFormLost = () => {
  const [lostItem, setLostItem] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [reward, setReward] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!lostItem || !imageUrl || !description || !reward) {
      alert('Please fill in all required fields.');
      return;
    }

    const requestData = {
      item_name: lostItem,
      image_url: imageUrl,
      item_description: description,
      reward: reward,
      user_reported_id: 2, // Replace '2' with the actual user ID
    };

    try {
      const response = await fetch('https://lost-backend.onrender.com/lost&found/itemlost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }
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
        <label htmlFor="imageUrl">Image URL *</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter the image URL"
        />
      </div>

      <div className="input-group">
        <label htmlFor="description">Description of the Item *</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Provide a detailed description of the lost item"
        />
      </div>

      <div className="input-group">
        <label htmlFor="reward">Reward when found *</label>
        <input
          type="number"
          id="reward"
          value={reward}
          onChange={(e) => setReward(e.target.value)}
          placeholder="Enter the reward amount (if applicable)"
        />
      </div>

      <button type="submit">Send Application</button>
    </form>
  );
};

export default ApplicationFormLost;
