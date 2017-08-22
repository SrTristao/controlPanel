import { Document } from 'mongoose';
export interface IItem extends Document {
    name: String;
    requester: String;
    status: String;
}