import React, { Component} from "react";
import {View, Text, Image } from "react-native";
import styles from "../styles";
import AddTasksBtn from "./addTaskBtn";


class NoTasks extends Component{
  constructor(props) {
    super(props);
    this.state = {
      today: props.today
    };
  }

render(){
  return (
    <View style={styles.NoTasksContainer}>
      <View style={styles.LogoPH}>
      <Image
          style={styles.TinyLogo}
          source={require("../assets/ttt_logo.png")}
        />
        </View>
      <View style={styles.NoTasksTextContainer}>
        <Text style={styles.NoTasksText}>You have no tasks!</Text>
      </View>
      <AddTasksBtn nav={this.props.nav} dayState={this.props.dayState}/>
    </View>
    
  );
    }
}

export default NoTasks;