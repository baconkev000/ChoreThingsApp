
import React, { Component} from "react";
import {View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "../styles";
import { LogBox } from 'react-native';
import { Feather } from '@expo/vector-icons';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

class AddTasksBtn extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
    
  }
    render(){
  return (
    <View>      
      <TouchableWithoutFeedback onPress={() => this.props.nav.navigation.navigate("TasksOptionsPage",{params: this.props.dayState}) }>
        <Text style={styles.NoTasksButton}> 
        <Feather name="plus" style={styles.NoTasksButton} />
          Add a task
        </Text>
      </TouchableWithoutFeedback>
      </View>
    
  );
    }
}

export default AddTasksBtn;