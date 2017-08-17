import * as bcrypt from './services/bcrypt';

import { NextFunction, Request, Response, Router} from 'express';

import { router as adminRoutes } from './admin/routes';
export const router = Router();

router.use('/admin', adminRoutes);