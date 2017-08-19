import { IItem } from '../interfaces/IItem';
import { Document, Schema, Model, model } from 'mongoose';
import * as bcrypt from '../services/bcrypt';
interface IItemModel extends IItem, Document {}

const itemSchema = new Schema({
    name: {type: String, required: true},
    requester: {type: String, required: true, unique: true},
    status: {type: String, required: true}
});

export const Item = model<IItemModel>('Item', itemSchema);
