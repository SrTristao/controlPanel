import * as express from 'express';

import { statusServer } from './actions';

export const router = express.Router();

router.get('/', statusServer);