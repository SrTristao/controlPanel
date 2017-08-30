import { User } from '../../models/User';
import { IUser } from '../../interfaces/IUser';
import * as bcrypt from '../../services/bcrypt';

export async function findByEmail(email: string) : Promise<any> {
    return await User.findOne({email: email});
}

export async function findById(id: number) : Promise<any> {
    return await User.findById(id);
}

export async function list(filter: any) : Promise<IUser[]> {   
   return await User.find(filter);
}

export async function saveUser(user: IUser) : Promise<IUser> {    
    const newUser = new User(user);    
    return await newUser.save();
}

export async function deleteUser(id: string) : Promise<any> { 
    return await User.findByIdAndRemove(id);
}

export async function updateUser(user: IUser) : Promise<any> {   
   return await User.findOne({_id:user._id}, async (err, doc) => {        
       return await Object.assign(doc, user).save();
    })
}

export async function changePassword(user: any): Promise<any> {
    return await User.findOne({email: user.email}, async (err, doc) => {
        doc.password = await bcrypt.hash(user.newPassword);
        doc.save();
    })
}

export async function lastInserts(): Promise<any> {
    return await User.find().sort('-createdAt').limit(5);
}

export async function selectCount(): Promise<any> {
    return await User.count({});
}