import React, { useState } from 'react';
import Navbar from './Navbar';
import './lostAplication.css'; // Replace with your CSS file

const ApplicationFormLost = () => {
  const [item_name, setItemName] = useState('');
  const [item_description, setItemDescription] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [user_reportedby_id, setUserId] = useState(8);
  const [statuss, setStatus] = useState('lost');
  const [reward , setReward] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item_name && !item_description && !image_url && !reward) {
      alert("Please fill out at least one field before submitting.");
      return;
    }
  
    fetch('http://127.0.0.1:5555/lost&found/itemlost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item_name, item_description, image_url, user_reported_id: user_reportedby_id, status: statuss, reward })
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
     


    })
    .catch(error => console.error('Error:', error));
  };
  
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: 'auto', marginTop: '150px', 
    height: '800px'
    }}>
      <label  
      style={{
        fontWeight: 'bold', // Added font weight
        fontFamily: 'Arial, sans-serif' ,
        width:'100%' ,
        textAlign: 'center',
        color: 'black' ,
        fontSize: '2rem'
      }}
      >Report Your Item</label>
    <div  
    
     style={{ width: '100%'  ,
    marginTop: '0px'
    }}
    className="mb-4">
      <label htmlFor="exampleFormControlInput1" className="form-label">Item Name</label>
      <input  
      style={{   borderColor: 'black' ,
      width: '100%' }}
        value={item_name}
        onChange={(e) => setItemName(e.target.value)}
        type="text"
        className="form-control custom-input"
        id="exampleFormControlInput1"
        placeholder="Bag, Laptop, Phone..."
      />
    </div>
    <div  style={{ width: '100%' }}className="mb-4">
      <label htmlFor="exampleFormControlInput1" className="form-label">Image Url</label>
      <input
      style={{   borderColor: 'black' ,
      width: '100%' }}
        type="text"
        className="form-control custom-input"
        id="exampleFormControlInput1"
        placeholder="Url"
        value={image_url}
        onChange={(e) => setImageUrl(e.target.value)}
      />
    </div>
    <div  
    style={{ width: '100%' }}
    className="mb-4">
      <label htmlFor="exampleFormControlInput1" className="form-label">Reward</label>
      <input
        type="text"
        className="form-control custom-input"
        id="exampleFormControlInput1"
        placeholder="Reward"
        value={reward}
        style={{   borderColor: 'black' ,
          width: '100%' }}
        onChange={(e) => setReward(e.target.value)}
      />
    </div>
    <div  style={{ width: '100%' }}className="mb-4">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">Item description</label>
      <textarea
        className="form-control custom-input"
        id="exampleFormControlTextarea1"
        rows="3"
        value={item_description}
        style={{   borderColor: 'black' ,
          width: '100%' }}
        onChange={(e) => setItemDescription(e.target.value)}
      ></textarea>
    </div>
    <button 
      type="submit"
      className="btn btn-primary"
      style={{ backgroundColor: 'green', width: '100%' ,
    height: '70px'
    }}

    >
      Submit
    </button>
  </form>
  

  
  );
}

export default ApplicationFormLost;




{/* 
<div>
    <h1>Report Found Item</h1>
    <input
      type="text"
      placeholder="Item Name"
      value={item_name}
      onChange={(e) => setItemName(e.target.value)}
    />
    <input
      type="text"
      placeholder="Item Description"
      value={item_description}
      onChange={(e) => setItemDescription(e.target.value)}
    />
     <input
      type="text"
      placeholder="Item Reward"
      value={reward}
      onChange={(e) => setReward(e.target.value)}
    />
    <input
      type="text"
      placeholder="Image URL"
      value={image_url}
      onChange={(e) => setImageUrl(e.target.value)}
    />
    <button onClick={handleSubmit}>Submit</button>
  </div> */}
  