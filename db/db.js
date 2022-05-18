
import { Component } from "react";
import * as SQLite from "expo-sqlite";

const taskLibrary = ["Go to work", "Make breakfast",  "Feed dog/s", "Do Homework", "Clean room",, "Wash dishes","Take out trash","Sweep floor","Mop floor","Clean kitchen", "Wash/Dry laundry", "Fold clothes", "Make bed", "Feed fish", "Feed cat/s", "Feed lizard/s", "Vacuum" ];
const db = SQLite.openDatabase('tasks.db', '1.0', '', 1);


class Queries extends Component{
  isFirstTime(){
    return new Promise((resolve) => 
    { 
      db.transaction(function (txn) {
        txn.executeSql(
          `CREATE TABLE IF NOT EXISTS date_n_time (day txt) UNIQUE`,
          [],
          (txn, results) => {
            resolve(results)
            return false;
          },
          error => {
          console.log("error on tasks tabel" + error.message);
          return true;
          }
        )
      })
    })
  }
  clearFirstTime(){
    db.transaction(function (txn) {
      txn.executeSql(
        `Drop TABLE date_n_time`,
        [],
        () => {
          return false;
        },
        error => {
          console.log("error on creating table" + error.message)
          return true;
        }
      )
    });
  }
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
        `CREATE TABLE IF NOT EXISTS tasks (id VARCHAR(20), name VARCHAR)`,
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
        `CREATE TABLE IF NOT EXISTS taskLibrary (name VARCHAR UNIQUE)`,
        taskLibrary,
        () => {
        },
        error => {
          console.log("error on creating table" + error.message)
        }
      )
    });

    var vals = "";
    var i = 0;
    taskLibrary.forEach(task => {
      if(i == taskLibrary.length-1){
        vals += "(?)";
      }else{
        vals += "(?), ";

      }
      i++
    });
    db.transaction(function (txn) {
      txn.executeSql(
        `INSERT INTO taskLibrary VALUES` + vals,
        taskLibrary,
        (tx, row) => {
        },
        error => {
          console.log("error on inserting table" + error.message)
        }
      )
    });
    db.transaction(function (txn) {
      txn.executeSql(
        `SELECT * FROM taskLibrary`,
        [],
        (txn, results) => {
          let row = results.rows;
          return row;
        },
        error => {
        console.log("error on tasks table" + error.message)
        }
      )
    })
  }

  addUser(username, password){
    db.transaction(function (txn) {
      txn.executeSql(
        `INSERT INTO users
         Values (?,?)`,
        [username, password],
        () => {
        },
        error => {
          console.log("error on creating table" + error.message)
        }
      )
    });
  }

  getTaskLibrary(){
    return new Promise((resolve) => 
    { 
      db.transaction(function (txn) {
        txn.executeSql(
          `SELECT name FROM taskLibrary`,
          [],
          (txn, results) => {
            let row = results.rows;
            resolve(row)
            return row;
          },
          error => {
          console.log("error on tasks tabel" + error.message)
          }
        )
      })
    })
  }

  getUsers(){
    return new Promise((resolve) => 
    { 
      db.transaction(function (txn) {
        txn.executeSql(
          `SELECT * FROM users`,
          [],
          (txn, results) => {
            let row = results.rows;
            console.log("ajfakjkfld",results.rowsAffected);
            resolve(row)
            return row;
          },
          error => {
          console.log("error on tasks tabel" + error.message)
          }
        )
      })
    })
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

  addToTaskLibrary(tasks){
    var vals = "";
    var i = 0;
    tasks.forEach(task => {
      if(i == tasks.length-1){
        vals += "(?)";
      }else{
        vals += "(?), ";

      }
      i++
    });

    db.transaction(function (txn) {
      txn.executeSql(
        `INSERT INTO taskLibrary VALUES ` + vals,
        tasks,
        (tx, row) => {
          console.log("finsihed")
        },
        error => {
          console.log(vals, tasks)
          console.log("error on inserting table" + error.message)
        }
      )
    });
  }

  addTasks(tasks){
    var vals = "";
    var tempList = [];
    var i = 0;
    tasks.forEach(task => {
      if(i == tasks.length-1){
        vals += "(?,?)";
      }else{
        vals += " (?,?),";

      }
      tempList.push(task[0], task[1]);
      i++
    });

     db.transaction(function (txn) {
       txn.executeSql(
        `INSERT INTO tasks (id, name)
        VALUES ` + vals ,
        tempList,
        (txn, results) => {
          return true;
        },
        error => {
          console.log("error on adding tasks" + error.message);
          return false;
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
          console.log("error on tasks tabel" + error.message)
          }
        )
      })
    })
  }

getTasks(){
    return new Promise((resolve) => 
    { 
      db.transaction(function (txn) {
        txn.executeSql(
          `SELECt * FROM tasks`,
          [],
          (txn, results) => {
            let row = results.rows;
            resolve(row)
            return row;
          },
          error => {
          console.log("error on tasks tabel" + error.message)
          }
        )
      })
    })
  }
  deleteTask(taskName, id){
    db.transaction(function (txn) {
      txn.executeSql(
        `DELETE FROM tasks WHERE (id = ? AND name = ?)`,
      [id, taskName],
        (txn, results) => {
          return true;
        },
        error => {
          console.log("error on adding tasks" + error.message);
          return false;
        }
      )
    });
  }

  updateTaskName(newTaskName, oldTaskName){
    db.transaction(function (txn) {
      txn.executeSql(
        `UPDATE tasks SET name = ? WHERE name = ?`,
      [newTaskName, oldTaskName],
        (txn, results) => {
          return true;
        },
        error => {
          console.log("error on adding tasks" + error.message);
          return false;
        }
      )
    });
  }

  clear(){
    db.transaction(function (txn) {
      txn.executeSql(
        `DROP TABLE days`,
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
        `DROP TABLE tasks`,
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
        `DROP TABLE taskLibrary`,
        taskLibrary,
        () => {
        },
        error => {
          console.log("error on creating table" + error.message)
        }
      )
    });

    var vals = "";
    var i = 0;
    taskLibrary.forEach(task => {
      if(i == taskLibrary.length-1){
        vals += "(?)";
      }else{
        vals += "(?), ";

      }
      i++
    });
  }
  
}
const sqlQueries = new Queries;
export default sqlQueries;
