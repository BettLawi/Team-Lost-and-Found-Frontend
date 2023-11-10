import React, { useState, useEffect } from 'react';
import './PendingClaims.css';
import Navbar from './Navbar';

function PendingClaims() {
  const [Claimeditems, setClaimedtems] = useState([]);

  useEffect(() => {
    fetch('https://lost-backend.onrender.com/lost&found/pendingclaim_items')
      .then((response) => response.json())
      .then((data) => {
        setClaimedtems(data);
        console.log(data)
      })
     
      .catch((error) => {
        console.error('Error fetching lost items:', error);
        // Handle errors as needed
      });
  }, []);

  const handleOnApprove = async (itemId, status) => {
    try {
      let url = '';
      if (status === 'notclaimed') {
        url = `https://lost-backend.onrender.com/lost&found/approve_claimed_item/${itemId}`;
        // Add your handling logic for 'notclaimed' status
      } else if (status === 'pending_found_items') {
        url = `https://lost-backend.onrender.com/lost&found/approve_found_item/${itemId}`;
        // Add your handling logic for 'pending' status or other statuses
      }

      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Item approved:', itemId);
        console.log('Claimed item approved by admin');
        // Handle UI update for successful approval
      } else {
        const errorData = await response.json();
        console.error('Error approving item:', response.statusText);

        // Handle UI update or show error messages based on the response data
        // For example:
        if (errorData.error) {
          // Display the error message in the UI
          console.error('Error Message:', errorData.error);
        }
        // You can further categorize or format the error data for display
      }
    } catch (error) {
      console.error('Network Error:', error);
      // Handle any network errors or exceptions
    }
  };
  
  

  return (
    <>
    <Navbar />
      <h1
        style={{
          fontFamily: 'cursive',
          textAlign: 'center',
          fontWeight: 'lighter',
          marginTop: '6rem',
          fontStyle: 'italic',
        }}
      >
        Claimed items waiting for your approval
      </h1>
      <div className="tablediv">
        <table
          id="pendingclaims"
          style={{
            borderCollapse: 'separate',
            borderSpacing: '0px 10px',
            borderRadius: '15px',
            margin: '2rem',
            width: '80%',
          }}
        >
          <tbody>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Reported By</th>
              <th>Status</th>
              <th>Approve</th>
            </tr>

            {Claimeditems.map((item, index) => (
              <tr key={item.id}>
                <td style={{ marginBottom: '10px' }}>{index + 1}</td>
                <td>{item.item_name}</td>
                <td>{item.user_id}</td>
                <td>{item.status}</td>
                <td>
                  <button onClick={() => handleOnApprove(item.id,item.status)}>
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PendingClaims;
