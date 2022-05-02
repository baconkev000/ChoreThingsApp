import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native';
import ChoreAlert from './alerts';
import sqlQueries from '../db/db';

import styles from '../styles';

export default class EditChorePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            choreName: props.route.params.name,
            placeholder: "Edit Name",
        }

    }

    async getChoresAsync(){
        let row = await sqlQueries.getChores();
        return row._array;
      }
    
      loadChores(props){
        this.getChoresAsync()
        .then(row => ChoreAlert.isValidNameDB(row, props.nativeEvent))
        .then(isValid => this.finishAddName(props, isValid));
      }
      
    finishAddName(props, isValid){
      if(isValid){
        sqlQueries.updateChoreName(props.nativeEvent.text, this.state.choreName);

        this.setState({
          choreName: props.nativeEvent.text,
          inputBoxStyle: styles.Hidden,
          inputText: null,
          placeholder: "Edit name",
        });

        }else{
          this.setState({ 
            inputBoxStyle: styles.Hidden,
            inputText: null,
            placeholder: "Edit name",
          });
        }
      }
      updateText(value){
        this.setState({
          inputText: value,
        })
      }


  render() {
    return (
      <View><Text style={styles.ChoreNameText}>{this.state.choreName}</Text>
            <View style={styles.ChoreContainer}>
          <TextInput 
          value = {this.state.inputText}
          onChangeText = {(value) => this.updateText(value)}
          onSubmitEditing={({
            nativeEvent: { text },
          }) =>
          this.loadChores({ nativeEvent: { text } })}
          style={styles.TextInput} 
          placeholder={this.state.placeholder}></TextInput>
      </View></View>
    )
  }
}
