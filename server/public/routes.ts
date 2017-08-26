import * as express from 'express';
import { router as statusRoutes } from './routes/status/routes';
export const router = express.Router();

router.use('/status', statusRoutes);