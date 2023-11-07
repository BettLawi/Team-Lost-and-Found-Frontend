import React, { useState, useEffect } from 'react';
import './lostItems.css';
import Navbar from './Navbar';

function LostItems() {
  const [lostItems, setLostItems] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/lost&found/lostitems') // Replace 'https://example.com/lost-items' with your API endpoint or local file
      .then((response) => response.json())
      .then((data) => {
        setLostItems(data);
      })
      .catch((error) => {
        console.error('Error fetching lost items:', error);
        // Handle errors as needed
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='lostItems'>
      <Navbar />
      <div className="cards-container">
        {lostItems.map((data, index) => (
          <div className="card" key={index}>
            <button id='deleteBtn'>X</button>
            <p>Reward - : ${data.reward}</p>
            <h3>Lost Item: {data.item_name}</h3>
            <p>Description: {data.item_description}</p>
            <img src={data.image_url} alt="none" />
            <button>Approve Item</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LostItems;
