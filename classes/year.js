import { Component } from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import { AntDesign } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Day from "./day";

var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
class Year extends Component{
  constructor() {
    super();
    var date = this.formatDate(0);
    this.state = {
        id: [],
        dayList: [],
        dayNum: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        dayShowing:<Day id={date[0]} date={date[1]} choreList={[]} key={date[0]}/>,
        todayId: date[0],
        todayLinkStyle: styles.Hidden,
        offset: 0,
    };
  }

  componentDidMount(){
    var tempList = this.state.dayList;
      tempList.push(this.state.dayShowing);
  
      this.setState({
        dayList: tempList,
      })
  }
  
  addDay = (day) => {
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

  removeEmptyDay = () =>{
    if(this.state.dayShowing.props.choreList.length == 0){ // if the day showing has no chores
      for(var i = 0; i < this.state.dayList.length; i++){
        if(this.state.dayList[i].props.id == this.state.dayShowing.props.id){ // if this is the day showing
          var tempList = this.state.dayList;
          tempList.splice(i,1);
          this.setState({
            dayList: tempList,
          })
          break;
        }
      }
    }
    console.log(this.state.dayList.length, "-------------------------------");
    // this.state.dayList.forEach(el => {
    //   console.log(el.props.id);
    // });
  }

  dateIterator(offset){
    var newDate = this.formatDate(offset);
    var newDay = <Day id={newDate[0]} date={newDate[1]} choreList={[]} key={newDate[0]}/>;
    this.addDay(newDay);

    if(newDate[0] == this.state.todayId){ // if we are navigation to today then hide today link
      this.setState({
        todayLinkStyle: styles.Hidden,
        offset: this.state.offset + offset,
      })
    }else{
      this.setState({
        todayLinkStyle: styles.ToTodayText,
        offset: this.state.offset + offset,
      })
    }
    this.removeEmptyDay();
  }
  
  formatDate(offset){
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
  return <View> 
    <View style={styles.DateContainer}>
      <TouchableWithoutFeedback style={styles.TouchButton} onPress={() => this.dateIterator(-1)}><AntDesign name="caretleft" size={24} color="black" /></TouchableWithoutFeedback>
        <View style={styles.DateTextContainer}>
        <Text style={styles.DateText}>{this.state.dayShowing.props.date}</Text>
        </View>
      <TouchableWithoutFeedback style={styles.TouchButton} onPress={() => this.dateIterator(1)}><AntDesign name="caretright" size={24} color="black" /></TouchableWithoutFeedback>
    </View>
    <View>
    <TouchableWithoutFeedback onPress={() => this.dateIterator(-this.state.offset)}>
      <Text style={this.state.todayLinkStyle}>Back to today</Text>
    </TouchableWithoutFeedback>
    </View>
</View>;
    }
}
export default Year;