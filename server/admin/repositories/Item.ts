import { Item } from '../../models/Item';
import { IItem } from '../../interfaces/IItem';

export async function findById(id: number) : Promise<any> {
    return await Item.findById(id);
}

export async function list(filter: any) : Promise<IItem[]> {    
   return await Item.find(filter);
}

export async function saveItem(item: IItem) : Promise<IItem> {    
    const newItem = new Item(item);
    return await newItem.save();
}

export async function deleteItem(id: string) : Promise<any> { 
    return await Item.findByIdAndRemove(id);
}

export async function updateItem(item: IItem) : Promise<any> {    
   return await Item.findOne({_id:item._id}, (err, doc) => {
        doc.name = item.name;        
        doc.status = item.status;
        doc.save();
    })
}

export async function lastInserts(): Promise<any> {
    return await Item.find().sort('-createdAt').limit(5);
}

export async function selectCount(): Promise<any> {
    return await Item.count({});
}