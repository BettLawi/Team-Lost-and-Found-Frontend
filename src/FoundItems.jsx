import React, { useState, useEffect } from 'react';
import './FoundItems.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Navbar from './Navbar';

function FoundItems() {
  const [foundItems, setFoundItems] = useState([]);
  const [commentsVisible, setCommentsVisible] = useState([]);
  const [claimedItem, setClaimedItem] = useState(null);
  const [status ,setStatus] = useState("not claimed")
  // const [itemid ,SetItemid] = useState("")
  // const [user_id ,SetUserid] = useState("")
  // const [status , setStatus] = useState("notclaimed")
  
  // const [selectedItem, setSelectedItem] = useState(null);
const Myswal = withReactContent(Swal)

  useEffect(() => {
    fetch('http://127.0.0.1:5555/lost&found/found_items') // Replace 'https://example.com/lost-items' with your API endpoint or local file
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFoundItems(data);
        // SetItemid(data.id) ;
        // SetUserid(data.user_id)
        setCommentsVisible(new Array(data.length).fill(false))
      })
      .catch((error) => {
        console.error('Error fetching found items:', error);
        // Handle errors as needed
      });
  }, []); 
  
 
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
      body: JSON.stringify({ item_name: item.item_name, user_id: item.user_reported_id , status: status})
    })
    .then(response => response.json())
    .then(data => {

      Myswal.fire({
        icon: 'success',
        title: 'Claimed successfuly wait for approval' ,
        showConfirmButton: false,
        timer: 2500 // Automatically close after 1.5 seconds
      });

    })
    .catch(error => console.error('Error:', error));
  };
  
  


  return (
    <div className='foundItems' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginLeft: '250px', marginRight: '250px', marginTop: '150px' }}>
    {foundItems.map((data, index) => (
      <Card style={{ width: '30%', marginBottom: '16px' }} key={index}>
        <Card.Img variant="top" src={data.image_url} />
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title className="text-center">ItemName: {data.item_name}</Card.Title>
          <Card.Text className="text-center"> ItemDescription: {data.item_description}</Card.Text>
          <Button
            style={{
              width: '200px'
            }}
            className="btn-block bg-primary"
            variant="primary"
            onClick={(e) => handleSubmit(e, data)}
          >
            Claim your Item
          </Button>
        </Card.Body>
      </Card>
    ))}
  </div>
  
  );
}

export default FoundItems;
 // <div 
          // className='card' key={index}>
          //   <p>Category: {data.item_description}</p>
          //   <h3>Found Item: {data.item_name}</h3>
          //   <button onClick={(e)=>handleSubmit(e ,data)}>
          //     Claim
          //   </button>
         

            
          //   <img src={data.image} alt={`Image of ${data.foundItem}`} />
          // </div>