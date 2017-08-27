import * as UserRepository from '../repositories/User';
import { IUser } from '../../interfaces/IUser';
import * as Utils from '../../utils/utils';

export async function list(filter: any) {   
    filter = JSON.parse(filter); 
    if(!filter.name) {
        delete filter.name;
    }

    if(!filter.role) {
        delete filter.role;
    }

    if(!filter.createdAt) {
        delete filter.createdAt;
    }

    return await UserRepository.list(Utils.addLike(filter));
}
export async function findByEmail(email: string) {
    return await UserRepository.findByEmail(email);
}
export async function findById(id: number) {
    return await UserRepository.findById(id);
}

export async function saveUser(user: IUser) {
    const alreadyExists = await UserRepository.findByEmail(user.email);
    if (alreadyExists) {
        return 'Email já cadastrado.'
    }
    return await UserRepository.saveUser(user);
}

export async function deleteUser(id: string) {
    return await UserRepository.deleteUser(id);
}

export async function updateUser(user: IUser) {
   return await UserRepository.updateUser(user);
}