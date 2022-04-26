
import React, { Component} from "react";
import {View, TextInput, TouchableWithoutFeedback, Text } from "react-native";
import styles from "../styles";


class CustomChore extends Component{
  constructor(props) {
    super(props);
    this.state = {
        choreName: null,
        today: props.day,
    };
  }
  
  finishAddName(props){
        this.setState({
          choreName: props.nativeEvent.text,
          addButtonContainerStyle: styles.AddInput,
          inputBoxStyle: styles.Hidden,
          inputText: null,
      })
      this.state.today.addChore(props.nativeEvent.text);
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
          <Text style={styles.NameText}>{this.state.choreName}</Text>
          <TextInput 
          value = {this.state.inputText}
          onChangeText = {(value) => this.updateText(value)}
          onSubmitEditing={({
            nativeEvent: { text },
          }) =>
            this.finishAddName({ nativeEvent: { text } })}
          style={styles.TextInput} 
          placeholder="Edit Name"></TextInput>
      </View>
      </TouchableWithoutFeedback>
    
  );
    }
}
export default CustomChore;