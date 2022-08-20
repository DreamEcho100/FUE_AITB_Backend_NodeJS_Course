import express from 'express';
import usersRouter from './routes/users.js';
// import { config } from 'dotenv';

// config();

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/users', usersRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
