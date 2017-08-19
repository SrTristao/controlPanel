import { IUser } from '../interfaces/IUser';
import { Document, Schema, Model, model } from 'mongoose';
import * as bcrypt from '../services/bcrypt';
interface IUserModel extends IUser, Document {}

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    },
    createdAt: Date
});
userSchema.pre("save", async function(next) {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }   
    this.password = await bcrypt.hash(this.password);
    next();
});


export const User = model<IUserModel>('User', userSchema);
