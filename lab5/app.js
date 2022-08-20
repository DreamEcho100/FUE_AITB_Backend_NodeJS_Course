import express from 'express';
import moviesRouter from './routes/movies.js';
// import { config } from 'dotenv';

// config();

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/movies', moviesRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
