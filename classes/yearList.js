import { Component } from "react";

class YearList extends Component{
  constructor() {
    super();
    this.state = {
        id: null,
        yearList: [],
    };
  }
  addYear = (year) =>{
    var tempList = this.state.yearList;
    tempList.push(year);

    this.setState({
      yearList: year,
    })
  }

    render(){
  return null;
    }
}
export default YearList;