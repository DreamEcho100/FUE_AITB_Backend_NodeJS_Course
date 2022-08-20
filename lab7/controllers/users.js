import prisma from '../utils/prisma.js';
import bcrypt from 'bcrypt';
import z from 'zod';

export const getManyUsers = async (req, res) => {
	const data = await prisma.user.findMany({
		select: {
			id: true,
			name: true,
			email: true,
			city: true,
			phone: true,
		},
		take: 10,
		where: {
			isDeleted: false,
		},
	});

	return res.status(200).json(data);
};

export const createUser = async (req, res) => {
	// prisma.$executeRaw
	try {
		const input = z
			.object({
				name: z.string(),
				email: z.string().email(),
				password: z.string(),
				city: z.string(),
				phone: z.string(),
			})
			.parse(req.body);

		const rounds = 10;
		const hashedPassword = await bcrypt.hash(input.password, rounds);

		const data = await prisma.user.create({
			data: {
				name: input.name,
				email: input.email,
				password: hashedPassword,
				city: input.city,
				phone: input.phone,
			},
		});

		// const data = {
		// 	name: req.body.name,
		// 	email: req.body.email,
		// 	password: hashedPassword,
		// 	city: req.body.city,
		// 	phone: req.body.phone,
		// };

		// console.table(data);

		delete data.password;

		res.status(201).json(data);
	} catch (error) {
		res.status(400).json(`Error, ${error.message}`);
	}
};

export const updateUser = async (req, res) => {
	try {
		const input = z
			.object({
				name: z.string().optional(),
				email: z.string().email().optional(),
				password: z.string(),
				city: z.string().optional(),
				phone: z.string().optional(),
			})
			.parse(req.body);

		const targetedUser = await prisma.user.findFirstOrThrow({
			where: {
				id: parseInt(req.params.id),
			},
			select: { password: true },
		});

		const isPasswordsMatched = await bcrypt.compare(
			input.password,
			targetedUser.password
		);
		if (!isPasswordsMatched) throw new Error('Password is incorrect');

		const data = await prisma.user.update({
			data: {
				name: input.name,
				email: input.email,
				city: input.city,
				phone: input.phone,
			},
			where: {
				id: parseInt(req.params.id),
			},
		});

		// console.table(data);

		delete data.password;

		return res.status(200).json(data);
	} catch (error) {
		res.status(400).json(`Error, ${error.message}`);
	}
};

export const deleteUser = async (req, res) => {
	try {
		const input = z
			.object({
				password: z.string(),
			})
			.parse(req.body);

		const targetedUser = await prisma.user.findFirstOrThrow({
			where: {
				id: parseInt(req.params.id),
			},
			select: { password: true },
		});

		const isPasswordsMatched = await bcrypt.compare(
			input.password,
			targetedUser.password
		);
		if (!isPasswordsMatched) throw new Error('Password is incorrect');

		const data = await prisma.user.update({
			data: {
				isDeleted: true,
			},
			where: {
				id: parseInt(req.params.id),
			},
		});

		return res.status(200).json(data);
	} catch (error) {
		res.status(400).json(`Error, ${error.message}`);
	}
};

const restoreUser = async (req, res) => {
	try {
		const data = await prisma.user.update({
			data: {
				isDeleted: false,
			},
			where: {
				id: parseInt(req.params.id),
			},
		});

		delete data.password;

		return res.status(200).json(data);
	} catch (error) {
		res.status(400).json(`Error, ${error.message}`);
	}
};

const UsersController = {
	getMany: getManyUsers,
	create: createUser,
	update: updateUser,
	restore: restoreUser,
	delete: deleteUser,
};

export default UsersController;
