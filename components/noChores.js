import React, { Component} from "react";
import {View, Text } from "react-native";
import styles from "../styles";
import { AntDesign } from '@expo/vector-icons';
import AddChoresBtn from "./addChoresBtn";


class NoChores extends Component{
  constructor(props) {
    super(props);
    this.state = {
      today: props.today
    };
    
  }

    render(){
  return (
    <View style={styles.NoChoresContainer}>
      <View style={styles.LogoPH}><AntDesign name="minussquareo" size={100} color="black" /></View>
      <View style={styles.NoChoresTextContainer}>
        <Text style={styles.NoChoresText}>You have no chores!</Text>
      </View>
      <AddChoresBtn nav={this.props.nav} dayState={this.props.dayState}/>
    </View>
    
  );
    }
}

export default NoChores;