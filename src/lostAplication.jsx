import React, { useState } from 'react';
import './lostAplication.css'; // Replace with your CSS file

const ApplicationFormLost = () => {
  const [lostItem, setLostItem] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [reward, setReward] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!lostItem || !image || !description || !reward) {
      alert('Please fill in all required fields.');
      return;
    }

    const formData = new FormData();
    formData.append('id', Math.floor(Math.random() * 1000)); // Assign a random ID, or use a different method to ensure unique IDs
    formData.append('lostItem', lostItem);
    formData.append('image', image);
    formData.append('description', description);
    formData.append('reward', reward);

    try {
      const response = await fetch('http://localhost:5000/lostItems', {
        method: 'POST',
        body: formData,
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

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
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
        <label htmlFor="image">Image of the Lost Item *</label>
        <input
          type="file"
          id="image"
          onChange={handleImageChange}
          placeholder="Select an image file"
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
