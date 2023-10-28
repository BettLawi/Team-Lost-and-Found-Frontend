import React from 'react';
import './lostItems.css';
import Navbar from './Navbar';

const fakeFormData = [
  {
    lostItem: "Wallet",
    description: "A brown leather wallet with initials 'JK' on the front. It has multiple compartments for cards, a zippered coin pouch, and a separate bill compartment.",
    reward: 50,
    image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/3300101/1.jpg?4787"
  },
  {
    lostItem: "Keys",
    description: "A set of house keys with a blue keychain. Includes a car key, house key, and mailbox key. The keychain has a small decorative teddy bear.",
    reward: 20,
    image: "https://media.istockphoto.com/id/1315317947/photo/house-keys-with-house-shaped-keychain-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=2azrgzThFd2vTCkMvqKe6p89_dlvwN3Mni4hoTCcFlU="
  },
  {
    lostItem: "Mobile Phone",
    description: "A black Samsung phone with a cracked screen. The phone has a protective case with a pattern of cute cats and dogs.",
    reward: 100,
    image: "https://www.91-img.com/gallery_images_uploads/0/0/006f0e18ed68367a72fda211640be822ebc621f2.JPG?tr=h-630,c-at_max,q-80"
  },
  {
    lostItem: "Backpack",
    description: "A red backpack, medium-sized, with a front pocket and two side mesh pockets. Contains a 15-inch silver laptop with a black case and several academic books. The backpack also holds a scientific calculator, a green water bottle, and a pair of sunglasses.",
    reward: 80,
    image: "https://textbookcentre.com/media/cache/b0/4a/b04ace3325303f9dc49d9c8f4a46df62.jpg"
  },
  {
    lostItem: "Sunglasses",
    description: "Classic aviator style sunglasses with a black frame and dark tinted lenses, kept in a black leather case with a magnetic closure. The sunglasses have scratch marks on the right lens.",
    reward: 30,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarfR-J5au89P25lM29WOotgfsjBJxk3sfiK3yAH5STGSXAecdyRupzJ0dFJkioc7ohl4&usqp=CAU"
  }
  // Add more fake data entries as needed...
];

function LostItems() {
  return (
    <div className='lostItems'>
      <Navbar />
      <div className="cards-container">
        {fakeFormData.map((data, index) => (
          <div className="card" key={index}>
            <button id='deleteBtn '> X</button>
            <p>Reward - : ${data.reward}</p>
            <h3>Lost Item: {data.lostItem}</h3>
            
            <p>Description: {data.description}</p>
            
            <img src={data.image} alt="none" />
            <button>Approve Item</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LostItems;
