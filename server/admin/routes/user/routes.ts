import * as express from 'express';

import { list, findById, saveUser, updateUser, deleteUser } from './actions';

export const router = express.Router();

router.get('/:id', findById)              
        .delete('/:id', deleteUser)
        .post('/', saveUser)
        .put('/:id', updateUser);

router.get('/filter/:filter', list);
