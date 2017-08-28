import * as express from 'express';

import { list, findById, saveUser, updateUser, deleteUser, changePassword, lastInserts, totUsers} from './actions';

export const router = express.Router();

router.get('/totUsers', totUsers);
router.get('/filter/:filter', list);
router.post('/changePassword', changePassword);

router.get('/', lastInserts)
        .get('/:id', findById)              
        .delete('/:id', deleteUser)
        .post('/', saveUser)
        .put('/:id', updateUser);
