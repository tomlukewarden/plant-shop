const express = require('express');
const router = express.Router();
const { createUser, getAllUsers } = require('../controller/users');


router.get('/', async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post('/', async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
