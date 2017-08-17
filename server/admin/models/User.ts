import { IUser } from '../interfaces/IUser';
import { Document, Schema, Model, model } from 'mongoose';

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
    hash('123');

    function hash (password) {
        this.password = password;
    }

    next();
});



export const User = model<IUserModel>('User', userSchema);
