export const getNotes = (req, res) => {
	return res.status(200).json([
		{
			name: 'Ahmed',
			age: 30,
		},
		{
			name: 'Ahmed',
			age: 30,
		},
	]);
};

export const createNote = (req, res) => {
	return res.status(201).json(req.body);
};

export const updateNote = (req, res) => {
	return res.status(201).json(`Hello from PUT! ${req.params.id}`);
};

export const deleteNote = (req, res) => {
	return res.status(201).json(`Hello from DELETE! ${req.params.id}`);
};

const notesController = {
	getMany: getNotes,
	create: createNote,
	update: updateNote,
	delete: deleteNote,
};

export default notesController;
