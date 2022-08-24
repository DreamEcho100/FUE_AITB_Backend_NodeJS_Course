import prisma from '../utils/prisma.js';
import bcrypt from 'bcrypt';
import z from 'zod';
import jwt from 'jsonwebtoken';

const compareTwoPasswords = async (comparedTo, comparedWithEncrypted) => {
	// const isPasswordsMatched = await bcrypt.compare(
	// 	comparedTo,
	// 	comparedWithEncrypted
	// );
	if (!(await bcrypt.compare(comparedTo, comparedWithEncrypted)))
		throw new Error('Password is incorrect');

	return true;
};

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
			select: {
				name: true,
				email: true,
				city: true,
				phone: true,
			},
		});

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

		await compareTwoPasswords(input.password, targetedUser.password);

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
			select: {
				name: true,
				email: true,
				password: true,
				city: true,
				phone: true,
			},
		});

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

		await compareTwoPasswords(input.password, targetedUser.password);

		const data = await prisma.user.update({
			data: {
				isDeleted: true,
			},
			where: {
				id: parseInt(req.params.id),
			},
			select: {
				name: true,
				email: true,
				city: true,
				phone: true,
			},
		});

		return res.status(200).json(data);
	} catch (error) {
		res.status(400).json(`Error, ${error.message}`);
	}
};

const restoreUser = async (req, res) => {
	try {
		const input = z.object({
			// password: z.string(),
			email: z.string(),
		});

		const targetedUser = await prisma.user.findFirstOrThrow({
			select: { id: true },
			where: {
				isDeleted: true,
				AND: {
					email: input.email,
				},
			},
		});

		const data = await prisma.user.update({
			data: {
				isDeleted: false,
			},
			where: {
				id: targetedUser.id,
			},
		});

		return res.status(200).json(data);
	} catch (error) {
		res.status(400).json(`Error, ${error.message}`);
	}
};

export const loginUser = async (req, res) => {
	const input = z
		.object({
			password: z.string(),
			email: z.string().email(),
		})
		.parse(req.body);

	const targetedUser = await prisma.user.findFirstOrThrow({
		select: { id: true, password: true },
		where: {
			isDeleted: false,
			AND: {
				email: input.email,
			},
		},
	});

	await compareTwoPasswords(input.password, targetedUser.password);

	const SECRET = process.env.SECRET;

	if (!SECRET) throw new Error('');

	const ONE_MONTH_IN_SECONDS = 60 * 60 * 24 * 30;

	const payload = {
		id: targetedUser.id,
		expiresIn: new Date(Date.now() + ONE_MONTH_IN_SECONDS * 1000).getTime(),
	};

	const token = jwt.sign(payload, process.env.SECRET, {
		expiresIn: ONE_MONTH_IN_SECONDS,
	});

	return res.status(200).json({
		payload,
		token,
	});
};

const UsersController = {
	getMany: getManyUsers,
	create: createUser,
	update: updateUser,
	restore: restoreUser,
	delete: deleteUser,
	login: loginUser,
};

export default UsersController;
