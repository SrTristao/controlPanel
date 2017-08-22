import * as express from 'express';
import { router as userRoutes } from './routes/user/routes';
import { router as authRoutes } from './routes/auth/routes';
import { router as itemRoutes } from './routes/item/routes';
import { authRequired } from '../middlewares/authRequired';
import { decodeToken } from './middlewares/auth-service';
export const router = express.Router();

router.use(decodeToken);

router.use('/user', authRequired('admin'), userRoutes);
router.use('/item', authRequired(['user', 'admin']), itemRoutes);
router.use('/auth', authRoutes);