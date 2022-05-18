import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Alert, Modal, Pressable, Text, StyleSheet } from 'react-native';
import React, { Component } from "react";
import Year from "./year";
import styles from "../styles";
import ConfettiCannon from 'react-native-confetti-cannon';
import Share from "react-native-share";
import { Linking } from "react-native";

const title = "YO CHECKOUT TINY TASK TUESDAY";
const message = "Please check this out.";
const social =  Share.Social.INSTAGRAM;

const options = {
  title,
  message,
  social
};

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  
  explosion;

  setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
      //this.onShare();
  }

   onShare = async () => {
     
    try {
      
        const { isInstalled } = await Share.isPackageInstalled(
          "com.whatsapp.android"
        );
          console.log("STEo", isInstalled)
        if (isInstalled) {
          try{
          await Share.shareSingle(options);
          }
          catch (err) {
            alert(error.message);
          }
        } else {
          Alert.alert(
            "Whatsapp not installed",
            "Whatsapp not installed, please install.",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }]
          );
        }

      //const shareResponse = await Share.open(options);
      //console.log(shareResponse)
    } catch (err) {
      alert(error.message);
    }
  };

  triggerConfetti = () => {
    this.explosion && this.explosion.start();
    const onShare = async () => {
      try {
        const { isInstalled } = await Share.isPackageInstalled(
          "com.whatsapp.android"
        );
        
  
        if (isInstalled || Linking.openURL('instagram://user?username=kevinbacon_24')) {
          await Share.shareSingle(options);
        } else {
          Alert.alert(
            "IG not installed",
            "IG not installed, please install.",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }]
          );
        }
      } catch (err) {
        console.log(err);
      }
    };
    onShare();
    //this.setModalVisible(true)
    // Alert.alert(
    //   "Congratulations!",
    //   "You completed a task! Share your progress!",
    //   [
    //     {
    //       text: "Close",
    //       onPress: () => console.log("ok fine")
    //     },
    //     {
    //       text: "Share",
    //       onPress: () => onShare()
    //     },
    //   ]
    // );
  };


    render(){
  return (
    <SafeAreaView styles={styles.Container}>
    <StatusBar style="auto" />
    
    <View style={styles.ConfettiContainer}>
    <View styles={styles.HomeContainer}>
      <Year nav={this.props} confetti={this.triggerConfetti}/>
    </View>
    <ConfettiCannon
        count={200}
        origin={{x: -10, y: 0}}
        fallSpeed={3000}
        autoStart={false}
        fadeOut={true}
        ref={ref => (this.explosion = ref)}
      />
      <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={styles.ModalView}>
            <View style={styles.ModalContainer}>
                <Text style={styles.ModalText}>You finished a task!</Text>
              <Pressable
                style={[styles.ShareButton, styles.ShareButtonClose]}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={styles.ShareButtonText}>Share</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
    </View>
  </SafeAreaView>
    
  );
    }
}

export default Home;