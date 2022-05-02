
import React, { Component} from "react";
import {View, TextInput, TouchableWithoutFeedback, Text, Button } from "react-native";
import styles from "../styles";
import Chore from "../classes/chore";
import sqlQueries from "../db/db";
import ChoreAlert from "./alerts";
import { ChoresContext } from "../context/choreContext";
import { DbContext } from "../db/dbProvider";

class CustomChore extends Component{
  constructor(props) {
    super(props);
    this.state = {
        choreName: null,
        today: props.day,
        placeholder: "Add a chore name",
        dayState: this.props.route.params.dayState.params,
        choreShowingList: [],
        choreList: [],
    };
  }
  componentDidMount(){
    var globalChoresList = this.context;
    this.props.navigation.setOptions({
      headerLeft: () => (
        
          <Button
            onPress={() => this.clearChores()}
            title="Cancel"
            color="#fff"
          />

      ),
      headerRight: () => (
        <DbContext.Consumer>{(db) =>(
          <Button
            onPress={ () => this.dataToDB(db)}
            title="Save"
            color="#fff"
          />          )}
          </DbContext.Consumer>
              ),
    })

  }

  dataToDB(db){
    sqlQueries.addDay(this.state.dayState.props.id, this.state.dayState.state.date);
    var choresAdded = sqlQueries.addChores(this.state.choreList)
    this.clearChores();
    this.props.navigation.navigate("ChoresOptionsPage");
    console.log(db);
    db.updateChoreList(choresAdded, 1);
    if(choresAdded){
      console.log("failed");
    }else{
      console.log("success");
    }
  }


  clearChores(){
    this.setState({
      choreList: [],
      choreName: null,
      addButtonContainerStyle: styles.AddInput,
      inputBoxStyle: styles.Hidden,
      inputText: null,
      placeholder: "Add a new chore",
      choreShowingList: [],
    });
    this.props.navigation.navigate("ChoresOptionsPage");

  }

  async getChoresAsync(){
    let row = await sqlQueries.getChores();
    return row._array;
  }

  loadChores(props){
    this.getChoresAsync()
    .then(row => ChoreAlert.isValidNameDB(row, props.nativeEvent))
    .then(isValid => this.finishAddName(props, isValid));
  }
  
    finishAddName(props, isValid){
      var created = ChoreAlert.isCreated(this.state.choreList,props.nativeEvent.text);
    if(isValid && !created){
      var newChore = <Chore choreName={props.nativeEvent.text} dayId={this.state.dayState.props.id} nav={this.props.navigation} inDB={false} key={props.nativeEvent.text}/>;
      var tempList = this.state.choreList;
      var tempShowingList = this.state.choreShowingList;
      tempList.push([this.state.dayState.state.id, props.nativeEvent.text]);
      tempShowingList.push(newChore);
  
  
      this.setState({
        choreList: tempList,
        choreName: props.nativeEvent.text,
        addButtonContainerStyle: styles.AddInput,
        inputBoxStyle: styles.Hidden,
        inputText: null,
        placeholder: "Edit name",
        choreShowingList: tempShowingList,
        newChore: newChore,
      });
      }else{
        this.setState({ 
          addButtonContainerStyle: styles.AddInput,
          inputBoxStyle: styles.Hidden,
          inputText: null,
          placeholder: "Edit name",
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
    <View style={styles.ChoreInputContainer}>
    <View style={styles.ChoreContainer}>
        <TextInput 
        value = {this.state.inputText}
        onChangeText = {(value) => this.updateText(value)}
        onSubmitEditing={({
          nativeEvent: { text },
        }) =>
        this.loadChores({ nativeEvent: { text } })}
        style={styles.TextInput} 
        placeholder={this.state.placeholder}></TextInput>
    </View>
    <View>{this.state.choreShowingList}</View>
    <Button onPress={() => sqlQueries.getDays()} title="Button"/>
  </View>
    
  );
    }
}
export default CustomChore;