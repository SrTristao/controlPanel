import * as config from '../config';
import * as jwt from 'jsonwebtoken';
import * as lodash from 'lodash';

export function create(data: any, type: string, exp: number = null): Promise<string> {
  data.type = type;

  if (exp) {
    data.exp = expirationDate(exp);
  }

  return Promise.resolve(jwt.sign(data, config.SECRET));
}

export function verify(token: string, type: string | string[]): Promise<any> {
  type = lodash.flatten([type]);

  return new Promise<any>((resolve, reject) => {
    jwt.verify(token, config.SECRET, (err, decoded: any) => {
      if (err || !decoded || !type.includes(decoded.type)) {
        return reject(resolveVerifyError(err));
      }

      resolve(decoded);
    });
  });
}

function expirationDate(seconds: number): number {
  return (Math.floor(Date.now() / 1000) + seconds) * 1;
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