import { NextFunction, Request, Response }  from 'express';
import * as jwt from 'jsonwebtoken';
import * as config from '../../config';
import { IUser } from '../../interfaces/IUser';
import { User } from '../../models/User';
import { findById } from '../repositories/User';

export async function generateToken(data: any) {
    return await jwt.sign(data, config.SALT_KEY, {expiresIn: '1d'});
}

export function decodeToken(token: any) : Promise<any> {
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