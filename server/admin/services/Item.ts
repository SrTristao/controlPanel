import * as itemRepository from '../repositories/Item';
import { IItem } from '../../interfaces/IItem';
import * as Utils from '../../utils/utils';
import { validate } from '../validators/item';
import * as mongoose from 'mongoose';
import { ServiceError } from '../../errors/service';

export async function list(filter: any) {       
    try {
        filter = JSON.parse(filter); 
    } catch (e) {
        throw new ServiceError('parameter-not-expected'); 
    }   
    
    if(!filter.name) {
        delete filter.name;
    }   

    if(!filter.status) {
        delete filter.status;
    }  
    
    return await itemRepository.list(await Utils.addLike(filter));
}
export async function findById(id: number) {
    if(!mongoose.Types.ObjectId.isValid(id)) throw new ServiceError('invalid-object-id');

    return await itemRepository.findById(id);
}

export async function saveItem(item: IItem) {
    await validate(item);

    return await itemRepository.saveItem(item);
}

export async function deleteItem(id: string) {
    if(!mongoose.Types.ObjectId.isValid(id)) throw new ServiceError('invalid-object-id');

    return await itemRepository.deleteItem(id);
}

export async function updateItem(item: IItem) {
    await validate(item);

    const alreadyExists = await findById(item._id);
    
    if (!alreadyExists) throw new ServiceError('item-not-found');

    return await itemRepository.updateItem(item);
}