import React, { useState } from 'react';
import './foundApplication.css'; // Replace with your CSS file

const ApplicationForm = () => {
  const [item_name, setItemName] = useState('');
  const [item_description, setItemDescription] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [user_reported_id, setUserId] = useState('3');
  const [statuss, setStatus] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item_name && !item_description && !image_url) {
      alert("Please fill out at least one field before submitting.");
      return;
    }
  
    fetch('https://lostandfoundbackend-o0al.onrender.com/lost&found/reportfounditem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item_name:item_name,item_description: item_description , image_url: image_url,user_reported_id: user_reported_id ,status: statuss})
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
    })
    .catch(error => console.error('Error:', error));
  };
  return (  <form onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: 'auto', marginTop: '150px', 
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
    >Report item found</label>
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
};

export default ApplicationForm;
