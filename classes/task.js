import { Component } from "react";
import { Text, View} from "react-native";
import styles from "../styles";
import { TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import sqlQueries from "../db/db";
import { Feather } from '@expo/vector-icons';


class Task extends Component{
  constructor(props) {
    super(props);
    this.state = {
        name: props.taskName,
        dayId: props.dayId,
        gestureName: 'none',
        n: 0,
        toLibraryText: "Add to Task Library",
        libraryAction: 1,
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

  deleteTask = (inDB, type) =>{ // delete this task from the db as well as the view that is showing
    if(inDB){
      if(type == "complete"){
        this.props.confetti();
      }
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

  updateLibraryText = () => {
    if(this.state.libraryAction == -1){
      this.props.updateLibraryList(this.state.libraryAction, this.state.name);
      this.setState({
        toLibraryText: "Add to Task Library",
        libraryAction: 1,
      })
    }else{
      this.props.updateLibraryList(this.state.libraryAction, this.state.name);
      this.setState({
        toLibraryText: "Remove from Task Library",
        libraryAction: -1,
      })
    }
  }

    render(){
      // all tasks throughout the app are created via this component. This if statement changes the type of functions the component has, as well as sends different params to the edit task page
      if(this.props.inDB){
    return (
        <Swipeable 
        
        renderLeftActions={this.renderLeftActions}
        renderRightActions={this.renderRightActions}
        onSwipeableLeftOpen={() => this.deleteTask(true, "complete")}
        onSwipeableRightOpen={() => this.deleteTask(true, "delete")}
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
          <View>
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
          <TouchableWithoutFeedback  onPress={() => this.updateLibraryText()}>
              <Text style={styles.AddToLibraryText}><Feather name="plus" style={styles.AddToLibraryText} /> {this.state.toLibraryText}</Text>
            </TouchableWithoutFeedback>
            </View>
      );
      }
}
}
export default Task;