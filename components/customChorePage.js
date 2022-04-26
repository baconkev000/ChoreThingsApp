
import React, { Component} from "react";
import {View, TextInput, TouchableWithoutFeedback, Text } from "react-native";
import styles from "../styles";


class CustomChore extends Component{
  constructor(props) {
    super(props);
    this.state = {
        choreList: [],
        choreName: null,
        today: props.day,
        placeholder: "Add a chore name"
    };
  }


  
  finishAddName(props){
    var tempList = choreList;
    tempList.push(props.nativeEvent.text);
        this.setState({
          choreList: tempList,
          choreName: props.nativeEvent.text,
          addButtonContainerStyle: styles.AddInput,
          inputBoxStyle: styles.Hidden,
          inputText: null,
          placeholder: "Edit name",
      })
      //this.state.today.addChore(props.nativeEvent.text);
    }

    updateText(value){
      this.setState({
        inputText: value,
      })
    }

    render(){
  return (
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
      <Text style={styles.NameText}>{this.state.choreName}</Text>
      </TouchableWithoutFeedback>
    
  );
    }
}
export default CustomChore;