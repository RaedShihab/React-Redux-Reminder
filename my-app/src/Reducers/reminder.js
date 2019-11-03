import {ADD_REMINDERTYPE} from '../types';
import {REMOVE_REMINDERTYPE} from '../types';

const reminder = (state = [], action)=> {
    let reminders = null;
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

    // else if(action.type === REMOVE_REMINDERTYPE) {
    //    reminders = state.map(reminder => {
    //        if(reminder.id !== action.id) {
    //            return reminder
    //        }
    //    })
    //    console.log('dsds',reminders)
    //    return reminders
    // }
    else {
        return state
    }
}

export default reminder