import { User } from '../models/User';
import { IUser } from '../interfaces/IUser';

export async function findById(id: number) : Promise<any> {
    return await User.findById(id);
}
export async function list() : Promise<IUser[]> {    
   return await User.find();
}

export async function saveUser(user: IUser) : Promise<IUser> {    
    const newUser = new User(user);
    return await newUser.save();
}

export async function deleteUser(id: string) : Promise<any> { 
    return await User.findByIdAndRemove(id);
}
export async function updateUser(user: IUser) : Promise<any> {    
   return await User.findOne({id:user._id}, (err, doc) => {
        doc.name = user.name;
        doc.email = user.email;
        doc.password = user.password;
        doc.accessLevel = user.accessLevel;
        doc.save();
    })
}