import { NextFunction, Request, Response }  from 'express';
import * as authService from '../../services/Auth';
import { CONST } from '../../../utils/const';

export async function login(req: Request, res: Response, next: NextFunction) : Promise<void> {
    try {
        const token = await authService.login(req.body.email, req.body.password);
    } catch (err) {
        next(err);
    }
}

export async function changePassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        

    } catch (err) {
        next(err);
    }
}

export async function resetPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {

    } catch (err) {
        next(err);
    }
}
