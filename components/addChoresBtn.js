
import React, { Component} from "react";
import {View, Text, TouchableWithoutFeedback, Button } from "react-native";
import styles from "../styles";
import { AntDesign } from '@expo/vector-icons';
import { LogBox } from 'react-native';
import ChoresOptionsPage from "./choresOptionsPage";

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

class AddChoresBtn extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
    
  }
    render(){
  return (
    <View>      
    
      <TouchableWithoutFeedback onPress={() => this.props.nav.navigation.navigate("ChoresOptionsPage",{params: this.props.dayState}) }>
        <Text style={styles.NoChoresButton}> 
          Add a chore
        </Text>
      </TouchableWithoutFeedback>
      <Button onPress={() => sqlQueries.clearAll()} title="Button"/>
      </View>
    
  );
    }
}

export default AddChoresBtn;