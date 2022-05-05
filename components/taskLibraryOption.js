import React, { Component } from 'react'
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles';
import TaskAlert from "./alerts";


export default class TaskLibraryOption extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: false,
            name: props.name,
            square: "square-o"
        }
    }

    toggleTask = () => { // toggles the selection of this task
      if(this.state.square == "square-o" && !TaskAlert.selectionIsCreated(this.props.daystate.state.taskList, this.state.name)){
        this.setState({
          square: "square",
          selected: true,
        });
        this.props.addTask(this.state.name);
      }else{
        this.setState({
          square: "square-o",
          selected: false,
        });
        this.props.removeTask(this.state.name);
      }

    }

  render() {
    return (
      
            <TouchableWithoutFeedback onPress={() => this.toggleTask()}>
        <View style={styles.TaskLibraryContainer} selected={this.state.selected}>
          <Text style={styles.TaskLibraryText}><FontAwesome name={this.state.square} size={24} color="black" style={styles.TaskLibraryIcon}/> {this.state.name}</Text>
        </View>
      </TouchableWithoutFeedback>
        
    )
  }
}
