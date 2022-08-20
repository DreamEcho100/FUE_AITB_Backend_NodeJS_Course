import prisma from '../utils/prisma.js';

export const getMovies = async (req, res) => {
	const data = await prisma.movies.findMany({
		take: 10,
	});

	return res.status(200).json(data);
};

export const createMovie = async (req, res) => {
	// prisma.$executeRaw
	const data = await prisma.movies.create({
		data: {
			author: req.body.author,
			name: req.body.name,
			description: req.body.description,
		},
	});

	console.table(data);

	res.status(201).json(data);
};

// export const updateMovie = (req, res) => {
// 	return res.status(201).json(`Hello from PUT! ${req.params.id}`);
// };

// export const deleteMovie = (req, res) => {
// 	return res.status(201).json(`Hello from DELETE! ${req.params.id}`);
// };

const MoviesController = {
	getMany: getMovies,
	create: createMovie,
	// update: updateMovie,
	// delete: deleteMovie,
};

export default MoviesController;
