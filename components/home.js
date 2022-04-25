import { StatusBar } from "expo-status-bar";
import { SafeAreaView, } from 'react-native';
import React, { Component } from "react";
import styles from "../styles";


class Home extends Component{
  constructor() {
    super();
    this.state = {

    };
    
  }

    render(){
  return (
    <SafeAreaView style={styles.Container}>
    <StatusBar style="auto" />

  </SafeAreaView>
    
  );
    }
}
export default Home;