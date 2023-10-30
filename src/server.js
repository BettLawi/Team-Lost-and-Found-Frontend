const express = require('express');



const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const app = express();

// Here, define your database schema and set a default value (if needed)
db.defaults({ items: [] }).write();

// Then, within your route handler, you can use the 'db' instance to interact with your database
app.post('/lostItems', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error uploading file');
    } else {
      const { id, lostItem, description, reward } = req.body;
      const image = req.file.filename; // Save the filename in the database, not the image itself

      const newItem = { id, lostItem, description, reward, image };
      db.get('items').push(newItem).write(); // Saving the new item to the database

      res.status(201).json(newItem);
    }
  });
});
