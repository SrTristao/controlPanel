import { NextFunction, Request, Response }  from 'express';
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
        const result = await userService.list(req.params.filter); 
        res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

export async function saveUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {        
        const result = await userService.saveUser(req.body); 
        if(typeof result === 'string')            
            res.status(200).send(result);
        else if (result)
            res.status(200).send({message: CONST.MSG.SUCCESS.SAVE, user: result});
        else
            res.status(401).send(CONST.MSG.ERR.SAVE);
    } catch (err) {
        next(err);
    }
}

export async function deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const result = await userService.deleteUser(req.params.id); 
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
        const result = await userService.updateUser(req.body); 
        if(result)            
            res.status(200).send(CONST.MSG.SUCCESS.UPDATE);
        else
            res.status(401).send(CONST.MSG.ERR.UPDATE);
    } catch (err) {
        next(err);
    }
}
