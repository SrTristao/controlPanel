import * as express from 'express';
import { router as userRoutes } from './routes/user/routes';
import { router as authRoutes } from './routes/auth/routes';
export const router = express.Router();
import { authorize } from './middlewares/auth-service';

router.use('/user', userRoutes);
router.use('/auth', authRoutes);