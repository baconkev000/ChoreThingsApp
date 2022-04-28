import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Button } from 'react-native';
import React, { Component } from "react";
import Year from "../classes/year";
import styles from "../styles";
import sqlQueries from "../db/db";



class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

    render(){
  return (
    <SafeAreaView styles={styles.Container}>
    <StatusBar style="auto" />
    <View>
    <Year nav={this.props}/>
    <Button onPress={() => sqlQueries.clearAll()} title="Button"/>

    </View>
  </SafeAreaView>
    
  );
    }
}
export default Home;