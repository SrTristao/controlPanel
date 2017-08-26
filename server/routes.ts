import { Router} from 'express';

import { router as adminRoutes } from './admin/routes';
import { router as publicRoutes } from './public/routes';
export const router = Router();

router.use('/public', publicRoutes);
router.use('/admin', adminRoutes);