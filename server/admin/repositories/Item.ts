import { Item } from '../../models/Item';
import { IItem } from '../../interfaces/IItem';

export async function findById(id: number) : Promise<any> {
    return await Item.findById(id);
}

export async function list() : Promise<IItem[]> {    
   return await Item.find();
}

export async function saveItem(item: IItem) : Promise<IItem> {    
    const newItem = new Item(item);
    return await newItem.save();
}

export async function deleteItem(id: string) : Promise<any> { 
    return await Item.findByIdAndRemove(id);
}

export async function updateItem(item: IItem) : Promise<any> {    
   return await Item.findOne({id:item._id}, (err, doc) => {
        doc.name = item.name;
        doc.requester = item.requester;
        doc.status = item.status;
        doc.save();
    })
}