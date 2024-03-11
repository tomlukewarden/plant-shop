const express = require('express')
const router = express.Router()
const { createUser } = require('../controller/users')

router.post('/', async (req, res) => {
  try{
  const newUser = await createUser(req.body)
  res.status(201).json(newUser) 
  } catch (error) {
    res.status(500).json({ error:
    error.message})
  }
})