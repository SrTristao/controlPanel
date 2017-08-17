import * as moment from 'moment';
export function maskDate(date: Date) {    
    return moment(date).format('DD/MM/YYYY');
}