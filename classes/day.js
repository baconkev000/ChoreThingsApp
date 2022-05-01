import { Component } from "react";
import { View} from "react-native";
import NoChores from "../components/noChores";
import AddChoresBtn from "../components/addChoresBtn";
import sqlQueries from "../db/db";
import Chore from "./chore";
import { ChoresContext } from "../context/choreContext";
import styles from "../styles";

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
    this.getChoresAsync()
    .then(row => this.setChoresList(row));
  }


  async getChoresAsync(){
    let row = await sqlQueries.getChores();
    return row;
  }

  setChoresList(row){
    var tempList = [];
    for(var i = 0; i < row._array.length; i++){
      if(row._array[i].id == this.state.id){
        tempList.push(<Chore choreName={row._array[i].name} dayId={row._array[i].id} nav={this.props.nav.navigation} inDB={true} key={row._array[i].name}/>);
      }
    }

    this.setState({
      choreList: tempList,
    })
  }

  addChore = (chore) => {
    var tempList = this.state.choreList;
    tempList.push(chore);

    this.setState({
      choreList: tempList,
    })
  }
  

    render(){
      let chore = this.context;
      if(this.state.choreList.length == 0){
        return <NoChores nav={this.props.nav} dayState={this} />
      }else{
        return <View style={styles.ChoreDayContainer}>
          <View style={styles.ChoreListContainer}>
          {this.state.choreList}</View>
            <AddChoresBtn nav={this.props.nav} dayState={this}/>
          </View>;
          }
      }

}
Day.contextType = ChoresContext;
export default Day;