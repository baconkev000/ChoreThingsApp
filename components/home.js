import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Button } from 'react-native';
import React, { Component } from "react";
import Year from "../classes/year";
import styles from "../styles";
import sqlQueries from "../db/db";
import { ChoresContext } from "../context/choreContext";



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
    <View styels={styles.HomeContainer}>
      <Year nav={this.props}/>
    </View>
  </SafeAreaView>
    
  );
    }
}
export default Home;