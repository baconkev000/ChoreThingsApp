
import React, { Component} from "react";
import { Button } from "react-native";
import ChoresOptionsButtons from "./btns/choresOptionBtns";

class ChoresOptionsPage extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }



    render(){
      //console.log("Optons Page",this.props);
      //console.log("Optons Page",this.props.navigation.getParams(myName));
  return <ChoresOptionsButtons />
    }
}
export default ChoresOptionsPage;