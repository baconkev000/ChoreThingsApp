import React, { Component } from 'react';
import sqlQueries from './db';
import Chore from '../classes/chore';

const DbContext = React.createContext("DEFAULT");

export default class DbProvider extends Component {
    constructor(props){
      super(props);
      this.state = {
        choreList: [],
      }
    }
    componentDidMount(){
      sqlQueries.getChores().then(row => this.setChoresList(row));
    }

    updateChoreList = (choresAdded, offset) => {
      console.log("K");

      if(offset == 1){ // if adding chores
        var tempList = this.state.choreList;
        tempList.push(choresAdded);
        this.setState({
          choreList: tempList,
        })
      }else if(offset == -1){ // if removing a chore
        for(var i = 0; i < this.state.choreList.length; i++){ 
          for(var j = 0; j < choresAdded.length; j++){ 
            if(this.state.choreList[i].state.name == choresAdded[i].state.name){ // if chore being removed is i in state choreList
              var tempList = this.state.choreList; // remove and update state choreList
              tempList.splice(i, 1);
              this.setState({
                choreList: tempList,
              });
              break;
            }
          }
          }
        }
    }

    setChoresList(row){
      var tempList = [];
      for(var i = 0; i < row._array.length; i++){
          tempList.push(<Chore choreName={row._array[i].name} dayId={row._array[i].id} nav={this.props} inDB={true} key={row._array[i].name}/>);
      }
  
      this.setState({
        choreList: tempList,
      })
    }

    render () {
      return (
        <DbContext.Provider value={{choreList: this.state.choreList, update: this.updateChoreList}}>
          {this.props.children}
        </DbContext.Provider>
      )
    }
  }

  
  
  export { DbContext, DbProvider }