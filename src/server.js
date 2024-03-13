import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usersRouter from './routes/users.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/users', usersRouter);

export default app;