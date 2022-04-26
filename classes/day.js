import { Component } from "react";
import { View} from "react-native";
import NoChores from "../components/noChores";

class Day extends Component{
  constructor(props) {
    super(props);
    this.state = {
        choreList: props.choreList,
        date: props.date,
        id: props.id,
    };
  }
  componentDidMount(){
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
      if(this.state.choreList.length == 0){
        return <NoChores today={this}/>
      }else{
        return <View>
            {this.state.choreList}
          </View>;
          }
      }
}
export default Day;