import React, { useState } from 'react';
import './addItems.css';
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
  }
  // Add more data if needed...
];

function AddItems() {
  const [foundItems, setFoundItems] = useState(fakeFoundData);
  const [addedItems, setAddedItems] = useState(new Array(fakeFoundData.length).fill(false));

  const handleUpdateDetails = (index) => {
    const updatedItems = [...foundItems];
    // Prompt the user for new details (for simplicity, you might use a modal or form for this)
    const newFoundItem = prompt("Enter new item name:", updatedItems[index].foundItem);
    const newImage = prompt("Enter new image URL:", updatedItems[index].image);

    if (newFoundItem && newImage) {
      updatedItems[index].foundItem = newFoundItem;
      updatedItems[index].image = newImage;
      setFoundItems(updatedItems);
    }
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
