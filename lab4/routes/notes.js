import { Router } from 'express';
import notesController from '../controllers/notes.js';

const notesRouter = Router();

notesRouter.get('/', notesController.getMany);

notesRouter.post('/', notesController.create);

notesRouter.put('/:id', notesController.update);

notesRouter.delete('/:id', notesController.delete);

export default notesRouter;
