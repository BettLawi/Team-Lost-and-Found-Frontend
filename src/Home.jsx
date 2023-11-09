import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Home( ) {

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
        <div className='home-container'>
           
            <div className='right-image'>
                <img src={'./src/Homeimage/Logo Design for Lost and Found.jpeg'} alt="none" id='image_lost' />
            </div>

            <div className='homepageitems'>
            <div className='homeButtons'
              style={{
                height : '50px'
              }}
            >
                <Link to='/lostApplication'>
                <button id = "lost_btn">Report lost item</button>
                </Link>
                <Link to='/foundApplication'>
                    <button id='found_btn'> Report found item</button>
                </Link>
            </div>
            <div className='homeText'
            style={{
                marginTop: '60px'
            }}
            >
                <h3 id="centerText">
                Found and Lost app is your go-to platform for a seamless experience in managing lost and found items
                </h3>
                <p id="new_center">
                With the Found and Lost app, we are on a mission to simplify and streamline the process of reuniting lost items with their rightful owners. Our dedicated platform aims to foster a strong sense of community, connecting people from all walks of life who have lost and found items. We believe that through open and effective communication, we can make a significant impact on the lives of our users and contribute to a world where lost possessions find their way back home. Together, we are committed to creating a positive and helpful environment where the joy of rediscovery knows no bounds.
                
                </p>
            </div>
            </div>
            <h3
            style={{
                fontSize: '50px',
                alignItems: 'center',
                marginTop: '20px'
            }}
            > Some of the lost Items</h3>

            <div className='lostItems' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' ,marginLeft: '250px' ,marginRight: '250px' , marginTop: '150px'  }}>
        {lostItems.map((data, index) => (
          <Card style={{ width: '30%', marginBottom: '16px' ,  animation: `fadeIn 1s ${index * 0.1}s forwards`  }} key={index}>
            <Card.Img variant="top" src={data.image_url} className="img-fluid" />
            <Card.Body>
              <Card.Title>ItemName: {data.item_name}</Card.Title>
              <Card.Text> ItemDescription: {data.item_description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
         
           
        </div>
    );
}

export default Home;
