// num1 = 5; num2 = 9; item = 'sd'; function testFn() {
//   item = undefined;
// }

// var num1 = 5;

// var num2 = 9;
// var item = 'sd';

// console.log(testFn());

/* */

// function toBeCalled2() {
// 	var item = 1;
// 	return item;
// }

// function toBeCalled1() {
// 	return toBeCalled2();
// }

// function testFn() {
// 	var item = 567890;
// 	return toBeCalled1();
// }

// console.log(testFn());

// debugger;

// console.log(name);
// sayHello(sayHello());

// var name = 'Ahmed';
// var num = 7;
// function sayHello(name) {
// 	console.log('Hello ' + name);
// }

// sayHello(sayHello());

/* */

// let money = 5;

// function parent() {
// 	function child1() {
// 		console.log(money);
// 	}
// 	function child2() {
// 		let money = 10;
// 		console.log(money);
// 	}

// 	child1();
// 	child2();
// }

// parent();

// function print(str) {
// 	console.log(str);
// }

// function sayHello(name, print) {
// 	print(name);
// }

// sayHello('Ahmed', print);

/* */

// async function connect(conn) {
// 	// const result = await new Promise(function (resolve, reject) {
// 	// 	setTimeout(function () {
// 	// 		resolve(conn);
// 	// 	}, 2000);
// 	// });

// 	// const result = setTimeout(function () {
// 	// 	return conn;
// 	// }, 2000);

// 	console.log(result);

// 	return result;
// }

// connect('Connected...');

/* */

// function connect(connResult) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			console.log('setTimeout');
// 			resolve(connResult);
// 		}, 2000);
// 	});

// 	return result;
// }

// connect('Connected Successfully...').then(function (data) {
// 	console.log(data);
// });

/* */

// setTimeout(function () {
// 	console.log('Connected...');
// 	console.log('done');
// }, 2000);

// const result = new Promise(function (resolve, reject) {
// 	setTimeout(function () {
// 		console.log('Connected...');
// 		reject('error');
// 		resolve('done');
// 	}, 2000);
// });

// result
// 	.then(function name(str) {
// 		console.log(str + ' Hi');
// 	})
// 	.catch(function (err) {
// 		console.err(err);
// 	});

/* */

// var num1 = 8;
// var num2 = 99;
// var num3 = 1;

// // console.log(Math.max(num1, num2, num3));
// const test = new Promise(function (resolve) {
// 	// if (num1 > num2 && num1 > num3) {
// 	// 	resolve(num1);
// 	// } else if (num2 > num3) {
// 	// 	resolve(num2);
// 	// } else {
// 	// 	resolve(num3);
// 	// }

// 	resolve(Math.max(num1, num2, num3));
// });

// test.then(function (data) {
// 	console.log(data);
// });

/* */

// new Promise(function (resolve) {
// 	setTimeout(function () {
// 		resolve(console.log('Hello'));
// 	}, 2000);
// }).then(function (data) {
// 	console.log('js');
// });

/* */

// var x = 2;

// if (true) {
// 	var x = 1;
// 	console.log(x);
// }

// console.log(x);

// let x = 2;

// if (true) {
// 	let x = 1;
// 	console.log(x);
// }

// console.log(x);

/* */

// function name(params) {

// }

// const name = (params) => {

// }

/* */
let name = 'Ahmed';

// const greeting = "Hi " + name;
const greeting = `Hi ${name}`;

console.log(greeting);
