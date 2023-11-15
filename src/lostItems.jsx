
import React, { useState, useEffect } from 'react';
import './lostItems.css';
import Swal from "sweetalert2";

import Navbar from './Navbar';

function LostItems({role}) {
  const [lostItems, setLostItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    fetch('https://lost-backend.onrender.com/lost&found/lostitems')
      .then((response) => response.json())
      .then((data) => {
        setLostItems(data);
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching lost items:', error);
      });
  }, []);

  const handleSubmit = async (e,item) => {
    e.preventDefault();

   

    

    try {
      const response = await fetch('https://lost-backend.onrender.com/lost&found/claimItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item_name: item.item_name, image_url: item.image_url, item_description: item.item_description, status: 'claimed' }),
      });
      
      if (response.ok) {
        Swal.fire({
          icon: "success",
          
          
          text: " item approved succesfully successfully.",
        })
       
        
        
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://lost-backend.onrender.com/lost&found/lostitems/${id}`, {
        method: 'DELETE',
      });
      setLostItems(lostItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleUpdateDetails = (item) => {
    const newItemName = prompt('Enter the new item name:', item.item_name);
    const newItemDescription = prompt('Enter the new description:', item.item_description);
    const newImageUrl = prompt('Enter the new image URL:', item.image_url);

    if (newItemName && newItemDescription && newImageUrl) {
      const updatedEditItem = {
        id: item.id,
        item_name: newItemName,
        item_description: newItemDescription,
        image_url: newImageUrl,
        reward: item.reward
      };

      setEditItem(updatedEditItem);
      handleSave(updatedEditItem);
    }
  };

  const handleSave = async (updatedEditItem) => {
    try {
      const response = await fetch(`https://lost-backend.onrender.com/lost&found/itemlost/${updatedEditItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEditItem),
      });

      if (response.ok) {
        const updatedItems = lostItems.map((item) => (item.id === updatedEditItem.id ? updatedEditItem : item));
        setLostItems(updatedItems);
        setEditItem(null);
      } else {
        throw new Error('Failed to update the item. Please try again later.');
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };
  
  return (
    <div className='lostItems'>
      <Navbar />
      <div className="cards-container">
        {lostItems.map((data, index) => (
          <div className="card" key={index}>
            {role === 'Admin' && <button id='deleteBtn' onClick={() => handleDelete(data.id)}>X</button>}
            <p>Reward - : ${data.reward}</p>
            <h3>Lost Item: {data.item_name}</h3>
            <p>Description: {data.item_description}</p>
            <img src={data.image_url} alt="none" />
            {role === 'Admin' && (
              <div className='btns'>
                <button id='updateBtn' onClick={() => handleUpdateDetails(data)}>Update Details</button>
                <button onClick={(e) => handleSubmit(e, data)}>Approve Item</button>
                
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LostItems;