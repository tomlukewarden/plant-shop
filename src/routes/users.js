import express from 'express';
import { signUpUser, loginUser } from '../controller/users.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = await signUpUser(email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
