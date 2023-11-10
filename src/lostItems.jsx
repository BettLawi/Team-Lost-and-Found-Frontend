import React, { useState, useEffect } from 'react';
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar';

function LostItems() {
  const [lostItems, setLostItems] = useState([]);
  const [editItem ,  setEditItem] = useState(null)
  
  useEffect(() => {
    fetch('https://lostandfoundbackend-o0al.onrender.com/lost&found/lostitems')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLostItems(data);
      })
      .catch((error) => {
        console.error('Error fetching lost items:', error);
      });
  }, []);
  
  const handleDelete = async (id) => {
    console.log(id);
    try {
      await fetch(`https://lostandfoundbackend-o0al.onrender.com/lost&found/lostitems/${id}`, {
        method: "DELETE",
      });

      setLostItems(lostItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleEdit = (item) => {
    setEditItem(item);
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `https://lostandfoundbackend-o0al.onrender.com/lost&found/itemlost/${editItem.id}`,
        editItem
      );

      setLostItems(
        lostItems.map((item) => (item.id === editItem.id ? editItem : item))
      );
      setEditItem(null);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div className="lostItems bg-gray-100 min-h-screen p-4">
      <div className="cards-container">
        {lostItems.map((data, index) => (
          <div className="card bg-white p-2 rounded-lg shadow-md flex flex-col justify-between mb-4" key={index}>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">Lost Item: {data.item_name}</h3>
              <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(data.id)}>
                X
              </button>
            </div>
            <div className="flex items-start mb-2">
              <div className="w-full mb-2">
                <img className="w-full" src={data.image_url} alt={data.item_name} />
              </div>
              <div>
                <p className="text-md font-bold mb-1">Reward - : ${data.reward}</p>
                <p className="text-sm mb-1">Description: {data.item_description}</p>
              </div>
            </div>
            {editItem && editItem.id === data.id ? (
              <div>
                <input
                  className="border rounded p-2 mb-1 w-full"
                  value={editItem.item_name}
                  onChange={(e) =>
                    setEditItem({ ...editItem, item_name: e.target.value })
                  }
                />
                <input
                  className="border rounded p-2 mb-1 w-full"
                  value={editItem.item_description}
                  onChange={(e) =>
                    setEditItem({
                      ...editItem,
                      item_description: e.target.value,
                    })
                  }
                />
                <input
                  className="border rounded p-2 mb-1 w-full"
                  value={editItem.image_url}
                  onChange={(e) =>
                    setEditItem({ ...editItem, image_url: e.target.value })
                  }
                />
                <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={handleSave}>Save</button>
              </div>
            ) : (
              <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleEdit(data)}>Edit</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LostItems;
