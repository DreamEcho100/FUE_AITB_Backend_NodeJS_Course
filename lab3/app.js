// import os from 'os';
// import path from 'path';
import EventEmitter from 'events';
import { isEvenOrOdd } from './utils/calc.js';
import EVENTS from './utils/constants/events.js';

// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(path.dirname(path.resolve('.')));

const numTest = 23;

console.log(`${numTest} is ${isEvenOrOdd(23).toLowerCase()}.`);

const event = new EventEmitter();

event.on(EVENTS.ON_DATA_BASE_CONNECTION, () => console.log('connected'));

event.on(EVENTS.ON_DATA_BASE_CONNECTION_LOST, () =>
	console.log('connection closed')
);

event.emit(EVENTS.ON_DATA_BASE_CONNECTION);

setTimeout(() => {
	event.emit(EVENTS.ON_DATA_BASE_CONNECTION_LOST);
}, 3000);
