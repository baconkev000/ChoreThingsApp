import { Component } from "react";
import { View, ScrollView} from "react-native";
import NoChores from "../components/noChores";
import AddChoresBtn from "../components/addChoresBtn";
import sqlQueries from "../db/db";
import Chore from "./chore";
import { ChoresContext } from "../context/choreContext";
import styles from "../styles";
import { DbContext } from "../db/dbProvider";
import DbProvider from "../db/dbProvider";



class Day extends Component{
  static contextType = DbContext;
  constructor(props) {
    super(props);
    this.state = {
        choreList: props.choreList,
        date: props.date,
        id: props.id,
        refresh: 0,
    };
  }
  componentDidMount(){
    this._unsubscribe = this.props.nav.navigation.addListener('focus', () => {
      this.getChoresAsync()
      .then(row => this.setChoresList(row));
    });
    console.log("mount");
  }
  componentWillUnmount() {
    this._unsubscribe();
  }

  async getChoresAsync(){
    let row = await sqlQueries.getChores();
    return row;
  }

  setChoresList(row){
    console.log("EHLLOW")
    var tempList = [];
    for(var i = 0; i < row._array.length; i++){
      if(row._array[i].id == this.state.id){
        tempList.push(<Chore choreName={row._array[i].name} dayId={row._array[i].id} nav={this.props.nav.navigation} inDB={true}  removeChoreFunc={this.removeChore} key={row._array[i].name}/>);
      }
    }
    this.setState({
      choreList: tempList,
    })
  }

  removeChore = (choreName) => {
      for(var i = 0; i < this.state.choreList.length; i++){ 
          if(this.state.choreList[i].props.choreName == choreName){ // if chore being removed is i in state choreList
            var tempList = this.state.choreList; // remove and update state choreList
            tempList.splice(i, 1);
            this.setState({
              choreList: tempList,
            });
            break;
          }
      }
  }

    render(){
      console.log(this.state.choreList.length);
        return ( 
          
              this.state.choreList.length == 0
              ? <NoChores nav={this.props.nav} dayState={this} />
              : ( 
              <View style={styles.ChoreDayContainer}>
                <View style={styles.ChoreListContainer}>
                  <ScrollView>
                {this.state.choreList}</ScrollView>
                </View>
                <AddChoresBtn nav={this.props.nav} dayState={this}/>
              </View>)       
        );
      }

}
Day.contextType = ChoresContext;
export default Day;

/*? <NoChores nav={this.props.nav} dayState={this} />
          :  db => ( 
          <View style={styles.ChoreDayContainer}>
            <View style={styles.ChoreListContainer}>
            {db}{this.tes(db)}
            </View>
            <AddChoresBtn nav={this.props.nav} dayState={this}/>
          </View>)
          } */