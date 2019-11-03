import {ADD_REMINDERTYPE} from '../types';
import {REMOVE_REMINDERTYPE} from '../types';

// action crator to return the type
export const ADD_REMINDE = (text, date)=> {
    console.log('from action', {type: ADD_REMINDERTYPE, text : text, date : date})
    return {
        type: ADD_REMINDERTYPE,
        text : text,
        date : date
    }
}

export const REMOVE_REMINDER = (id)=> {
    console.log('action ', {
        type: REMOVE_REMINDERTYPE,
        id: id
    })
    return {
        type: REMOVE_REMINDERTYPE,
        id: id
    }
}
