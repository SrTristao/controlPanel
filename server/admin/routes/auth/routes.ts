import * as express from 'express';
import { login } from './actions';
export const router = express.Router();

router.post('/', login);

