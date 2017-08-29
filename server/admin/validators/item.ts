import * as joi from 'joi';
import { IItem } from '../../interfaces/IItem';

const schema = joi.object().keys({
    name: joi.string().required(),
    status: joi.string().valid('Concluido').valid('Pendente').required(),    
    user: {name: joi.string().required(),
          _id: joi.string().required()}
});

export async function validate(model: any) {
    return validateAsPromise<IItem>(model, schema);
}

function validateAsPromise<T>(model: any, schema: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      joi.validate(model, schema, <any>{ abortEarly: false, stripUnknown: { objects: true, arrays: false } }, (err, value) => {
        if (err) reject({message: 'object-invalid'});
        resolve(value);
      });
    });
  }