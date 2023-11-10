import React, { useState, useEffect } from 'react';
import './PendingClaims.css';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// import showConfirmationDialog from './Confironpendingitem';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'


function PendingClaims() {
  const [Claimeditems, setClaimedtems] = useState([]);
  const MySwal = withReactContent(Swal);


  useEffect(() => {
    fetch('https://lostandfoundbackend-o0al.onrender.com/lost&found/pendingclaim_items') // Replace 'https://example.com/lost-items' with your API endpoint or local file
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setClaimedtems(data);
      })
      .catch((error) => {
        console.error('Error fetching lost items:', error);
        // Handle errors as needed
      });
  }, []); // Empty dependency array to run the effect only once

 
  const Handleonapprove = async (e , item) => {
console.log(item);
    try {
      const response = await fetch(`https://lostandfoundbackend-o0al.onrender.com/lost&found/approve_claimed_item/${item.id}`, {
        method: 'PUT', // Use PATCH or PUT depending on your server's API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'claimed',
        }),
      });
     
      if (!response.ok) {
        throw new Error('Network response was not ok: ${response.status}');
      }

      MySwal.fire({
        icon: 'success',
        title: 'Approved Successfully',
        showConfirmButton: false,
        timer: 1500 // Automatically close after 1.5 seconds
      });
  
      // Assuming you want to update the UI immediately upon successful request
    } catch (error) {
      console.error('Error updating status:', error);
      // Handle errors as needed
    }
  };
  



  return (
    <>
    <h1
      style={{
        fontFamily: "cursive",
        textAlign: "center",
        fontWeight: "lighter",
        marginTop: "2rem",
        fontStyle: "italic",
      }}
    >
      Claimed waiting for your approval
    </h1>
    <div className="tablediv">
      <table
        id="pendingclaims"
        style={{
          borderCollapse: "separate",
          borderSpacing: "0px 10px",
          borderRadius: "15px",
          margin: "2rem",
          width: "80%",
        }}
      >
        <tbody>
          <tr>
            <th>#</th>
            <th>Itemname</th>
            <th>Reported_by</th>
            <th>Status</th>
            <th>Approve</th>
          </tr>

          {Claimeditems.map((item, index) => (
  
            <tr key={item.id}>
              <td style={{ marginBottom: "10px" }}>{index + 1}</td>
              <td>
               {item.item_name}
              </td>
              <td>{item.user_id}</td>
              <td>{item.status}</td>
              <td
                // onClick ={(e)=>showConfirmationDialog(item , Handleonapprove)}
                onClick={(e)=>Handleonapprove(e , item)}
              >Approve</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);
}

export default PendingClaims;
