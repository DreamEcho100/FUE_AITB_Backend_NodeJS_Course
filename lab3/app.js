// // import os from 'os';
// // import path from 'path';
// import EventEmitter from 'events';
// import { isEvenOrOdd } from './utils/calc.js';
// import EVENTS from './utils/constants/events.js';
// import http from 'http';
import express from 'express';

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

app.use('/users', (req, res) => {
	const users = ['Ahmed', 'Ali', 'Anas'];
	res.status(200).json(users);
});

app.get('/', (req, res) => {
	res.send('Hello Node.js!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
