import { NextFunction, Request, Response }  from 'express';
import { list as listUser } from '../../repositories/User';
import * as userService from '../../services/User';
import { CONST } from '../../../utils/const';

export async function findById(req: Request, res: Response, next: NextFunction) : Promise<void> {
    try {
        const result = await userService.findById(req.params.id);
        if(result)            
            res.status(200).send(result);
        else
            res.status(401).send(CONST.MSG.ERR.FINDBYID);
    } catch (err) {
        next(err);
    }
}

export async function list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const result = await listUser(); 
        res.status(401).send(result);
    } catch (err) {
        next(err);
    }
}

export async function saveUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const result = await userService.saveUser(req.query); 
        if(result)            
            res.status(200).send(CONST.MSG.SUCCESS.SAVE);
        else
            res.status(401).send(CONST.MSG.ERR.SAVE);
    } catch (err) {
        next(err);
    }
}

export async function deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const result = await userService.deleteUser(req.body.id); 
        if(result)            
            res.status(200).send(CONST.MSG.SUCCESS.DELETE);
        else
            res.status(401).send(CONST.MSG.ERR.DELETE);
    } catch (err) {
        next(err);
    }
}

export async function updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const result = await userService.updateUser(req.query); 
        if(result)            
            res.status(200).send(CONST.MSG.SUCCESS.UPDATE);
        else
            res.status(401).send(CONST.MSG.ERR.UPDATE);
    } catch (err) {
        next(err);
    }
}
