import {ADD_REMINDERTYPE, REMOVE_ALL, REMOVE_REMINDERTYPE} from '../types';
import { bake_cookie, read_cookie} from 'sfcookies';


const reminder = (state = [], action)=> {
    let reminders = [];
    state = read_cookie('reminders')

    if(action.type === ADD_REMINDERTYPE) {
        reminders = [...state, {text: action.text, date: action.date, id: Math.random()}]
        bake_cookie('reminders', reminders)
        return reminders;
    }
    else if(action.type === REMOVE_REMINDERTYPE) {
            reminders = state.filter(reminder => {
            return reminder.id !== action.id
           });
           bake_cookie('reminders', reminders)
           return reminders
    }
    else if(action.type === REMOVE_ALL) {
        bake_cookie('reminders', reminders)
        return reminders
    }
    else {
        return state
    }
}

export default reminder