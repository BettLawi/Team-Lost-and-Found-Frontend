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
    // Your existing logic for updating details remains the same
    // ...
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
