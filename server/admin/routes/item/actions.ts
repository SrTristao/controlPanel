import { NextFunction, Request, Response }  from 'express';
import * as itemService from '../../services/Item';
import { CONST } from '../../../utils/const';
import * as itemRepository from '../../repositories/Item';

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
        const result = await itemService.list(req.params.filter); 
        res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

export async function saveItem(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {        
        const result = await itemService.saveItem(req.body); 
        if(result)            
            res.status(200).send({message: CONST.MSG.SUCCESS.SAVE, item: result});
        else
            res.status(401).send(CONST.MSG.ERR.SAVE);
    } catch (err) {
        next(err);
    }
}

export async function deleteItem(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const result = await itemService.deleteItem(req.params.id); 
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
        const result = await itemService.updateItem(req.body); 
        if(result)            
            res.status(200).send(CONST.MSG.SUCCESS.UPDATE);
        else
            res.status(401).send(CONST.MSG.ERR.UPDATE);
    } catch (err) {
        next(err);
    }
}

export async function lastInserts(req: Request, res:Response, next: NextFunction): Promise<void> {
    try {
        const result = await itemRepository.lastInserts();
        res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

export async function totItems(req: Request, res:Response, next: NextFunction): Promise<void> {
    try {
        const result = await itemRepository.selectCount();
        res.status(200).send({count: result});
    } catch (err) {
        next(err);
    }
}
