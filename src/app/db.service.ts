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
                    name varchar(255),
                    fname varchar(255),
                    class varchar(255),
                    phone varchar(255)
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
      INSERT INTO ${this.db_table} (name, fName, class, phone) VALUES
      ('${studName}', '${fName}', '${classNumber}','${phone}')`, [])
      .then(() => {
        alert("Success");
        this.getAllUsers();
      }, (e) => {
        console.log(e);
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
        console.log(this.USERS);
        return this.USERS;
      }
    }, (e) => {
      console.log(e);
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
          fname: res.rows.item(0).fname,
          class: res.rows.item(0).class,
          phone: res.rows.item(0).phone
        }
      });
  }

  // Update
  updateUser(id, studName, fname, classNumber, phone) {
    let data = [studName, fname, classNumber, phone];
    return this.dbInstance.executeSql(`UPDATE ${this.db_table} SET name = ?, fname = ? , class = ?, phone = ? WHERE user_id = ${id}`, data)
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
