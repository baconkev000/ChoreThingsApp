import { Component } from "react";
import { Text, View, Animated} from "react-native";
import styles from "../styles";
import { TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import sqlQueries from "../db/db";

class Task extends Component{
  constructor(props) {
    super(props);
    this.state = {
        name: props.taskName,
        dayId: props.dayId,
        gestureName: 'none',
        n: 0,
    };
    
  }

  renderLeftActions = () => { // renders the left swiping action
    return (
      <View style={styles.SwipeLeft}>
      <Text style={styles.SwipeText}>Complete</Text>
      </View>
    );
  }
  renderRightActions = () => {
    return (
      <View style={styles.SwipeRight}>
      <Text style={styles.SwipeText}>Delete</Text>
      </View>
    );
  }

  deleteTask = (inDB) =>{ // delete this task from the db as well as the view that is showing
    if(inDB){
      sqlQueries.deleteTask(this.state.name, this.state.dayId);
      this.props.removeTaskFunc(this.state.name);
    }else{
      this.props.removeCustomTaskFunc(this.state.name);
    };
  }

  updateTask = (newName) => {  // updates the task name
    this.setState({
      name: newName
    })
  }

    render(){
      // all tasks throughout the app are created via this component. This if statement changes the type of functions the component has, as well as sends different params to the edit task page
      if(this.props.inDB){
    return (
        <Swipeable 
        
        renderLeftActions={this.renderLeftActions}
        renderRightActions={this.renderRightActions}
        onSwipeableLeftOpen={() => this.deleteTask(true)}
        onSwipeableRightOpen={() => this.deleteTask(true)}
        >
          <TouchableWithoutFeedback onPress={() => this.props.nav.navigate("EditTaskPage", {name: this.state.name, inDB: this.props.inDB, updateTask: this.updateTask, updateCustom: this.props.updateCustom})}>
          <View style={styles.TaskNameContainer}>
            <Text style={styles.TaskNameText}>{this.state.name}</Text>
            <Text style={styles.TaskNameTextEdit}>Edit</Text>

          </View></TouchableWithoutFeedback>
        </Swipeable>
    );
      }else{
        return (
          <Swipeable 
          renderRightActions={this.renderRightActions}
          onSwipeableRightOpen={() => this.deleteTask(false)}
          >
            <TouchableWithoutFeedback onPress={() => this.props.nav.navigate("EditTaskPage", {name: this.state.name, inDB: this.props.inDB, updateTask: this.updateTask, updateCustom: this.props.updateCustom})}>
            <View style={styles.TaskNameContainer}>
              <Text style={styles.TaskNameText}>{this.state.name}</Text>
              <Text style={styles.TaskNameTextEdit}>Edit</Text>
            </View></TouchableWithoutFeedback>
          </Swipeable>
      );
      }
}
}
export default Task;