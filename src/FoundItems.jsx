import React, { useState, useEffect } from 'react';
import './FoundItems.css';
import Navbar from './Navbar';

function FoundItems() {
  const [foundItems, setFoundItems] = useState([]);
  const [commentsVisible, setCommentsVisible] = useState([]);
  const [claimedItem, setClaimedItem] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5555/lost&found/found_items')
      .then(response => response.json())
      .then(data => {
        console.log('Received Data:', data); // Log the received data
        setFoundItems(data.found_items || []); // Update state with fetched data
        setCommentsVisible(new Array(data.found_items?.length || 0).fill(false));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle errors as needed
      });
  }, []);
  

  const toggleComments = (index) => {
    const updatedCommentsVisible = [...commentsVisible];
    updatedCommentsVisible[index] = !updatedCommentsVisible[index];
    setCommentsVisible(updatedCommentsVisible);
  };

  const claimItem = (itemIndex) => {
    setClaimedItem(itemIndex);
    // Additional logic for claiming an item can go here
  };
  const handleSubmit = (e, item) => {
    e.preventDefault();
  
    if (!item) {
      alert("Please select an item before claiming.");
      return;
    }
  
    fetch('http://127.0.0.1:5555/lost&found/claimitem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item_name: item.item_name, user_id: item.user_reported_id ,image_url: item.image_url,item_description: item.item_description, status: status})
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
    })
    .catch(error => console.error('Error:', error));
  };


  return (
    <div className='foundItems'>
      <Navbar />
      <div className='FoundItem-card'>
        
        {foundItems.map((data, index) => (
          <div className='card' key={index}>
            <p>Category: {data.categories}</p>
            <h3>Found Item: {data.item_name}</h3>
            <button onClick={(e) => {
              claimItem(index);
              handleSubmit(e, data);
              }} disabled={claimedItem === index}>
                {claimedItem === index ? 'Item Claimed' : 'Claim Yours'}
            </button>

            <button onClick={() => toggleComments(index)}>
              {commentsVisible[index] ? 'Hide Comments' : 'Show Comments'}
            </button>

            <div className="commentSection" style={{ display: commentsVisible[index] ? 'block' : 'none' }}>
              <input type="text" placeholder="Add a comment" className="commentInput" />
              <button className="postCommentButton">Post Comment</button>
              <div className="commentList">
                {/* Sample comment list rendering logic */}
                <p>I think i know the owner</p>
                <p>good of you.</p>
                {/* Add your comment mapping logic here */}
              </div>
            </div>

            <img src={data.image_url} alt={`Image of ${data.foundItem}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoundItems;

