import { Component } from "react";
import { View } from "react-native";

class Year extends Component{
  constructor() {
    super();
    this.state = {
        id: [],
        dayList: [],
    };
  }
  
  addDay = (day) => {
    var tempList = this.state.dayList;
    tempList.push(day);

    this.setState({
      dayList: tempList,
    })
  }

  removeDay = () =>{

  }

    render(){
  return <View>{this.state.dayList}</View>;
    }
}
export default Year;