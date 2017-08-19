import * as itemRepository from '../repositories/Item';
import { IItem } from '../../interfaces/IItem';

export async function findById(id: number) {
    return await itemRepository.findById(id);
}

export async function saveItem(item: IItem) {
    return await itemRepository.saveItem(item);
}

export async function deleteItem(id: string) {
    return await itemRepository.deleteItem(id);
}

export async function updateItem(item: IItem) {
   return await itemRepository.updateItem(item);
}