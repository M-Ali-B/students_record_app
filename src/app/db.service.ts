import { Injectable } from '@angular/core';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private dbInstance: SQLiteObject;
  readonly db_name: string = "student_record.db";
  readonly db_table: string = "studentTable";
  USERS: Array<any>;

  constructor(
    private platform: Platform,
    private sqlite: SQLite
  ) {
    this.databaseConn();
  }

  // Create SQLite database
  databaseConn() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: this.db_name,
        location: 'default'
      }).then((sqLite: SQLiteObject) => {
        this.dbInstance = sqLite;
        sqLite.executeSql(`
                  CREATE TABLE IF NOT EXISTS ${this.db_table} (
                    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                    roll_number INTEGER,
                    name varchar(255),
                    fname varchar(255),
                    class INTEGER,
                    phone INTEGER
                  )`, [])
          .then((res) => {
            // alert(JSON.stringify(res));
          })
          .catch((error) => alert(JSON.stringify(error)));
      })
        .catch((error) => alert(JSON.stringify(error)));
    });
  }

  // Crud
  public addItem(studName, fName, classNumber, phone) {
    // validation
    // if (!studName.length || !fName.length || !classNumber.length || !phone.length) {
    //   alert('Please provide Data');
    //   return;
    // }
    this.dbInstance.executeSql(`
      INSERT INTO ${this.db_table} (studName, fName, classNumber, phone) VALUES
      ('${studName}', '${fName}', '${classNumber}','${phone}')`, [])
      .then(() => {
        alert("Success");
        this.getAllUsers();
      }, (e) => {
        alert(JSON.stringify(e.err));
      });
  }

  getAllUsers() {
    return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table}`, []).then((res) => {
      this.USERS = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.USERS.push(res.rows.item(i));
        }
        return this.USERS;
      }
    }, (e) => {
      alert(JSON.stringify(e));
    });
  }

  // Get user
  getUser(id): Promise<any> {
    return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table} WHERE user_id = ?`, [id])
      .then((res) => {
        return {
          user_id: res.rows.item(0).user_id,
          name: res.rows.item(0).name,
          email: res.rows.item(0).email
        }
      });
  }

  // Update
  updateUser(id, name, email) {
    let data = [name, email];
    return this.dbInstance.executeSql(`UPDATE ${this.db_table} SET name = ?, email = ? WHERE user_id = ${id}`, data)
  }

  // Delete
  deleteUser(user) {
    this.dbInstance.executeSql(`
      DELETE FROM ${this.db_table} WHERE user_id = ${user}`, [])
      .then(() => {
        alert("User deleted!");
        this.getAllUsers();
      })
      .catch(e => {
        alert(JSON.stringify(e))
      });
  }

}
