import React, { Component } from 'react'
import { Alert } from "react-native";


class ShareTo extends Component {
    popUpMedia (){
        Alert.alert(
            "Congratulations!",
            "You completed a task! Share your progress!",
            [
              {
                text: "Close",
                onPress: () => console.log("ok fine")
              },
              {
                text: "Share",
                onPress: () => this.shareToMedia()
              },
            ]
          );
        return true;
    }

    shareToMedia(){
       const shareSomething = async () => {
            try {
              const result = await Share.share({
                message: 'React Native | A framework for building native apps using React',
              });
              if (result.action === Share.sharedAction) {
                if (result.activityType) {
                  // shared with activity type of result.activityType
                } else {
                  // shared
                }
              } else if (result.action === Share.dismissedAction) {
                // dismissed
              }
            } catch (error) {
              alert(error.message);
            }
          }
    }
  render() {
    return (
      null
    )
  }
}

const ShareToMedia = new ShareTo();
export default ShareToMedia
