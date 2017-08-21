import { NextFunction, Request, Response }  from 'express';
import * as lodash from 'lodash';
import { decodeToken } from '../admin/middlewares/auth-service';

export function authorize(roles: string | string[] = null): (req: Request, res: Response, next: NextFunction) => Promise<void> { 
  return async (req: Request, res:Response, next: NextFunction): Promise<any> => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];    
    if(!token) {
        res.status(401).json({
            message: 'Access denied'
        })
    } else {     
      decodeToken(token).then((user) => {          
          if (!roles) {
            return next();
          }

          const rolesArray = lodash.flattenDeep([roles, ['admin']]);            
          const isAuthorized = rolesArray.some(role => user.role == role); 
                            
          if(!isAuthorized) {
            return res.status(403).send({ error: 'you dont have the access rights to access this url' });
          }
          next();        
      }).catch(err => {
        res.status(401).json({
          message: err.message
        })
      })      
    }
  }
}
