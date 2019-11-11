import {ADD_REMINDERTYPE} from '../types';
import {REMOVE_REMINDERTYPE} from '../types';
import {REMOVE_ALL} from '../types';

// action crator to return the type
export const ADD_REMINDE = (text, date)=> {
    return {
        type: ADD_REMINDERTYPE,
        text : text,
        date : date
    }
}

export const REMOVE_REMINDER = (id)=> {
    return {
        type: REMOVE_REMINDERTYPE,
        id: id
    }
}
 export const REMOVE_ALLL = () => {
     return {
         type: REMOVE_ALL,
     }
 }