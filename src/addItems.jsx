import React, { useState, useEffect } from 'react';
import './addItems.css';
import Navbar from './Navbar';

function AddItems() {
  const [foundItems, setFoundItems] = useState([]);
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    // Fetch data from db.json when the component mounts
    fetch('http://localhost:5000/addItems') // Replace URL with your JSON server endpoint
      .then(response => response.json())
      .then(data => {
        setFoundItems(data);
        setAddedItems(new Array(data.length).fill(false));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const handleUpdateDetails = (index) => {
    const newFoundItems = [...foundItems];
    const updatedItem = { ...newFoundItems[index] };
  
    const updatedCategory = window.prompt('Enter updated category:', updatedItem.category);
    const updatedFoundItem = window.prompt('Enter updated found item:', updatedItem.foundItem);
    const updatedImage = window.prompt('Enter updated image URL:', updatedItem.image);
  
    // Check if the user entered a value and update the item
    if (updatedCategory !== null) {
      updatedItem.category = updatedCategory;
    }
  
    if (updatedFoundItem !== null) {
      updatedItem.foundItem = updatedFoundItem;
    }
  
    if (updatedImage !== null) {
      updatedItem.image = updatedImage;
    }
  
    newFoundItems[index] = updatedItem;
  
    setFoundItems(newFoundItems);
  };
  

  const handleAddClick = (index) => {
    setAddedItems(prevState => {
      const newAddedItems = [...prevState];
      newAddedItems[index] = true;
      return newAddedItems;
    });
  };

  return (
    <div className='addItems'>
      <Navbar />
      <div className='FoundItem-card'>
        {foundItems.map((data, index) => (
          <div className='card' key={index}>
            <p>Category: {data.category}</p>
            <h3>Found Item: {data.foundItem}</h3>
            <button onClick={() => handleAddClick(index)}>{addedItems[index] ? "Item added" : "Add item"}</button>
            <button onClick={() => handleUpdateDetails(index)}>Update Details</button>
            <img src={data.image} alt="none" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddItems;
