import { NextFunction, Request, Response }  from 'express';
import * as authService from '../../services/Auth';
import { CONST } from '../../../utils/const';

export async function login(req: Request, res: Response, next: NextFunction) : Promise<void> {
    try {
        const token = await authService.login(req.body.email, req.body.password);                    
        res.header('x-access-token');
        res.setHeader('x-access-token', token);
        res.status(200).json({ token });
    } catch (err) {
        errorHandler(err, res, next);
    }
}

function errorHandler(err: Error, res: Response, next: NextFunction): any {
  switch (err.message) {
    case 'user-not-found':
      return res.status(404).send({ message: 'Usuário não encontrado' });
    case 'user-inactive':
      return res.status(403).send({ message: 'Usuário inativo' });
    case 'invalid-password':
      return res.status(400).send({ message: 'Senha inválida' });
    default:
      next(err);
  }
}
