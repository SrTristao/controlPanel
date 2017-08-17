import { Document, Types } from 'mongoose';
export interface IUser extends Document {
    email: string;
    password: string;
    name: string;
    accessLevel: number;
    createdAt: Date;    
}