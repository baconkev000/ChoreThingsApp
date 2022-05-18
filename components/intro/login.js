import React, { Component } from 'react';
import { View, TextInput, Text, TouchableWithoutFeedback } from 'react-native';
import sqlQueries from '../../db/db';
import styles from '../../styles';

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            userName: null,
            password: null,
        }
    }
    componentDidMount(){
        sqlQueries.createUserDB();
    }
    validateUserName(){
        if (this.state.password.length == 0) {
            errorFlag = true;
            this.setState({ passwordErrorMessage: "Username is required field"});
            return false;
          } else if (this.state.password.length < 8 ||  this.state.password.length > 20) {
            errorFlag = true;
            this.setState({ passwordErrorMessage: "Username should be min 8 char and max 20 char"});
            return false;
          }else{
              return true;
          }
    }
    validatePassword(){
        if (this.state.password.length == 0) {
            errorFlag = true;
            this.setState({ passwordErrorMessage: "Password is required field"});
            return false;
          } else if (this.state.password.length < 8 ||  this.state.password.length > 20) {
            errorFlag = true;
            this.setState({ passwordErrorMessage: "Password should be min 8 char and max 20 char"});
            return false;
          } else {
              return true;
          }
        }

    updateText(value, type){
        if(type == "user"){
            this.setState({
                userName: value,
              })
        }else{
            this.setState({
                password: value,
              })
        }

      }

      login = () => {
        if(this.validateUserName(this.state.userName) && this.validatePassword(this.state.password)){
            // if(sqlQueries.getUser()){

            // }
        }
        alert("Login Does Not Exist", "suorry");
      }

      signUp = () => {
        if(this.validateUserName(this.state.userName) && this.validatePassword(this.state.password)){        
            sqlQueries.createUser(this.state.userName, this.state.password);
        }
    }

  render() {
    return (
        <View style={styles.LoginPageContainer}>
            <View style={styles.LoginContainer}>

                <View style={styles.LoginInputContainer}>
                <TextInput  
                onChangeText = {(value) => this.updateText(value)}
                style={styles.TextInput}  placeholder="Name" />
                </View>

                <View style={styles.LoginInputContainer}>
                <TextInput 
                onChangeText = {(value) => this.updateText(value)}
                style={styles.TextInput}  placeholder="Password" />
                </View>
                <View style={styles.LoginButtonsContainer}>
                    <TouchableWithoutFeedback onPress={() => this.login()}>
                        <Text style={[styles.TextSize, styles.LoginButton]}>Login</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.signUp()}>
                        <Text style={[styles.TextSize, styles.LoginButton]}>Sign Up</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
  );
  }
}
