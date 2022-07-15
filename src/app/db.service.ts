import { Injectable } from '@angular/core';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
// import { writeFile } from 'fs';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private dbInstance: SQLiteObject;
  private sqlStatement: any;
  readonly db_name: string = "student_record.db";
  readonly db_table: string = "studentTable";
  USERS: Array<any>;
  private fileDataEntry: string = '';

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private sqlitePorter: SQLitePorter,
    private file: File,
    private transfer: FileTransfer
  ) {
    this.databaseConn();
  }

  // Create SQLite database
  databaseConn() {
    this.sqlStatement = `
                  CREATE TABLE IF NOT EXISTS ${this.db_table} (
                    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name varchar(255),
                    fname varchar(255),
                    class varchar(255),
                    phone varchar(255)
                  )`;
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: this.db_name,
        location: 'default'
      }).then((sqLite: SQLiteObject) => {
        this.dbInstance = sqLite;
        sqLite.executeSql(this.sqlStatement, [])
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

  getAllUsersByClass(classNumber) {
    return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table} WHERE class = ?`, [classNumber])
      .then((res) => {
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

  reset() {
    this.USERS = [];
  }

  exportData() {
    // this.databaseConn();
    this.importData();
    // var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);
    var dbShell = window['openDatabase'](this.db_name, '1', this.db_name, 1000000);

    this.sqlitePorter.exportDbToSql(dbShell)
      .then((data) => {
        console.log('exported', data)
        this.createFile(data);
        // this.downloadFileFromData();       will see later lets try opening the cdvfile://localhost/persistent/  to see the file
      })
      .catch(e => console.error(e));
  }

  importData() {

    // var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);
    var dbShell = window['openDatabase'](this.db_name, '1', this.db_name, 1000000);
    this.sqlitePorter.importSqlToDb(dbShell, this.sqlStatement)
      .then(() => console.log('Imported'))
      .catch(e => console.error(e));
  }

  createFile(data) {
    document.addEventListener("deviceready", function () {


      window['requestFileSystem'](window['PERSISTENT'], 10000, function (fs) {

        console.log('file system open: ' + fs.name);
        fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, function (fileEntry) {

          console.log("fileEntry is file?" + fileEntry.isFile.toString()); console.log(fileEntry.fullPath)
          writeToFile(fileEntry, data);
        }, (err) => { console.log('onErrorCreateFile', err) }
        );

      }, (err) => { console.log('onErrorLoadFs', err) });
    }, false);
  }
  downloadFileFromData() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    // let path = 'file:///android_asset/www/';
    let path = 'cdvfile://localhost/persistent/';
    // let path = 'F:/'
    // let dir_name = 'Download'; // directory to download - you can also create new directory
    // let file_name = 'file.txt'; //any file name you like


    // let result = this.file.createDir(path + file_name, dir_name, true);
    document.addEventListener("deviceready", function () {


      window['requestFileSystem'](window['PERSISTENT'], 10000, function (fs) {

        console.log('file system open: ' + fs.name);
        fs.root.getFile("newPersistentFile.txt", { create: false, exclusive: false }, function (fileEntry) {

          console.log("fileEntry is file?" + fileEntry.isFile.toString());


          // result.then((resp) => {
          // path = resp.toURL();
          // console.log(path);
          fileTransfer.download(path, fileEntry.name, true).then((entry) => {
            console.log('download complete: ' + entry.toURL());
          }, (error) => {
            console.log(error)
          });
          // }, (err) => {
          //   console.log('error on creating path : ' + err);
          // });
        }, (err) => { console.log('onErrorCreateFile', err) }
        );

      }, (err) => { console.log('onErrorLoadFs', err) });
    }, false);

  }

}
function writeToFile(fileEntry, dataObj) {
  console.log(fileEntry);
  // Create a FileWriter object for our FileEntry (log.txt).
  fileEntry.createWriter(function (fileWriter) {

    fileWriter.onwriteend = function () {
      console.log("Successful file write...");
      readFile(fileEntry);
    };

    fileWriter.onerror = function (e) {
      console.log("Failed file write: " + e.toString());
    };

    // If data object is not passed in,
    // create a new Blob instead.
    if (!dataObj) {
      dataObj = new Blob([dataObj], { type: 'text/plain' });
    }

    fileWriter.write(dataObj);
  });
  // downloadFileFromData(fileEntry);
}

function readFile(fileEntry) {

  fileEntry.file(function (file) {
    var reader = new FileReader();

    reader.onloadend = function () {
      console.log("Successful file read: " + this.result);
      displayFileData(fileEntry.fullPath + ": " + this.result);
    };

    reader.readAsText(file);

  }, (err) => {
    console.log('onErrorReadFile', err)
  }
  )
}

function displayFileData(fileEntry) {
  alert(fileEntry);
  console.log(fileEntry);
}


