import React, { Component } from 'react';
import sqlQueries from './db';
import Task from '../classes/task';

const DbContext = React.createContext("DEFAULT");

class DbProvider extends Component {
    constructor(props){
      super(props);
      this.state = {
        taskList: [],
      }
    }
    componentDidMount(){
      sqlQueries.getTasks().then(row => this.setTasksList(row)); 
    }

    updateTaskList = (tasksAdded, offset) => {
      if(offset == 1){ // if adding tasks
        var tempList = this.state.taskList;
        tempList.push(tasksAdded);
        this.setState({
          taskList: tempList,
        })
      }else if(offset == -1){ // if removing a task
        for(var i = 0; i < this.state.taskList.length; i++){ 
          for(var j = 0; j < tasksAdded.length; j++){ 
            if(this.state.taskList[i].state.name == tasksAdded[i].state.name){ // if task being removed is i in state taskList
              var tempList = this.state.taskList; // remove and update state taskList
              tempList.splice(i, 1);
              this.setState({
                taskList: tempList,
              });
              break;
            }
          }
          }
        }
    }

    setTasksList(row){
      var tempList = [];
      for(var i = 0; i < row._array.length; i++){
          tempList.push(<Task taskName={row._array[i].name} dayId={row._array[i].id} nav={this.props} inDB={true} key={row._array[i].name}/>);
      }
  
      this.setState({
        taskList: tempList,
      })
    }

    render () {
      return (
        <DbContext.Provider value={{taskList: this.state.taskList, update: this.updateTaskList}}>
          {this.props.children}
        </DbContext.Provider>
      )
    }
  }

  
  
  export { DbContext, DbProvider }