import { Document, Types } from 'mongoose';
export interface IItem extends Document {
    name: String;
    requester: String;
    status: String;
}