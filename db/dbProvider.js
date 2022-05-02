import React, { Component } from 'react';
import sqlQueries from './db';

const DbContext = React.createContext('DEFAULT')

export default class DbProvider extends Component {
    constructor(){
      super();
      this.state = {
        choreList: [],
      }
    }
    componentDidMount(){
    }
    render () {
      return (
        <DbContext.Provider value={sqlQueries.getChores()}>
          {this.props.children}
        </DbContext.Provider>
      )
    }
  }
  
  export { DbContext, DbProvider }