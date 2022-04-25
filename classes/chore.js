import { Component } from "react";
import { Text } from "react-native";

class Chore extends Component{
  constructor() {
    super();
    this.state = {
        name: null,
    };
  }

  setChore = (newName) =>{
    this.setState({
      name: newName,
    })
  }

    render(){
  return <Text>{this.state.name}</Text>;
    }
}
export default Chore;