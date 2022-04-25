import { Component } from "react";
import { View} from "react-native";

class Day extends Component{
  constructor(props) {
    super(props);
    var d = new Date();
    this.state = {
        choreList: props.choreList,
        date: props.date,
        id: props.id,
    };
  }
  componentDidMount(){
    this.getDate(this.props.iterator);
    this.propsdate = this.state.date;

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
  return <View>
    
    {this.state.choreList}
    </View>;
    }
}
export default Day;