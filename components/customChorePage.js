
import React, { Component} from "react";
import {View, TextInput, TouchableWithoutFeedback, Text, Button } from "react-native";
import styles from "../styles";
import Chore from "../classes/chore";
import sqlQueries from "../db/db";

class CustomChore extends Component{
  constructor(props) {
    super(props);
    this.state = {
        choreList: [],
        choreName: null,
        today: props.day,
        placeholder: "Add a chore name",
        dayState: this.props.route.params.dayState.params,
    };
  }
  componentDidMount(){
    this.props.navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => sqlQueries.clearAll()}
          title="Save"
          color="#fff"
        />
      ),
    })
  }
  nextPageWithProps(){
    /*this.props.nav.navigation.setOptions({
        headerRight: () => (
          <Button onPress={() => setCount(c => c + 1)} title="Update count" />
        ),
      });*/
  }
  
  finishAddName(props){
    var tempList = this.state.choreList;
    tempList.push(props.nativeEvent.text);
        this.setState({
          choreList: tempList,
          choreName: props.nativeEvent.text,
          addButtonContainerStyle: styles.AddInput,
          inputBoxStyle: styles.Hidden,
          inputText: null,
          placeholder: "Edit name",
      })
      this.state.dayState.addChore(<Chore choreName={props.nativeEvent.text} dayId={this.state.dayState.dayId} key={props.nativeEvent.text}/>);
      sqlQueries.addDay(this.state.dayState.state.id, this.state.dayState.state.date);
    }

    updateText(value){
      this.setState({
        inputText: value,
      })
    }

    render(){
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
      <Text style={styles.NameText}>{this.state.choreName}</Text>

    </View>
  );
    }
}
export default CustomChore;