
import React, { Component} from "react";
import {View, ScrollView, TextInput, TouchableWithoutFeedback, Button } from "react-native";
import styles from "../styles";
import sqlQueries from "../db/db";
import TaskLibraryOption from "./taskLibraryOption";
import { DbProvider, DbContext } from "../db/dbProvider";
import { AntDesign } from '@expo/vector-icons';


class TaskLibrary extends Component{
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      placeholder: "Search Task Library...",
      showingList: [],
      tasksSelected: [],
      dayState: props.route.params.dayState.params,
    };
  }

  componentDidMount(){
    this.getTasksAsync();
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
    sqlQueries.addTasks(this.state.tasksSelected);
    db.update(this.state.taskShowingList, 1);
    this.clearTasks(true);

  }

  clearTasks(isSaved){
    this.setState({
      taskList: [],
      inputBoxStyle: styles.Hidden,
      inputText: null,
      placeholder: "Search Task Library...",
      showingList: [],
      tasksSelected: [],
    });

    if(isSaved){
      this.props.navigation.navigate("Home");
    }else{
      this.props.navigation.navigate("TasksOptionsPage");
    }
  }
  searchTaskLibrary(){
    console.log("searching...")
  }
  namesToTasks(row){ // creates all of the selectable tasks using db info
     var tempList = [];
     var taskNameList = [];
     var id = 0;
    row.forEach(el => {
      tempList.push(<TaskLibraryOption name={el.name} id={id} removeTask={this.removeTask} addTask={this.addTask} daystate={this.state.dayState} key={el.name}/>);
      taskNameList.push([el.name.toLowerCase(),id]);
      id++;
    });
    this.setState({
      taskList: tempList,
      taskNameList: taskNameList,
      showingList: tempList,
    })
    return tempList;
  }

  async getTasksAsync(){
    try{
    let row = await sqlQueries.getTaskLibrary().then(row => this.namesToTasks(row._array));
    return row._array;

  }catch (err) {
    alert(error.message);
    return [];
  }
  }

  updateText(value){ // filters the selectable information
    this.setState({
      inputText: value,
    });
    var filteredNames = this.state.taskNameList.filter((x)=>{ 
        return x[0].toLowerCase().includes(value.toLowerCase());
    })
    if(value == ""){
      this.setState({
        showingList: this.state.taskList,
      })
    }else{
    var tempList = [];
    for(var i = 0; i < this.state.taskList.length; i++){
      for(var j = 0; j < filteredNames.length; j++){
        if(this.state.taskList[i].props.id == filteredNames[j][1]){ // if this task is the same as a filtered list name
          tempList.push(this.state.taskList[i]);
        }
      }
    }
    this.setState({
      showingList: tempList,
    })
  }
}

  addTask = (taskName) => { // adds selected tasks to list of tasks to be sent to the db
    var tempList = this.state.tasksSelected;
    tempList.push([this.state.dayState.state.id,taskName]);
    this.setState({
      tasksSelected: tempList,
    })
  }

  removeTask = (taskName) => { // removes the selected tasks
    var tempList = this.state.tasksSelected;
    for(var i = 0; i < tempList.length; i++){
      if(tempList[i][1] == taskName){
        tempList.splice(i, 1);
      }
    }
    this.setState({
      tasksSelected: tempList,
    })
  }

  
    render(){
  return (
    <ScrollView>
    <View style={styles.TaskInputContainer}>
    <View style={styles.TaskContainer}>
    <AntDesign name="search1" style={styles.TextInputSearch}/>
    <TextInput 
        value = {this.state.inputText}
        onChangeText = {(value) => this.updateText(value)}
        onSubmitEditing={({
          nativeEvent: { text },
        }) =>
        this.searchTaskLibrary({ nativeEvent: { text } })}
        style={styles.TextInput} 
        placeholder={this.state.placeholder}></TextInput>
    </View>
    <View>{this.state.showingList}</View>
    </View>
  </ScrollView>
    
  );
    }
}
export default TaskLibrary;