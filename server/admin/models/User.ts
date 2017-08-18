import { IUser } from '../interfaces/IUser';
import { Document, Schema, Model, model } from 'mongoose';
import * as bcrypt from '../../services/bcrypt';
interface IUserModel extends IUser, Document {}

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    roles: [{
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    }],
    createdAt: Date
});
userSchema.pre("save", function(next) {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }   
    setPassword(this.password);
    next();
});

function setPassword (password: string): Promise<void> {
    return bcrypt.hash(password).then(hash => {
        this.password = hash;
    })
}

function checkPassword (hash, password) {

}

export const User = model<IUserModel>('User', userSchema);
