import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {ADD_REMINDE,REMOVE_REMINDER, REMOVE_ALLL} from './actions/index';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from './imgs/1.png'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: ' ',
      date: new Date
    }
  }
  

  handleTextChang = (e)=> {
    const name = e.target.name
    this.setState({
    [name]: e.target.value
    })
  }
  
  handleDAte = (e)=> {
    this.setState({
      data: e.target.value
    })
  }

  showRmainder = ()=> {
   return (
                this.props.remainders.map(reminder => {
                 return <li key={reminder.id} className='list-group-item listItems'>
                          {reminder.text} {':'+' '} 
                          {moment(reminder.date).fromNow()}
                              <div className='circleeebtn btn btn-danger'
                              onClick = {()=> this.props.REMOVE_REMINDER(reminder.id)}  
                              >
                                X
                              </div>
                        </li>
                     
  })
   )
}

  handleChange = date => {
    this.setState({
      date: date
    })
  };

  render() {
  return (
    <div className='App'>
      <img src={logo} />
      <div className='reminder-titel'>
      <h2>
     Set Your Reminder
      </h2>  
      </div>
      <input
       value= {this.state.text}
       onChange= {this.handleTextChang}
       name='text'
       className='form-control' type='text' placeholder='type the task here' />
      {/* <input
      onChange= {this.handleDAte}
      name= 'date'
      className='form-control' type='datetime-local'  /> */}

      <DatePicker
        className='form-control'
        selected={this.state.date}
        onChange={date => this.setState({date: date}, console.log('k',this.state.date))}
        // onChange={this.handleDAte}
        showTimeSelect
        timeFormat="HH:mm"
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
          />

      <button
       onClick = {
         ()=>{ 
          if(this.state.text === " " || !this.state.date) {alert('Please enter a valid information')}
          else {
            this.props.ADD_REMINDE(this.state.text, this.state.date)
          this.setState({
            text: '',
            date : ''
          })
          }
          }
        }
       
      className='btn btn-primary btn-block'>
        Add Task
      </button>
      
      {this.showRmainder()}
      
      <button
       onClick={this.props.REMOVE_ALLL}
       className='btn btn-block btn-danger'>
        Cleare All Task
      </button>
    </div>
  );
}
}

export default connect((data)=> {
  return {
    remainders: data
  }
}, {ADD_REMINDE, REMOVE_REMINDER, REMOVE_ALLL})(App);
