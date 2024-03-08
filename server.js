import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { process } from 'process'; 

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(cors());
app.use(bodyParser.json());

// Simulated user data
const users = [
  { id: 1, email: 'user@example.com', password: 'password123' }
];


app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  res.json({ message: 'Login successful' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
