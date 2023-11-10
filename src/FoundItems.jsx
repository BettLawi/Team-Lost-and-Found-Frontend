import React, { useState, useEffect } from 'react';
import './FoundItems.css';
import Navbar from './Navbar';

const commentURL = 'http://localhost:5555/lost&found/comments';

function FoundItems() {
  const [foundItems, setFoundItems] = useState([]);
  const [commentsVisible, setCommentsVisible] = useState([]);
  const [claimedItem, setClaimedItem] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5555/lost&found/found_items')
      .then(response => response.json())
      .then(data => {
        console.log('Received Data:', data);
        setFoundItems(data.found_items || []);
        setCommentsVisible(new Array(data.found_items?.length || 0).fill(false));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const getComments = async (foundItemId) => {
    try {
      const response = await fetch(`${commentURL}/${foundItemId}`);
      if (response.ok) {
        const comments = await response.json();
        return comments;
      } else {
        throw new Error('Failed to fetch comments');
      }
    } catch (error) {
      console.error('Error getting comments:', error);
      return [];
    }
  };

  const addComment = async (foundItemId, comment) => {
    try {
      const response = await fetch(commentURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ found_item_id: foundItemId, comment: comment }),
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to add comment');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
      return { message: 'Failed to add comment' };
    }
  };

  const toggleComments = async (index, foundItemId) => {
    const updatedCommentsVisible = [...commentsVisible];
    updatedCommentsVisible[index] = !updatedCommentsVisible[index];
    setCommentsVisible(updatedCommentsVisible);

    if (updatedCommentsVisible[index]) {
      const comments = await getComments(foundItemId);
      console.log('Fetched comments:', comments);
      setComments(comments);
    }
  };

  const claimItem = (itemIndex) => {
    setClaimedItem(itemIndex);
    // Additional logic for claiming an item can go here
  };

  const handleSubmit = (e, item) => {
    e.preventDefault();
    if (!item) {
      alert("Please select an item before claiming.");
      return;
    }
    // The logic for posting item claim can go here
    fetch('http://127.0.0.1:5555/lost&found/claimitem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_name: item.item_name, user_id: item.user_reported_id, image_url: item.image_url, item_description: item.item_description, status: status }),
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
      })
      .catch(error => console.error('Error:', error));
  };

  const handlePostComment = async (index, foundItemId, comment) => {
    if (!comment) {
      alert('Please enter a comment.');
      return;
    }

    const newComment = {
      found_item_id: foundItemId,
      comment: comment,
    };

    const addedComment = await addComment(foundItemId, newComment.comment);

    if (addedComment.message === 'Failed to add comment') {
      alert('Failed to add the comment. Please try again.');
    } else {
      setComments((prevComments) => {
        const updated = [...prevComments];
        updated[index] = [...updated[index], newComment];
        return updated;
      });
    }
  };

  return (
    <div className='foundItems'>
      <Navbar />
      <div className='FoundItem-card'>
        {foundItems.map((data, index) => (
          <div className='card' key={index}>
            <p>Category: {data.categories}</p>
            <h3>Found Item: {data.item_name}</h3>
            <button onClick={(e) => {
              claimItem(index);
              handleSubmit(e, data);
            }} disabled={claimedItem === index}>
              {claimedItem === index ? 'Item Claimed' : 'Claim Yours'}
            </button>
            <button onClick={() => toggleComments(index, data.id)}>
              {commentsVisible[index] ? 'Hide Comments' : 'Show Comments'}
            </button>
            <div className="commentSection" style={{ display: commentsVisible[index] ? 'block' : 'none' }}>
              <input type='text' placeholder='Add a comment' className='commentInput' />
              <button className='postCommentButton' onClick={(e) => {
                const inputComment = e.target.previousElementSibling.value;
                handlePostComment(index, data.id, inputComment);
              }}>Post Comment</button>
              <div className="commentList">
                {data.comments?.map((comment, i) => (
                  <p key={i}>{comment.text}</p>
                  // Assuming the comment object has a 'text' field; modify based on your comment structure
                ))}
              </div>
            </div>
            <img src={data.image_url} alt={`Image of ${data.foundItem}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoundItems;
