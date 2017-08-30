import * as UserRepository from '../repositories/User';
import { IUser } from '../../interfaces/IUser';
import * as Utils from '../../utils/utils';
import * as bcrypt from '../../services/bcrypt';
import { ServiceError } from '../../errors/service';
import * as mongoose from 'mongoose';
import { validate } from '../validators/user';
import * as token from '../middlewares/auth-service';

export async function list(filter: any) { 
    try {
        filter = JSON.parse(filter); 
    } catch (e) {
        throw new ServiceError('parameter-not-expected'); 
    }  
    
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
    if(!mongoose.Types.ObjectId.isValid(id)) throw new ServiceError('invalid-object-id');  

    return await UserRepository.findById(id);
}

export async function saveUser(user: IUser) {
    await validate(user);

    const alreadyExists = await UserRepository.findByEmail(user.email);

    if (alreadyExists) throw new ServiceError('user-already-created');
    
    return await UserRepository.saveUser(user);
}

export async function deleteUser(id: string) {
    if(!mongoose.Types.ObjectId.isValid(id)) throw new ServiceError('invalid-object-id');

    return await UserRepository.deleteUser(id);
}

export async function updateUser(user: IUser) {
    await validate(user);

    const alreadyExists = await UserRepository.findById(user._id);

    if (!alreadyExists) throw new ServiceError('user-not-found');

    return await UserRepository.updateUser(user);
}

export async function changePassword(data: any) {
    if (!data.email || !data.password || !data.newPassword) throw new ServiceError('object-invalid');
    
    const user = await findByEmail(data.email);

    await bcrypt.compare(user.password, data.password);

    await UserRepository.changePassword(data);
    
    user.password = await bcrypt.hash(data.newPassword);
    
    return await token.generateToken(user);
}