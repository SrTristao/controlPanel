import * as express from 'express';

import { list, findById, saveItem, updateItem, deleteItem } from './actions';

export const router = express.Router();

router.get('/:id', findById)        
        .delete('/:id', deleteItem)
        .post('/', saveItem)
        .put('/:id', updateItem);

router.get('/filter/:filter', list);