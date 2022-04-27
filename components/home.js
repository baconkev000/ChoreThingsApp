import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, TouchableOpacity, FlatList } from 'react-native';
import React, { Component } from "react";
import Year from "../classes/year";
import styles from "../styles";



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

    </View>
  </SafeAreaView>
    
  );
    }
}
export default Home;