import * as express from 'express';
import { router as userRoutes } from './routes/user/routes';
export const router = express.Router();
import { authorize } from './middlewares/auth-service';

router.use('/user', authorize, userRoutes);