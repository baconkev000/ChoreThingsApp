import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from 'react-native';
import React, { Component } from "react";
import Year from "../classes/year";
import styles from "../styles";
import { DbProvider } from "../db/dbProvider";


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
    <DbProvider>
    <View styels={styles.HomeContainer}>
      <Year nav={this.props}/>
    </View></DbProvider>
  </SafeAreaView>
    
  );
    }
}
export default Home;