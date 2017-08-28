import * as UserRepository from '../repositories/User';
import { IUser } from '../../interfaces/IUser';
import * as Utils from '../../utils/utils';
import * as bcrypt from '../../services/bcrypt';
import { login } from './auth';

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

    return await UserRepository.list( await Utils.addLike(filter));
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

export async function changePassword(data: any) {
    const user = await findByEmail(data.email);

    await bcrypt.compare(user.password, data.password);

    await UserRepository.changePassword(data);

    return await login(data.email, data.newPassword);
}