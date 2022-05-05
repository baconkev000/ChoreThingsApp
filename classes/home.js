import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from 'react-native';
import React, { Component } from "react";
import Year from "./year";
import styles from "../styles";

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
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