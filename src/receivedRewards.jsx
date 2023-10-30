import React, { useState, useEffect } from 'react';
import './lostItems.css';
import Navbar from './Navbar';

function ReturnedItems() {
  const [returnedItems, setReturnedItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/receivedRewards') // Replace 'https://example.com/returned-items' with your API endpoint or local file
      .then((response) => response.json())
      .then((data) => {
        setReturnedItems(data);
      })
      .catch((error) => {
        console.error('Error fetching returned items:', error);
        // Handle errors as needed
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='lostItems'>
      <Navbar />
      <div className="cards-container">
        {returnedItems.map((data, index) => (
          <div className="card" key={index}>
            <h3>Lost Item: {data.lostItem}</h3>
            <h3>Reward - : ${data.reward}</h3>
            <img src={data.image} alt="none" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReturnedItems;
