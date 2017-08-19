import * as express from 'express';
import { router as userRoutes } from './routes/user/routes';
import { router as authRoutes } from './routes/auth/routes';
import { router as itemRoutes } from './routes/item/routes';
import { authorize } from '../middlewares/authRequired';

export const router = express.Router();

router.use('/user', authorize('admin'), userRoutes);
router.use('/item', authorize(['user', 'admin']), itemRoutes);
router.use('/auth', authRoutes);