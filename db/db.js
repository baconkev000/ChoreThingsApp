import * as SQLite from "expo-sqlite";
import { Component } from "react";

const db = SQLite.openDatabase('test.db', '1.0', '', 1);

class Queries extends Component{
  createDaysTable(){
    db.transaction(function (txn) {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS days (id VARCHAR(30), date VARCHAR(30))`,
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
        `CREATE TABLE IF NOT EXISTS chores (id VARCHAR(20), day VARCHAR(20))`,
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

  addDay(id, date){
    db.transaction(function (txn) {
      txn.executeSql(
        `INSERT INTO days
        VALUES (?,?)`,
        [id, date],
        (txn, results) => {
          console.log("day added successfully");
        },
        error => {
          console.log("error on adding day" + error.message)
        }
      )
    });
    db.transaction(function (txn) {
      txn.executeSql(
        `SELECT id FROM days`,
        [],
        (txn, results) => {
          console.log("stuff passed in", id, date);
          console.log("day added successfully", results);
          
        },
        error => {
          console.log("error on adding day" + error.message)
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
          console.log("day table cleared", results);
          
        },
        error => {
          console.log("error on clearing" + error.message)
        }
      )
    });
    db.transaction(function (txn) {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS days (id VARCHAR(30), date VARCHAR(30))`,
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

  
}
const sqlQueries = new Queries;
export default sqlQueries;