import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from 'react-native';
import React, { Component } from "react";
import Year from "../classes/year";
import styles from "../styles";



class Home extends Component{
  constructor() {
    super();
    this.state = {
      
    };
    
  }

    render(){
  return (
    <SafeAreaView styles={styles.Container}>
    <StatusBar style="auto" />
    <View>
    <Year />
    </View>
  </SafeAreaView>
    
  );
    }
}
export default Home;