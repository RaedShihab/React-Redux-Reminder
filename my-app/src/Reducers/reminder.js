import {ADD_REMINDERTYPE, REMOVE_ALL} from '../types';
import {REMOVE_REMINDERTYPE} from '../types';

const reminder = (state = [], action)=> {
    let reminders = [];
    if(action.type === ADD_REMINDERTYPE) {
        reminders = [...state, {text: action.text, date: action.date, id: Math.random()}]
        console.log('from reducer', reminders)
        return reminders;
    }
    else if(action.type === REMOVE_REMINDERTYPE) {
            reminders = state.filter(reminder => {
            return reminder.id !== action.id
           });
           console.log('from reducer',reminders)
           return reminders
    }
    else if(action.type === REMOVE_ALL) {
        return reminders
    }
    else {
        return state
    }
}

export default reminder