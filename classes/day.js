import { Component } from "react";
import { View, ScrollView} from "react-native";
import NoTasks from "../components/noTask";
import AddTasksBtn from "../components/addTaskBtn";
import sqlQueries from "../db/db";
import Task from "./task";
import styles from "../styles";

class Day extends Component{
  constructor(props) {
    super(props);
    this.state = {
        taskList: props.taskList,
        date: props.date,
        id: props.id,
        refresh: 0,
    };
  }
  componentDidMount(){ // this gets the task data from the db and refreshes anytime the page is navigated to
    this.getTasksAsync()
    .then(row => this.setTasksList(row));
   this._unsubscribe = this.props.nav.navigation.addListener('focus', () => {
      this.getTasksAsync()
      .then(row => this.setTasksList(row));
    });
  }
  componentWillUnmount() { // this unsubscribes the listener above on unmounting
    this._unsubscribe();
  }


  async getTasksAsync(){ // an async function to get all tasks from the db
    let row = await sqlQueries.getTasks();
    return row;
  }

  setTasksList(row){ // this takes the row returned from the async function above and creats the tasks components for the page
    var tempList = [];
    for(var i = 0; i < row._array.length; i++){
      if(row._array[i].id == this.state.id){
        tempList.push(<Task taskName={row._array[i].name} dayId={row._array[i].id} nav={this.props.nav.navigation} inDB={true}  removeTaskFunc={this.removeTask} key={row._array[i].name}/>);
      }
    }
    this.setState({
      taskList: tempList,
    })
  }

  removeTask = (taskName) => { // this removes the tasks from the page
    var tempList = [];

      for(var i = 0; i < this.state.taskList.length; i++){ 
          if(this.state.taskList[i].props.taskName == taskName){ // if task being removed is i in state taskList            
          }else{
            tempList.push(this.state.taskList[i])
          }
      }
      this.setState({
        taskList: tempList,
      });
  }

    render(){ // if there is not data to display then display the no data component, else display the data list
        return ( 
          this.state.taskList.length == 0
              ? <NoTasks nav={this.props.nav} dayState={this} />
              : ( 
              <View style={styles.TaskDayContainer}>
                <View style={styles.TaskListContainer}>
                  <ScrollView>
                {this.state.taskList}</ScrollView>
                </View>
                <AddTasksBtn nav={this.props.nav} dayState={this} />
              </View>)    
        );
      }

}
export default Day;
