import { Document, Types } from 'mongoose';
export interface IUser extends Document {
    email: string;
    password: string;
    name: string;
    role: string[],
    createdAt: Date;    
}