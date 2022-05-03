import { Component } from "react";
import { View, ScrollView} from "react-native";
import NoChores from "../components/noChores";
import AddChoresBtn from "../components/addChoresBtn";
import sqlQueries from "../db/db";
import Chore from "./chore";
import { ChoresContext } from "../context/choreContext";
import styles from "../styles";
import { DbContext, DbProvider } from "../db/dbProvider";



class Day extends Component{
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
    this.getChoresAsync()
    .then(row => this.setChoresList(row));
   this._unsubscribe = this.props.nav.navigation.addListener('focus', () => {
      this.getChoresAsync()
      .then(row => this.setChoresList(row));
    });
  }
  componentWillUnmount() {
    this._unsubscribe();
  }


  async getChoresAsync(){
    let row = await sqlQueries.getChores();
    return row;
  }

  refresh(){
    this.setState({
      refresh: null,
    })
  }

  setChoresList(row){
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
    var tempList = [];

      for(var i = 0; i < this.state.choreList.length; i++){ 
          if(this.state.choreList[i].props.choreName == choreName){ // if chore being removed is i in state choreList            
          }else{
            tempList.push(this.state.choreList[i])
          }
      }
      this.setState({
        choreList: tempList,
      });
  }

  showChores(list){
    var tempList = [];
    list.forEach(el => {
      if(el.props.dayId == this.state.id){
        tempList.push(el);
      }
    });
    console.log(list, this.state.id)

    return tempList;
  }

    render(){
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
Day.contextType = DbContext;
export default Day;

/*? ( 
          
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
        );*/

        /*
        <DbProvider>
            <DbContext.Consumer>
              {db => this.showChores(db.choreList).length == 0 
              ?<NoChores nav={this.props.nav} dayState={this} />
            :<View style={styles.ChoreDayContainer}>
            <View style={styles.ChoreListContainer}>
              <ScrollView>
            {this.showChores(db.choreList)}</ScrollView>
            </View>
            <AddChoresBtn nav={this.props.nav} dayState={this}/>
          </View>}
            </DbContext.Consumer>
          </DbProvider>     
        */