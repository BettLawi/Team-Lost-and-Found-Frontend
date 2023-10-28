import React, { useState } from 'react';
import './FoundItems.css';
import Navbar from './Navbar';

const fakeFoundData = [
    {
        foundItem: "Sunglasses",
        category: "Accessories",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarfR-J5au89P25lM29WOotgfsjBJxk3sfiK3yAH5STGSXAecdyRupzJ0dFJkioc7ohl4&usqp=CAU"
      },
      {
        foundItem: "Wallet",
        category: "Accessories",
        image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/3300101/1.jpg?4787"
      },
      {
        foundItem: "Phone",
        category: "Electronics",
        image: "https://www.91-img.com/gallery_images_uploads/0/0/006f0e18ed68367a72fda211640be822ebc621f2.JPG?tr=h-630,c-at_max,q-80"
      },
      {
        foundItem: "Backpack",
        category: "Accessories",
        image: "https://textbookcentre.com/media/cache/b0/4a/b04ace3325303f9dc49d9c8f4a46df62.jpg"
      },

 
];



function FoundItems() {
  const [commentsVisible, setCommentsVisible] = useState(Array(fakeFoundData.length).fill(false));
  const [claimedItem, setClaimedItem] = useState(null);

  const toggleComments = (index) => {
    const updatedCommentsVisible = [...commentsVisible];
    updatedCommentsVisible[index] = !updatedCommentsVisible[index];
    setCommentsVisible(updatedCommentsVisible);
  };

  const claimItem = (itemIndex) => {
    setClaimedItem(itemIndex);
    // Additional logic for claiming an item can go here
  };

  return (
    <div className='foundItems'>
      <Navbar />
      <div className='FoundItem-card'>
        {fakeFoundData.map((data, index) => (
          <div className='card' key={index}>
            <p>Category: {data.category}</p>
            <h3>Found Item: {data.foundItem}</h3>
            <button onClick={() => claimItem(index)} disabled={claimedItem === index}>
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
                <p>Comment 1</p>
                <p>Comment 2</p>
                {/* Add your comment mapping logic here */}
              </div>
            </div>
            
            <img src={data.image} alt={`Image of ${data.foundItem}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoundItems;
