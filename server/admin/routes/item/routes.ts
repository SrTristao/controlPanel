import * as express from 'express';

import { list, findById, saveItem, updateItem, deleteItem } from './actions';

export const router = express.Router();

router.get('/', list)
        .get('/:id', findById)
        .delete('/', deleteItem)
        .post('/', saveItem)
        .put('/:id', updateItem);