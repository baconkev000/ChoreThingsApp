
import React, { Component} from "react";
import { View, TouchableWithoutFeedback, Text, Button } from "react-native";
import styles from "../styles";
import { AntDesign } from '@expo/vector-icons';

class TasksOptionsPage extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      dayState: this.props.route.params,
    };
  }

componentDidMount(){
  this.props.navigation.setOptions({
    headerLeft: () => (
          <Button
        onPress={() => (this.props.navigation.navigate({name: 'Home'}))}
        title="Cancel"
        color="#fff"
      />      
    ),
  })
}

    render(){
  return (
    <View>
  <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("TaskLibrary",{dayState: this.state.dayState})}>
  <View style={styles.OptionTile}>
  <Text style={styles.TextSize}>Task Library </Text><AntDesign name="right" size={24} color="black" />
  </View>
</TouchableWithoutFeedback>
<TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("CustomTask",{dayState: this.state.dayState})}>
  <View style={styles.OptionTile}>
  <Text style={styles.TextSize}>Custom Task</Text><AntDesign name="right" size={24} color="black" />
  </View>
</TouchableWithoutFeedback>
</View>
);
    }
}
export default TasksOptionsPage;