
import React, { Component} from "react";
import {View, TextInput, Button, ScrollView } from "react-native";
import styles from "../styles";
import Task from "../classes/task";
import sqlQueries from "../db/db";
import TaskAlert from "./alerts";
import { DbContext, DbProvider } from "../db/dbProvider";

class CustomTask extends Component{
  constructor(props) {
    super(props);
    this.state = {
        taskName: null,
        today: props.day,
        placeholder: "Add a task name",
        dayState: this.props.route.params.dayState.params,
        taskShowingList: [],
        taskList: [],
        toLibraryList: [],
    };
  }
  componentDidMount(){ // creating the headers for this page
    this.props.navigation.setOptions({
      headerLeft: () => (
        
          <Button
            onPress={() => this.clearTasks(false)} // this simply clears the page data and goes to previous page
            title="Cancel"
            color="#fff"
          />

      ),
      headerRight: () => (
        <DbProvider>
        <DbContext.Consumer>{(db) =>(
          <Button
            onPress={ () => this.dataToDB(db)} // this will send the data to the db to be updated elsewhere
            title="Save"
            color="#fff"
          />          )}
          </DbContext.Consumer></DbProvider>
              ),
    })

  }

  dataToDB(db){
    sqlQueries.addDay(this.state.dayState.props.id, this.state.dayState.state.date);
    sqlQueries.addTasks(this.state.taskList);
    sqlQueries.addToTaskLibrary(this.state.toLibraryList);
    db.update(this.state.taskShowingList, 1);
    this.clearTasks(true);
  }


  clearTasks(isSaved){
    this.setState({
      taskList: [],
      taskName: null,
      addButtonContainerStyle: styles.AddInput,
      inputBoxStyle: styles.Hidden,
      inputText: null,
      placeholder: "Add a new task",
      taskShowingList: [],
    });

    if(isSaved){
      this.props.navigation.navigate("Home");
    }else{
    this.props.navigation.navigate("TasksOptionsPage");
    }

  }

  updateCustomTaskName = (oldName, newName) => { // this updates the taks name
    var tempShowingList = this.state.taskShowingList;
    var tempList = this.state.taskList;
    for(var i = 0; i < this.state.taskShowingList.length; i++){
      if(this.state.taskShowingList[i].props.taskName == oldName){
        tempShowingList[i] = <Task taskName={newName} dayId={this.state.dayState.props.id} updateLibraryList={this.updateLibraryList} nav={this.props.navigation} inDB={false} removeCustomTaskFunc={this.removeCustomTaskFunc} updateCustom={this.updateCustomTaskName} key={newName}/>;
        tempList[i] = [this.state.dayState.props.id, newName];
        this.setState({
          taskList: tempList,
          tempListShowing: tempShowingList,
        })
      }
    }
  }

  removeCustomTaskFunc = (taskName) => {
    for(var i = 0; i < this.state.taskShowingList.length; i++){ 
        if(this.state.taskShowingList[i].props.taskName == taskName){ // if task being removed is i in state taskList
          var tempList = this.state.taskShowingList; // remove and update state taskList
          var tempShowingList = this.state.taskList;
          tempList.splice(i, 1);
          tempShowingList.splice(i, 1);
          this.setState({
            taskShowingList: tempList,
          });
          break;
        }
    }
}

  updateLibraryList = (action, name) => {
    if(action == -1){
      var tempList = this.state.toLibraryList;
      for(var i = 0; i < this.state.toLibraryList; i ++){
        if(this.state.toLibraryList[i] == name){
          tempList.splice(i, 1);
        }
      }
      this.setState({
        toLibraryList: tempList,
      })
    }{
      var tempList = this.state.toLibraryList;
      tempList.push(name);
      this.setState({
        toLibraryList: tempList,
      })
    }
    
  }

  async getTasksAsync(){
    try {
    let row = await sqlQueries.getTasks();
    return row._array;

    }catch (err) {
      alert(error.message);
      return [];
    }
  } 

  loadTasks(props){
    this.getTasksAsync()
    .then(row => TaskAlert.isValidNameDB(row, props.nativeEvent, this.state.dayState.state.id))
    .then(isValid => this.finishAddName(props, isValid));
  }
  
    finishAddName(props, isValid){ // does validation checks and if they pass it adds the task to the page
      var created = TaskAlert.isCreated(this.state.taskList,props.nativeEvent.text, this.state.dayState.state.id);
    if(isValid && !created){
      var newTask = <Task taskName={props.nativeEvent.text} dayId={this.state.dayState.props.id} updateLibraryList={this.updateLibraryList} nav={this.props.navigation} inDB={false} removeCustomTaskFunc={this.removeCustomTaskFunc} updateCustom={this.updateCustomTaskName} key={props.nativeEvent.text}/>;
      var tempList = this.state.taskList;
      var tempShowingList = this.state.taskShowingList;
      tempList.push([this.state.dayState.state.id, props.nativeEvent.text]);
      tempShowingList.push(newTask);
  
      this.setState({
        taskList: tempList,
        taskName: props.nativeEvent.text,
        addButtonContainerStyle: styles.AddInput,
        inputBoxStyle: styles.Hidden,
        inputText: null,
        placeholder: "Add another task",
        taskShowingList: tempShowingList,
        newTask: newTask,
      });
      }else{
        this.setState({ 
          addButtonContainerStyle: styles.AddInput,
          inputBoxStyle: styles.Hidden,
          inputText: null,
          placeholder: "Add a new task",
        });
      }
    }
   
    updateText(value){
      this.setState({
        inputText: value,
      })
    }

    render(){
  return (
    <ScrollView>
    <View style={styles.TaskInputContainer}>
    <View style={styles.TaskContainer}>
        <TextInput 
        value = {this.state.inputText}
        onChangeText = {(value) => this.updateText(value)}
        onSubmitEditing={({
          nativeEvent: { text },
        }) =>
        this.loadTasks({ nativeEvent: { text } })}
        style={styles.CustomTextInput} 
        placeholder={this.state.placeholder}></TextInput>
    </View>
    <View>{this.state.taskShowingList}</View>
  </View>
    </ScrollView>
  );
    }
}
CustomTask.contextType = DbContext;

export default CustomTask;