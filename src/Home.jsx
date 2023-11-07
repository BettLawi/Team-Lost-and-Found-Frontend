import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import Footer  from './Footer';

function Home() {
    return (
        <div className='home-container'>
            <Navbar />
            <div className='right-image'>
                <img src={'./src/Homeimage/Logo Design for Lost and Found.jpeg'} alt="none" id='image_lost' />
            </div>
            <div className='homeText'>
                <h3 id="centerText">
                Found and Lost app is your go-to platform for a seamless experience in managing lost and found items
                </h3>
                <p id="new_center">
                With the Found and Lost app, we are on a mission to simplify and streamline the process of reuniting lost items with their rightful owners. Our dedicated platform aims to foster a strong sense of community, connecting people from all walks of life who have lost and found items. We believe that through open and effective communication, we can make a significant impact on the lives of our users and contribute to a world where lost possessions find their way back home. Together, we are committed to creating a positive and helpful environment where the joy of rediscovery knows no bounds.
                
                </p>
            </div>
            <div className='homeButtons'>
                <Link to='/lostApplication'>
                <button id = "lost_btn">Report lost item</button>
                </Link>
                <Link to='/foundApplication'>
                    <button id='found_btn'> Report found item</button>
                </Link>
            </div>
            <Footer/>
           
        </div>
    );
}

export default Home;
