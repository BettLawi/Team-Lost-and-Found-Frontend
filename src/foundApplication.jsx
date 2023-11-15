import React, { useState, useEffect } from 'react';
import './foundApplication.css'; // Replace with your CSS file
import Swal from "sweetalert2";
const ApplicationForm = () => {
  const [item_name, setItemName] = useState('');
  const [item_description, setItemDescription] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [userId, setUserId] = useState('');
  const [role,setRole] = useState('');


  useEffect(() => {
    const getTokenPayload = (token) => {
      const [, payload] = token.split('.');
      return JSON.parse(atob(payload));
    };

    // Retrieve token from local storage
    const token = localStorage.getItem('token');

    if (token) {
      const payload = getTokenPayload(token);

      const id = payload.sub.id // Extract user id
      const Role = payload.sub.role
      
     
        setUserId(id);
        setRole(Role)
  
      
    } else {
      alert('Token not found in local storage. Please log in.');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

   

    if (!item_name || !image_url || !item_description || !category) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log('Data before submission:', { item_name, image_url, item_description, category, userId });
    console.log(role)

    const formData = {
      item_name,
      image_url,
      item_description,
      user_reported_id: userId, // Set the user's ID in the reported item data
      category,
    };

    try {
      const response = await fetch('https://lost-backend.onrender.com/lost&found/reportfounditem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      

      if (response.ok) {
        Swal.fire({
          icon: "success",
          
          title: "Success!",
          text: "Found item reported successfully. Awaiting admin approval",
        })
        
        // Reset form fields upon successful submission
        setItemName('');
        setItemDescription('');
        setImageUrl('');
        setCategory('');
      } else {
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

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
