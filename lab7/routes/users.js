import { Router } from 'express';
import usersController from '../controllers/users.js';

const usersRouter = Router();

usersRouter.get('/', usersController.getMany);

usersRouter.post('/', usersController.create);

usersRouter.put('/:id', usersController.update);

usersRouter.patch('/:id', usersController.restore);

usersRouter.delete('/:id', usersController.delete);

export default usersRouter;
