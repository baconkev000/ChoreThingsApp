import * as SQLite from "expo-sqlite";
import { Component } from "react";

const db = SQLite.openDatabase('chores.db', '1.0', '', 1);

class Queries extends Component{
  createTables(){
    db.transaction(function (txn) {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS days (id VARCHAR(20) UNIQUE, day VARCHAR(20) UNIQUE)`,
        [],
        () => {
          console.log("table created successfully");
        },
        error => {
          console.log("error on creating table" + error.message)
        }
      )
    });
    db.transaction(function (txn) {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS chores (id VARCHAR(20), name VARCHAR UNIQUE)`,
        [],
        () => {
          console.log("table created successfully");
        },
        error => {
          console.log("error on creating table" + error.message)
        }
      )
    });
  }

  addDay(id, date){ // add the day
    //IF NOT EXISTS SELECT id FROM days WHERE days = "${id}
    db.transaction(function (txn) {
      txn.executeSql(
        `INSERT INTO days
        VALUES (?,?)`,
        [id, date],
        (txn, results) => {
          console.log("day added successfully", results);
        },
        error => {
          console.log("error on adding day" + error.message)
        }
      )
    });
    console.log(this.getDays());

  }

  addChores(chores){
    var vals = "";
    var tempList = [];
    var i = 0;
    chores.forEach(chore => {
      if(i == chores.length-1){
        vals += " (?,?)";
      }else{
        vals += " (?,?),";

      }
      tempList.push(chore[0], chore[1]);
      i++
    });
    console.log("---------", tempList, vals)
    vals += " (?,?)";
    db.transaction(function (txn) {
      txn.executeSql(
        `INSERT INTO chores (id, name)
        VALUES ${vals}`,
        tempList,
        (txn, results) => {
          console.log("day added successfully", results);
        },
        error => {
          console.log("error on adding chores" + error.message);
        }
      )
    });

    db.transaction(function (txn) {
      txn.executeSql(
        `SELECT * FROM chores`,
        [],
        (txn, results) => {
          console.log("day added successfully");
        },
        error => {
          console.log("error selection chores" + error.message);
        }
      )
    });
  }
  getDays(){
    db.transaction(function (txn) {
      txn.executeSql(
        `SELECt * FROM days`,
        [],
        (txn, results) => {
          console.log("day table cleared", results);
          return results;
        },
        error => {
          console.log("error on clearing" + error.message)
        }
      )
    });
  }

  clearAll(){
    db.transaction(function (txn) {
      txn.executeSql(
        `DROP TABLE days`,
        [],
        (txn, results) => {
          console.log("day table cleared");
          
        },
        error => {
          console.log("error on clearing" + error.message)
        }
      )
    });
    db.transaction(function (txn) {
      txn.executeSql(
        `DROP TABLE chores`,
        [],
        (txn, results) => {
          console.log("day table cleared");
          
        },
        error => {
          console.log("error on clearing" + error.message)
        }
      )
    });
    this.createTables();

  }
  
}
const sqlQueries = new Queries;
export default sqlQueries;