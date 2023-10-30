import React, { useState, useEffect } from 'react';
import './lostItems.css';
import Navbar from './Navbar';

function ReturnedItems() {
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/returnedItems'); // Replace 'https://your-api-url.com/items' with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setItemsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='lostItems'>
      <Navbar />
      <div className="cards-container">
        {itemsData.map((data, index) => (
          <div className="card" key={index}>
            <p>Reward: ${data.reward}</p>
            <h3>Lost Item: {data.lostItem}</h3>
            <p>Description: {data.description}</p>
            <img src={data.image} alt="none" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReturnedItems;
