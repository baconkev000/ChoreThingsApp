import * as SQLite from "expo-sqlite";
import { Component } from "react";

const db = SQLite.openDatabase('test.db', '1.0', '', 1);

class Queries extends Component{
  createTable(){
    db.transaction(function (txn) {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS days (id VARCHAR(30), date VARCHAR(30))`,
        [],
        (sqlTxn, res) => {
          console.log("table created successfully");
        },
        error => {
          console.log("error on creating table" + error.message)
        }
      )
    })
  }
}
const sqlQueries = new Queries;
export default sqlQueries;