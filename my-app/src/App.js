import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {ADD_REMINDE} from './actions/index';
import {REMOVE_REMINDER} from './actions/index';


class App extends React.Component {

  state = {
    text: '',
    date: new Date
  }

  handleChang = (e)=> {
    const name = e.target.name
    this.setState({
    [name]: e.target.value
    })
    console.log(this.state[name])
  }
  
  handleDAte = (e)=> {
    this.setState({
      data: e.target.value
    })
    console.log(this.state.date)
  }

  showRmainder = ()=> {
   return <ul>
              {
                this.props.remainders.map(reminder => {
                 return <li key={reminder.id}>
                          <div>{reminder.text}</div>
                          <div>{reminder.date}</div>
                          <div>
                              <button 
                              onClick = {()=> this.props.REMOVE_REMINDER(reminder.id)}  
                              >
                                X
                              </button>
                            </div>
                        </li>
                })
              }
         </ul>
  }

  render() {
    console.log(this.props)
  return (
    <div>
      <img src='' />
      <div>
      <h2>
     Organize your day
      </h2>  
      </div>
      <input
       onChange= {this.handleChang}
       name='text'
       className='form-control' type='text' placeholder='type the task here' />
      <input
      onChange= {this.handleDAte}
      name= 'date'
      className='form-control' type='datetime-local'  />

      <button
       onClick = {()=> this.props.ADD_REMINDE(this.state.text, this.state.data)}
      className='btn btn-primary btn-block'>
        Add Task
      </button>
      
      {this.showRmainder()}
      
      <button
      
       className='btn btn-primary btn-block'>
        Cleare Task
      </button>
    </div>
  );
}
}

// const mapDispatchToProps = (dispatch)=> {
//   return {
//     ADD_REMINDERMethod: ()=> dispatch(ADD_REMINDER())
//   }
// }

// const mapstatetoProps = (data)=> {
//   return {
//     remainders: data
//   }
// }

export default connect((data)=> {
  return {
    remainders: data
  }
}, {ADD_REMINDE, REMOVE_REMINDER})(App);
