import { Router } from 'express';
import usersController from '../controllers/users.js';
import jwt from 'jsonwebtoken';

const usersRouter = Router();

usersRouter.get('/', usersController.getMany);

usersRouter.post('/', usersController.create);

usersRouter.put('/:id', usersController.update);

usersRouter.patch('/', usersController.restore);

usersRouter.delete('/:id', usersController.delete);

usersRouter.post('/login', usersController.login);

export default usersRouter;
