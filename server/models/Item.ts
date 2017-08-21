import { IItem } from '../interfaces/IItem';
import { Document, Schema, model } from 'mongoose';
interface IItemModel extends IItem, Document {}

const itemSchema = new Schema({
    name: {type: String, required: true},
    requester: {type: String, required: true, unique: true},
    status: {type: String, required: true}
});

export const Item = model<IItemModel>('Item', itemSchema);
