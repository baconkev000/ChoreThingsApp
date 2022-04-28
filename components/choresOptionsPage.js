
import React, { Component} from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import styles from "../styles";
import { AntDesign } from '@expo/vector-icons';

class ChoresOptionsPage extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      dayState: this.props.route.params,
    };
  }



    render(){
  return (
    <View>
  <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("ChoreLibrary",{dayState: this.state.dayState})}>
  <View style={styles.OptionTile}>
  <Text style={styles.TextSize}>Chore Library </Text><AntDesign name="right" size={24} color="black" />
  </View>
</TouchableWithoutFeedback>
<TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("CustomChore",{dayState: this.state.dayState})}>
  <View style={styles.OptionTile}>
  <Text style={styles.TextSize}>Custom Chore</Text><AntDesign name="right" size={24} color="black" />
  </View>
</TouchableWithoutFeedback>
</View>
);
    }
}
export default ChoresOptionsPage;