import { Component } from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import { AntDesign } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Day from "./day";
import sqlQueries from "../db/db";

var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
class Year extends Component{
  constructor(props) {
    super(props);
    var date = this.formatDate(0);
    this.state = {
        id: [],
        dayList: [],
        dayNum: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        dayShowing:<Day id={date[0]} date={date[1]} taskList={[]} nav={this.props.nav} key={date[0]}/>,
        todayId: date[0],
        todayLinkStyle: styles.ToTodayText,
        offset: 0,
    };
  }

  componentDidMount(){ // this creates the day that displays the task list, as well is the local db tables
    var tempList = this.state.dayList;
      tempList.push(this.state.dayShowing);
  
      this.setState({
        dayList: tempList,
      })

      sqlQueries.createTables();      
  }
  
  addDay = (day) => { // adds a day to the day list whenever we are on a new day
    for(var i = 0; i < this.state.dayList.length; i++){
      if(this.state.dayList[i].props.id == day.props.id){ // if this day exists then display it
        this.setState({
          dayShowing: this.state.dayList[i],
        })
      }else if(i == this.state.dayList.length-1){
        
          var tempList = this.state.dayList;
          tempList.push(day);
    
          this.setState({
            dayList: tempList,
            dayShowing: this.state.dayList[i],
          })
        }
      }

  }

  removeEmptyDay = (oldDay) =>{ // removes any day from daylist that does not contain tasks
      if(oldDay.props.taskList.length == 0){ // if the day old day has no tasks
        for(var i = 0; i < this.state.dayList.length; i++){ // find the old day in DayList
          if(this.state.dayList[i].props.id == oldDay.props.id){ // if this is the day showing
            var tempList = this.state.dayList; // then remove it
            tempList.splice(i,1);
            this.setState({
              dayList: tempList,
            })
            break;
          }
        }
      }
  }

  dateIterator(offset){ // changes the date and the day object that is showing
    var newDate = this.formatDate(offset);
    var newDay = <Day id={newDate[0]} date={newDate[1]} taskList={[]} nav={this.props.nav} key={newDate[0]}/>;
    var oldDay = this.state.dayShowing;
    this.addDay(newDay);

    if(newDate[0] == this.state.todayId){ // if we are navigation to today then hide today link
      this.setState({
        todayLinkStyle: styles.ToTodayText,
        offset: this.state.offset + offset,
      })
    }else{
      this.setState({
        todayLinkStyle: styles.ToTodayTextColor,
        offset: this.state.offset + offset,
      })
    }
    this.removeEmptyDay(oldDay);

  }
  
  formatDate(offset){ // this simply formats the day that shows on the date area
    var d = new Date();
    if(offset == 0){
      var newDate = new Date(d.getFullYear(), d.getMonth(),d.getDate() + offset);
    }else{
      var newDate = new Date(this.state.year, this.state.month,this.state.dayNum + offset);
        this.setState({
          dayNum: this.state.dayNum + offset,
        })
    }
    var monthName = month[newDate.getMonth()];

    return [(newDate.getMonth()+1 + "" + newDate.getDate() + "" + newDate.getFullYear()).toString(), monthName + " " + newDate.getDate()];
  }


    render(){
      
  return <View style={styles.YearContainer}> 
    <View style={styles.DateContainer}>
      <TouchableWithoutFeedback style={styles.TouchButton} onPress={() => this.dateIterator(-1)}><AntDesign name="left" size={24} color="black" /></TouchableWithoutFeedback>
        <View style={styles.DateTextContainer}>
        <Text style={styles.DateText}>{this.state.dayShowing.props.date}</Text>
        </View>
      <TouchableWithoutFeedback style={styles.TouchButton} onPress={() => this.dateIterator(1)}><AntDesign name="right" size={24} color="black" /></TouchableWithoutFeedback>
    </View>
    <View>
    <TouchableWithoutFeedback onPress={() => this.dateIterator(-this.state.offset)}>
      <Text style={this.state.todayLinkStyle}>Back to today</Text>
    </TouchableWithoutFeedback>
    </View>
    <View>
      {this.state.dayShowing}
    </View>
</View>;
    }
}
export default Year;