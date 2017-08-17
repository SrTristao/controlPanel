import * as UserRepository from '../repositories/User';
import { IUser } from '../interfaces/IUser';

export async function findById(id: number) {
    return await UserRepository.findById(id);
}

export async function saveUser(user: IUser) {
    return await UserRepository.saveUser(user);
}

export async function deleteUser(id: string) {
    return await UserRepository.deleteUser(id);
}

export async function updateUser(user: IUser) {
   return await UserRepository.updateUser(user);
}