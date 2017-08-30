import { NextFunction, Request, Response }  from 'express';
import * as userService from '../../services/User';
import * as userRepository from '../../repositories/user';
import { CONST } from '../../../utils/const';

export async function findById(req: Request, res: Response, next: NextFunction) : Promise<void> {
    try {
        const result = await userService.findById(req.params.id);
        if(result)            
            res.status(200).send(result);
        else
            res.status(401).send({message: CONST.MSG.ERR.FINDBYID});
    } catch (err) {
        errorHandler(err, res, next);
    }
}

export async function list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const result = await userService.list(req.params.filter); 
        res.status(200).send(result);
    } catch (err) {
        errorHandler(err, res, next);
    }
}

export async function saveUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {                    
        const result = await userService.saveUser(req.body); 
      if (result)
            res.status(200).send({message: CONST.MSG.SUCCESS.SAVE, user: result});
        else
            res.status(401).send({message: CONST.MSG.ERR.SAVE});
    } catch (err) {
        errorHandler(err, res, next);
    }
}

export async function deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const result = await userService.deleteUser(req.params.id); 
        if(result)            
            res.status(200).send({message: CONST.MSG.SUCCESS.DELETE});
        else
            res.status(401).send({message: CONST.MSG.ERR.DELETE});
    } catch (err) {
        next(err);
    }
}

export async function updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const result = await userService.updateUser(req.body); 
        if(result)            
            res.status(200).send({message: CONST.MSG.SUCCESS.UPDATE});
        else
            res.status(401).send({message: CONST.MSG.ERR.UPDATE});
    } catch (err) {
        errorHandler(err, res, next);
    }
}

export async function changePassword(req: Request, res:Response, next: NextFunction): Promise<void> {
    try {
        const result = await userService.changePassword(req.body);
        if(result) {
            res.setHeader('X-Token', result);
            res.status(200).send({message:'Senha alterada com sucesso!'});
        }
        else
            res.status(401).send({message: CONST.MSG.ERR.UPDATE});
    } catch (err) {
        errorHandler(err, res, next);
    }
}

export async function lastInserts(req: Request, res:Response, next: NextFunction): Promise<void> {
    try {
        const result = await userRepository.lastInserts();
        res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

export async function totUsers(req: Request, res:Response, next: NextFunction): Promise<void> {
    try {
        const result = await userRepository.selectCount();
        res.status(200).send({count: result});
    } catch (err) {
        next(err);
    }
}

function errorHandler(err: Error, res: Response, next: NextFunction): any {
    switch (err.message) {    
     case 'user-already-created'  :
        return res.status(401).send({message: 'Usuário já registrado.'})
      case 'object-invalid':
        return res.status(401).send({message: 'Usuário inválido.'})
      case 'invalid-object-id':
        return res.status(401).send({ message: 'Parametro inválido.'});
      case 'parameter-not-expected':
        return res.status(401).send({ message: 'Parametro não experado.'})
      case 'user-not-found':
        return res.status(404).send({ message: 'Usuário não encontrado.' });
      case 'user-inactive':
        return res.status(403).send({ message: 'Usuário inativo.' });
      case 'invalid-password':
        return res.status(400).send({ message: 'Senha inválida.' });
      default:
        next(err);
    }
  }
