import * as SQLite from "expo-sqlite";
import { Component } from "react";

const db = SQLite.openDatabase('chores.db', '1.0', '', 1);
const choreLibrary = ["Do Dishes", ""];

class Queries extends Component{
  createTables(){
    db.transaction(function (txn) {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS days (id VARCHAR(20) UNIQUE, day VARCHAR(20) UNIQUE)`,
        [],
        () => {
        },
        error => {
          console.log("error on creating table" + error.message)
        }
      )
    });
    db.transaction(function (txn) {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS chores (id VARCHAR(20), name VARCHAR)`,
        [],
        () => {
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
        },
        error => {
          console.log("error on adding day" + error.message)
        }
      )
    });

  }

  addChores(chores){
    var vals = "";
    var tempList = [];
    var i = 0;
    chores.forEach(chore => {
      if(i == chores.length-1){
        vals += "(?,?)";
      }else{
        vals += " (?,?),";

      }
      tempList.push(chore[0], chore[1]);
      i++
    });

    db.transaction(function (txn) {
      txn.executeSql(
        `INSERT INTO chores (id, name)
        VALUES ` + vals ,
        tempList,
        (txn, results) => {
          return true;
        },
        error => {
          console.log("error on adding chores" + error.message);
          return false;
        }
      )
    });

    db.transaction(function (txn) {
      txn.executeSql(
        `SELECT * FROM chores`,
        [],
        (txn, results) => {
        },
        error => {
          console.log("error selection chores" + error.message);
        }
      )
    });
  }

  getDays(){
    return new Promise((resolve) => 
    { 
      db.transaction(function (txn) {
        txn.executeSql(
          `SELECt * FROM days`,
          [],
          (txn, results) => {
            let row = results.rows;
            resolve(row)
            return row;
          },
          error => {
          console.log("error on chores tabel" + error.message)
          }
        )
      })
    })
  }

getChores(){
    return new Promise((resolve) => 
    { 
      db.transaction(function (txn) {
        txn.executeSql(
          `SELECt * FROM chores`,
          [],
          (txn, results) => {
            let row = results.rows;
            resolve(row)
            return row;
          },
          error => {
          console.log("error on chores tabel" + error.message)
          }
        )
      })
    })
  }
  deleteChore(choreName){
    console.log("deleted", choreName);

    db.transaction(function (txn) {
      txn.executeSql(
        `DELETE FROM chores WHERE name = ?`,
      [choreName],
        (txn, results) => {
          return true;
        },
        error => {
          console.log("error on adding chores" + error.message);
          return false;
        }
      )
    });
  }

  updateChoreName(newChoreName, oldChoreName){
    db.transaction(function (txn) {
      txn.executeSql(
        `UPDATE chores SET name = ? WHERE name = ?`,
      [newChoreName, oldChoreName],
        (txn, results) => {
          return true;
        },
        error => {
          console.log("error on adding chores" + error.message);
          return false;
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