import { Router } from 'express';
import moviesController from '../controllers/movies.js';

const moviesRouter = Router();

moviesRouter.get('/', moviesController.getMany);

moviesRouter.post('/', moviesController.create);

// moviesRouter.put('/:id', moviesController.update);

// moviesRouter.delete('/:id', moviesController.delete);

export default moviesRouter;
