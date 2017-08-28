import { IItem } from '../interfaces/IItem';
import { Document, Schema, model } from 'mongoose';
interface IItemModel extends IItem, Document {}

const itemSchema = new Schema({
    name: {type: String, required: true},
    user: {name: {type: String, required: true},
          _id: {type: String, required: true}
        },
    status: {type: String, required: true},
    createdAt: Date
});
itemSchema.pre("save", async function(next) {
    if (!this.createdAt) {
        this.createdAt = new Date();        
    }      
    next();
});

export const Item = model<IItemModel>('Item', itemSchema);
