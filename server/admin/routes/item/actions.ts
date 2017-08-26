import { NextFunction, Request, Response }  from 'express';
import { list as listItem } from '../../repositories/Item';
import * as itemService from '../../services/Item';
import { CONST } from '../../../utils/const';

export async function findById(req: Request, res: Response, next: NextFunction) : Promise<void> {
    try {
        const result = await itemService.findById(req.params.id);
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
        const result = await listItem(); 
        res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

export async function saveItem(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        console.log(req.body)
        const result = await itemService.saveItem(req.body); 
        if(result)            
            res.status(200).send(CONST.MSG.SUCCESS.SAVE);
        else
            res.status(401).send(CONST.MSG.ERR.SAVE);
    } catch (err) {
        next(err);
    }
}

export async function deleteItem(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const result = await itemService.deleteItem(req.body.id); 
        if(result)            
            res.status(200).send(CONST.MSG.SUCCESS.DELETE);
        else
            res.status(401).send(CONST.MSG.ERR.DELETE);
    } catch (err) {
        next(err);
    }
}

export async function updateItem(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const result = await itemService.updateItem(req.query); 
        if(result)            
            res.status(200).send(CONST.MSG.SUCCESS.UPDATE);
        else
            res.status(401).send(CONST.MSG.ERR.UPDATE);
    } catch (err) {
        next(err);
    }
}
