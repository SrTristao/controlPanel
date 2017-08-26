import * as jwt from 'jsonwebtoken';
import * as config from '../../config';
import { NextFunction, Request, Response } from 'express';

export async function generateToken(data: any) {
    return await jwt.sign(data, config.SALT_KEY, {expiresIn: '1d'});
}

export async function decodeToken(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {    
    const token = req.get('Authorization') || `bearer ${req.query.t || req.body.authToken}`;  
    if (!token) return next();

    req.user = await verify(token.split(' ')[1]);
  
    next();
  } catch (err) {
    next();
  }
}

export function verify(token: string): Promise<any> {    
  return new Promise<any>((resolve, reject) => {
    jwt.verify(token, config.SALT_KEY, (err, decoded: any) => {      
      if (err || !decoded) {
        return reject(resolveVerifyError(err));
      }      
      resolve(decoded._doc);
    });
  });
}

function resolveVerifyError(err: Error): Error {
  if (!err) {
    return new Error('token-type-not-match');
  }

  switch (err.name) {
    case 'TokenExpiredError':
      return new Error('token-expired');
    default:
      return new Error('token-invalid');
  }
}