import React, { Component} from "react";
import { Alert } from "react-native";

class ChoreAlerts extends Component{
    isValidNameDB(choreList, choreName){
        if(this.isEmpty(choreName) || this.isCreatedDB(choreList, choreName)){
            return false;
        }else{
            return true;
        }
    }

    isEmpty(choreName){
        var name = choreName.text;
        var regex = /\S/;
        if(!regex.test(name)){
            Alert.alert(
                "Invalid Name",
                "Chore name cannot be empty.",
                [
                  {
                    text: "Try again.",
                    onPress: () => console.log("ok fine")
                  },
                ]
              );
            return true;
        }else{
            return false;
        }
    }

    isCreatedDB(arr, identifyer){
        for(var i = 0; i < arr.length; i++){
          if(arr[i].name == identifyer){
            Alert.alert(
                "Invalid Name",
                "Chore has already been created for this day.",
                [
                  {
                    text: "Try again.",
                    onPress: () => console.log("ok fine")
                  },
                ]
              );
            return true;
          }else{
            if(i == arr.length-1){
              return false;
            }
          }
        }
      }

      isCreated(arr, identifyer){
        for(var i = 0; i < arr.length; i++){
            if(arr[i][1].toUpperCase() == identifyer.toUpperCase()){
              Alert.alert(
                  "Invalid Name",
                  "Chore has already been created for this day.",
                  [
                    {
                      text: "Try again.",
                      onPress: () => console.log("ok fine")
                    },
                  ]
                );
              return true;
            }else{
              if(i == arr.length-1){
                return false;
              }
            }
          }
      }

}

const ChoreAlert = new ChoreAlerts();
export default ChoreAlert