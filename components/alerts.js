import React, { Component} from "react";
import { Alert } from "react-native";

class TaskAlerts extends Component{
    isValidNameDB(taskList, taskName, dayId){ // checks the the task being created is has not been created and is not an empty name
        if(this.isEmpty(taskName) || this.isCreatedDB(taskList, taskName, dayId)){
            return false;
        }else{
            return true;
        }
    }

    isEmpty(taskName){
        var name = taskName.text;
        var regex = /\S/;
        if(!regex.test(name)){
            Alert.alert(
                "Invalid Name",
                "Task name cannot be empty.",
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

    isCreatedDB(arr, identifyer, dayId){
        for(var i = 0; i < arr.length; i++){
          if(arr[i].name == identifyer.text){
            if(arr[i].id == dayId){

            
            Alert.alert(
                "Invalid Name",
                "Task has already been created for this day.",
                [
                  {
                    text: "Try again.",
                    onPress: () => console.log("ok fine")
                  },
                ]
              );
            return true;
            }
          }else{
            if(i == arr.length-1){
              return false;
            }
          }
        }
      }

      selectionIsCreated(arr, identifyer){
        for(var i = 0; i < arr.length; i++){
          if(arr[i].props.taskName.toUpperCase() == identifyer.toUpperCase()){
            Alert.alert(
                "Invalid Name",
                "Task has already been created for this day.",
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
      
      isCreated(arr, identifyer, id){
        for(var i = 0; i < arr.length; i++){
            if(arr[i][1].toUpperCase() == identifyer.toUpperCase()){
              Alert.alert(
                  "Invalid Name",
                  "Task has already been created for this day.",
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
      userExists(arr, username, email){
        for(var i = 0; i < arr.length; i++){
          if(arr[i].username.toUpperCase() == username.toUpperCase()){
            Alert.alert(
                "Invalid Name",
                "Username has already been taken.",
                [
                  {
                    text: "Try again.",
                    onPress: () => console.log("ok fine")
                  },
                ]
              );
            return flase;
          }else if(arr[i].email.toUpperCase() == email.toUpperCase()){
              Alert.alert(
                "Invalid Name",
                "Email has already been taken.",
                [
                  {
                    text: "Try again.",
                    onPress: () => console.log("ok fine")
                  },
                ]
              );
            return false;
          }else{
            if(i == arr.length-1){
              return true;
            }
          }
        }
      }

}

const TaskAlert = new TaskAlerts();
export default TaskAlert