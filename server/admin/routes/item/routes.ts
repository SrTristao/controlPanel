import * as express from 'express';

import { list, findById, saveItem, updateItem, deleteItem, lastInserts, totItems } from './actions';

export const router = express.Router();

router.get('/filter/:filter', list);
router.get('/totItems', totItems);

router.get('/', lastInserts)
        .get('/:id', findById)        
        .delete('/:id', deleteItem)
        .post('/', saveItem)
        .put('/:id', updateItem);

