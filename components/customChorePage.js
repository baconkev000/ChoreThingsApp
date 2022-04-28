
import React, { Component} from "react";
import {View, TextInput, TouchableWithoutFeedback, Text, Button } from "react-native";
import styles from "../styles";
import Chore from "../classes/chore";
import sqlQueries from "../db/db";

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
    this.props.navigation.setOptions({
      headerLeft: () => (
        <Button
          onPress={() => this.clearChores()}
          title="Cancel"
          color="#fff"
        />
      ),
      headerRight: () => (
        <Button
          onPress={() => this.dataToDB()
          }
          title="Save"
          color="#fff"
        />
      ),
    })
  }

  dataToDB(){
    sqlQueries.addDay(this.state.dayState.dayId, this.state.dayState.state.date);
    sqlQueries.addChores(this.state.choreList)
    this.state.dayState.addChore(this.state.newChore);
    this.clearChores();
    this.props.navigation.navigate("ChoresOptionsPage");

  }

  clearChores(){
    this.setState({
      choreList: [],
      choreName: null,
      addButtonContainerStyle: styles.AddInput,
      inputBoxStyle: styles.Hidden,
      inputText: null,
      placeholder: "Edit name",
      choreShowingList: [],
    });
    this.props.navigation.navigate("ChoresOptionsPage");

  }
  
  finishAddName(props){
    var newChore = <Chore choreName={props.nativeEvent.text} dayId={this.state.dayState.dayId} key={props.nativeEvent.text}/>;
    var tempList = this.state.choreList;
    var tempShowingList = this.state.choreShowingList;
    tempList.push(this.state.dayState.state.id, props.nativeEvent.text);
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
    }

    updateText(value){
      this.setState({
        inputText: value,
      })
    }

    render(){
      console.log(this.state.dayState);

  return (
    <View>
    <TouchableWithoutFeedback >
      <View style={styles.ChoreContainer}>
          <TextInput 
          value = {this.state.inputText}
          onChangeText = {(value) => this.updateText(value)}
          onSubmitEditing={({
            nativeEvent: { text },
          }) =>
            this.finishAddName({ nativeEvent: { text } })}
          style={styles.TextInput} 
          placeholder={this.state.placeholder}></TextInput>
      </View>
      </TouchableWithoutFeedback>
      <View>{this.state.choreShowingList}</View>
<Button onPress={() => sqlQueries.getDays()} title="Button"/>
    </View>
  );
    }
}
export default CustomChore;