import React, { useState, useEffect } from 'react';
import './lostItems.css';
import Navbar from './Navbar';

function ReturnedItems() {
  const [itemsData, setItemsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/lost&found/returned_items');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setItemsData(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      }
    };

    fetchData();
  }, []);

  return (
    <div className='lostItems'>
      
      <Navbar />
      {error && <p>{error}</p>}
      
      <div className="cards-container">
        
        {itemsData.map((data, index) => (
          <div className="card" key={index}>
            <h3>Lost Item: {data.item_name}</h3>
            <p>Description: {data.item_description}</p>
            <img src={data.image_url} alt="none" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReturnedItems;
