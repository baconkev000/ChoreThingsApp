import { Component } from "react";
import { View } from "react-native";

class Day extends Component{
  constructor() {
    super();
    this.state = {
        id: null,
        date: null,
        choreList: [],
    };
  }

  addChore = (chore) => {
    var tempList = this.state.choreList;
    tempList.push(chore);

    this.setState({
      choreList: tempList,
    })
  }

  removeChore = () =>{
    
  }
  

    render(){
  return <View>{this.state.choreList}</View>;
    }
}
export default Day;