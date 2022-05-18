
import React, { Component} from "react";
import {View, TextInput, Button, ScrollView, Text } from "react-native";
import styles from "../styles";
import sqlQueries from "../db/db";
import TaskAlert from "./alerts";
import { DbContext, DbProvider } from "../db/dbProvider";

class EditTaskPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      taskName: this.props.route.params.name,
      today: props.day,
      placeholder: "New task name",
      dayState: null,
      oldTaskName: this.props.route.params.name,
    };
  }
  componentDidMount(){
      this.props.navigation.setOptions({
        headerLeft: () => (
          
            <Button
              onPress={() => this.clearTasks()} // this simply clears the page data and goes to previous page
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
    if(this.props.route.params.inDB){ // if we are editing an already created task
      db.update(this.state.taskShowingList, 1);
      sqlQueries.updateTaskName(this.state.taskName, this.state.oldTaskName);
      this.clearTasks();
    } else {// else we are editing a task that has not yet been sent to the db
      this.props.route.params.updateTask(this.state.taskName);
      this.props.route.params.updateCustom(this.state.oldTaskName, this.state.taskName);
      this.clearTasks();
    }
  }

  clearTasks(){
    this.setState({
      taskName: null,
      addButtonContainerStyle: styles.AddInput,
      inputBoxStyle: styles.Hidden,
      inputText: null,
      placeholder: "New task name",
    });
    this.props.navigation.goBack();
  }

  async getTasksAsync(){
    try{
    let row = await sqlQueries.getTasks();
    return row._array;

  }catch (err) {
    alert(error.message);
    return [];
  }
  } 

  loadTasks(props){
    this.getTasksAsync()
    .then(row => TaskAlert.isValidNameDB(row, props.nativeEvent))
    .then(isValid => this.finishAddName(props, isValid));
  }
  
    finishAddName(props, isValid){ // does validation checks and if they pass it adds the task to the page
    if(isValid){
  
      var oldName = this.state.taskName;
      this.setState({
        taskName: props.nativeEvent.text,
        addButtonContainerStyle: styles.AddInput,
        inputBoxStyle: styles.Hidden,
        inputText: null,
        placeholder: "New task name",
        oldTaskName: oldName,
      });
      }else{
        this.setState({ 
          addButtonContainerStyle: styles.AddInput,
          inputBoxStyle: styles.Hidden,
          inputText: null,
          placeholder: "New task name",
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
    <Text style={styles.EditNameText}>Current name: {this.state.taskName}</Text>
    <View style={styles.TaskContainer}>
        <TextInput 
        value = {this.state.inputText}
        onChangeText = {(value) => this.updateText(value)}
        onSubmitEditing={({
          nativeEvent: { text },
        }) =>
        this.loadTasks({ nativeEvent: { text } })}
        style={styles.TextInput} 
        placeholder={this.state.placeholder}></TextInput>
    </View>
  </View>
    </ScrollView>
  );
    }
}
EditTaskPage.contextType = DbContext;

export default EditTaskPage;