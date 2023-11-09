import React, { useState, useEffect } from 'react';
import axios from "axios"
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';


function Lostitemsuser() {
    

    const [lostItems, setLostItems] = useState([]);
     

    useEffect(() => {
        fetch('http://127.0.0.1:5555/lost&found/lostitems')
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setLostItems(data);
          })
          .catch((error) => {
            console.error('Error fetching lost items:', error);
          });
      }, []);
      
      return (
        <div className='lostItems' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' ,marginLeft: '250px' ,marginRight: '250px' , marginTop: '150px' }}>
        {lostItems.map((data, index) => (
          <Card style={{ width: '30%', marginBottom: '16px' }} key={index}>
            <Card.Img variant="top" src={data.image_url} className="img-fluid" />
            <Card.Body>
              <Card.Title>ItemName: {data.item_name}</Card.Title>
              <Card.Text> ItemDescription: {data.item_description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      );

}

export default Lostitemsuser