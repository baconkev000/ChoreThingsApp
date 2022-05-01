import { Component } from "react";
import { Text, View, Animated} from "react-native";
import styles from "../styles";
import { GestureDetector, Gesture, GestureHandlerRootView, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import sqlQueries from "../db/db";

class Chore extends Component{
  constructor(props) {
    super(props);
    this.state = {
        name: props.choreName,
        dayId: props.dayId,
        gestureName: 'none',
        n: 0,
    };
    
  }
  renderLeftActions = () => {
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

  deleteChore = () =>{
    sqlQueries.deleteChore(this.state.name);
  }

  setChore = (newName) =>{
    this.setState({
      name: newName,
    })
  }

  editPage(){
    console.log("edit");
  }

    render(){
      if(this.props.inDB){
    return (
        <Swipeable 
        renderLeftActions={this.renderLeftActions}
        renderRightActions={this.renderRightActions}
        onSwipeableLeftOpen={this.deleteChore}
        onSwipeableRightOpen={this.deleteChore}
        >
          <TouchableWithoutFeedback onPress={() => this.props.nav.navigate("EditChorePage", {name: this.state.name})}>
          <View style={styles.ChoreNameContainer}>
            <Text style={styles.ChoreNameText}>{this.state.name}</Text>
          </View></TouchableWithoutFeedback>
        </Swipeable>
    );
      }else{
        return (
          <Swipeable 
          renderRightActions={this.renderRightActions}
          onSwipeableRightOpen={this.deleteChore}
          >
            <TouchableWithoutFeedback onPress={() => this.props.nav.navigate("EditChorePage", {name: this.state.name, inDB: false})}>
            <View style={styles.ChoreNameContainer}>
              <Text style={styles.ChoreNameText}>{this.state.name}</Text>
            </View></TouchableWithoutFeedback>
          </Swipeable>
      );
      }
}
}
export default Chore;

// <View style={styles.ChoreNameContainer}><Text style={styles.ChoreNameText}>{this.state.name}</Text></View>;