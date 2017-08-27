import { Document } from 'mongoose';
export interface IItem extends Document {
    name: String;
    user: {
        _id: any,
        name: string
    }
    status: String;
}