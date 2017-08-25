// import { NextFunction, Request, Response }  from 'express';
// import * as lodash from 'lodash';
// import { decodeToken } from '../admin/middlewares/auth-service';

import * as lodash from 'lodash';
import { NextFunction, Request, Response } from 'express';

export function authRequired(roles: string | string[] = null): (req: Request, res: Response, next: NextFunction) => Promise<void> {

  return async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    console.log('passou aqi' + req.user);
    if (req.method === 'OPTIONS') {
      return next();
    }
        
    if (!req.user) {
      return res.status(401).send({ error: 'authorization token missing or invalid, sorry' });
    }

    if (!roles) {
      return next();
    }

    const rolesArray = lodash.flattenDeep([roles, ['admin']]);
    const isAuthorized = rolesArray.some(role => req.user.role === role);

    if (!isAuthorized) {
      return res.status(403).send({ error: 'you dont have the access rights to access this url' });
    }

    next();
  };

}
