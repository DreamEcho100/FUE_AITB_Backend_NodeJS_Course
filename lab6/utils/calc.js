// const EVEN = 'EVEN';
// const ODD = 'ODD';

const NUMBER_TYPES = Object.freeze({
	EVEN: 'EVEN',
	ODD: 'ODD',
});

// NUMBER_TYPES.EVEN = 'ODD';

const checkIfTypeIsNumberOrThrow = (num) => {
	if (typeof num !== 'number') throw new Error(`${num} Not a number`);
	return num;
};

export const isEvenOrOdd = (num) =>
	checkIfTypeIsNumberOrThrow(num) % 2 === 0
		? NUMBER_TYPES.EVEN
		: NUMBER_TYPES.ODD;
