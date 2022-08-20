// // import os from 'os';
// // import path from 'path';
// import EventEmitter from 'events';
// import { isEvenOrOdd } from './utils/calc.js';
// import EVENTS from './utils/constants/events.js';
// import http from 'http';
import express from 'express';
import notesRouter from './routes/notes.js';

// // console.log(os.freemem());
// // console.log(os.totalmem());
// // console.log(path.dirname(path.resolve('.')));

// const numTest = 23;

// console.log(`${numTest} is ${isEvenOrOdd(23).toLowerCase()}.`);

// const event = new EventEmitter();

// event.on(EVENTS.ON_DATA_BASE_CONNECTION, () => console.log('connected'));

// event.on(EVENTS.ON_DATA_BASE_CONNECTION_LOST, () =>
// 	console.log('connection closed')
// );

// event.emit(EVENTS.ON_DATA_BASE_CONNECTION);

// setTimeout(() => {
// 	event.emit(EVENTS.ON_DATA_BASE_CONNECTION_LOST);
// }, 5000);

// const PORT = 5000;

// const server = new http.createServer((req, res) => {
// 	console.log(req.url);
// 	if (req.url === '/users') {
// 		res.write('Hello Users');
// 		res.end();
// 	}

// 	res.write('Hello node.js');
// 	res.end();
// });

// server.listen(PORT);

// console.log(
// 	`Server is running on port ${PORT}`,
// 	'color: yellow; font-weight: 800'
// );

const app = express();
const port = 5000;

// app.use('/users', (req, res) => {
// 	const users = ['Ahmed', 'Ali', 'Anas'];
// 	res.status(200).json(users);
// });

app.use(express.json());

app.use('/api/notes', notesRouter);

// app.get('/', (req, res) => {
// 	res.send('Hello Node.js!\nType GET');
// });

// app.post('/', (req, res) => {
// 	res.send('Hello Node.js!\nType POST');
// });

// app.put('/', (req, res) => {
// 	res.send('Hello Node.js!\nType PUT');
// });

// app.delete('/', (req, res) => {
// 	res.send('Hello Node.js!\nType DELETE');
// });

app.listen(port, () => console.log(`Example app listening on port ${port}`));
