import { Component } from "react";
import { Text, View } from "react-native";
import styles from "../styles";

class Chore extends Component{
  constructor(props) {
    super(props);
    this.state = {
        name: props.choreName,
        dayId: props.dayId,
    };
  }

  setChore = (newName) =>{
    this.setState({
      name: newName,
    })
  }

    render(){
  return <View style={styles.ChoreNameContainer}><Text style={styles.ChoreNameText}>{this.state.name}</Text></View>;
    }
}
export default Chore;