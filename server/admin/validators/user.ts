import * as joi from 'joi';
import { IUser } from '../../interfaces/IUser';

const schema = joi.object().keys({
    name: joi.string().required(),
    password: joi.string().min(6).required(),
    email: joi.string().email().required(),
    role: joi.string().valid('admin').valid('user').required()
});

export async function validate(model: any) {
    return validateAsPromise<IUser>(model, schema);
}

function validateAsPromise<T>(model: any, schema: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      joi.validate(model, schema, <any>{ abortEarly: false, stripUnknown: { objects: true, arrays: false } }, (err, value) => {
        if (err) reject({message: 'object-invalid'});
        resolve(value);
      });
    });
  }