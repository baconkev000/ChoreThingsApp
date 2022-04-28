import { Component } from "react";
import { View} from "react-native";
import NoChores from "../components/noChores";
import AddChoresBtn from "../components/addChoresBtn";

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

  getChores(){
    
  }
  

    render(){
      console.log(this.state.choreList);
      if(this.state.choreList.length == 0){
        return <NoChores nav={this.props.nav} dayState={this} />
      }else{
        return <View>
            {this.state.choreList}
            <AddChoresBtn nav={this.props.nav} dayState={this}/>
          </View>;
          }
      }
}
export default Day;