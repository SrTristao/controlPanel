import * as moment from 'moment';
export function maskDate(date: Date) {    
    return moment(date).format('DD/MM/YYYY');
}
export async function addLike(object: Object) {
    for(let param in object) {
        if (object.hasOwnProperty(param)) {
            object[param] = RegExp(object[param]);
        }
    }

    return object;
}