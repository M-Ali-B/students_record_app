import { Injectable } from '@angular/core';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
// import { writeFile } from 'fs';
import { File } from '@awesome-cordova-plugins/file/ngx';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { Utility } from './Utility';
import { Chooser } from '@awesome-cordova-plugins/chooser/ngx';
declare let cordova: any;
@Injectable({
  providedIn: 'root'
})
export class DbService {

  private dbInstance: SQLiteObject;
  private sqlStatement: any;
  readonly db_name: string = "student_record.db";
  readonly db_table: string = "studentTable";
  readonly log_db_table: string = "logTable";
  USERS: Array<any> = [];
  LOGS: Array<any> = [];
  private fileDataEntry: string = '';
  cellNumbers: Array<any> = [];
  selectedUsers: Array<any> = [];

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private sqlitePorter: SQLitePorter,
    private file: File,
    private fileOpener: FileOpener,
    private util: Utility,
    private chooser: Chooser
  ) {
    this.databaseConn();
    util = new Utility();
    this.setFileAccess();
  }

  // Create SQLite database
  databaseConn() {
    this.sqlStatement = `
                  CREATE TABLE IF NOT EXISTS ${this.db_table} (
                    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name varchar(255),
                    fname varchar(255),
                    class varchar(255),
                    phone varchar(255),
                    isChecked bit NOT NULL DEFAULT 0
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

  setFileAccess() {
    this.platform.ready().then(() => {
      if (this.platform.is('desktop')) {
        console.log('web');
      }
      else if (this.platform.is('android')) {
        console.log('android');
      }

    })
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

  getAllUsersByMultipleClasses(classNumber: Array<any>) {
    this.reset(); console.log(classNumber)
    classNumber.forEach((el, index) => {
      console.log(el);
      return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table} WHERE class = ?`, [el])
        .then((res) => {
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              this.USERS.push(res.rows.item(i));
            }
          }
        }, (e) => {
          console.log(e);
          alert(JSON.stringify(e));
        });
    });
    console.log(this.USERS);
    return this.USERS;
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
          phone: res.rows.item(0).phone,
          isChecked: res.rows.item(0).isChecked
        }
      });
  }

  // Update
  updateUser(id, studName, fname, classNumber, phone) {
    let data = [studName, fname, classNumber, phone];
    return this.dbInstance.executeSql(`UPDATE ${this.db_table} SET name = ?, fname = ? , class = ?, phone = ? WHERE user_id = ${id}`, data)
  }

  massUpdateUsers(fromClass, toClass) {
    console.log(fromClass + ' ' + toClass);
    return this.dbInstance.executeSql(`UPDATE ${this.db_table} SET class= ${toClass} WHERE class = ${fromClass}`, []);
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
        // this.openFile();
      })
      .catch(e => console.log(e));
  }

  importData() {
    //this.getAllUsers();
    // console.log(this.USERS);
    // var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);
    var dbShell = window['openDatabase'](this.db_name, '1', this.db_name, 1000000);
    this.sqlitePorter.importSqlToDb(dbShell, this.sqlStatement)
      .then(() => console.log('Imported'))
      .catch(e => console.error(e));
  }

  createFileLocally() {
    this.createFile(this.util.formatDbData(this.USERS));

  }

  createFile(data) {
    document.addEventListener("deviceready", function () {
      window['resolveLocalFileSystemURL'](cordova.file.externalDataDirectory, function (dirEntry) {
        console.log('file system open: ' + dirEntry.name);
        var isAppend = true;
        createMyFile(dirEntry, data, "fileToAppend.txt", isAppend);
      }, (error) => { console.log('onErrorLoadFs', error) });

    }, false);
  }

  openFile() {
    this.fileOpener.showOpenWithDialog(cordova.file.externalDataDirectory + 'fileToAppend.txt', 'text/plain')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error opening file', e));
  }
  // needed in future
  fileChooser() {
    this.chooser.getFile()
      .then(file => { console.log(file ? file.name : 'canceled'); alert(file) })
      .catch((error: any) => console.error(error));
  }

  getUserByName(name) {
    return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table} WHERE name = ?`, [name])
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
  isChecked(): boolean {

    if (this.USERS.length != 0) {
      let isCheckedFlag = (el) => el.isChecked;
      return this.USERS.some(isCheckedFlag);
    }
  }

  getUserNumbersWithIsChecked() {

    this.USERS.forEach((el, index) => {
      if (el.isChecked) {
        this.cellNumbers.push(this.USERS[index]['phone']);
      }
    });
    this.cellNumbers = [... new Set(this.cellNumbers)];
  }

  getUsersWithIsChecked() {

    this.USERS.forEach((el, index) => {
      if (el.isChecked) {
        this.selectedUsers.push(this.USERS[index]);
      }
    });
    this.selectedUsers = [... new Set(this.selectedUsers)];
  }

  resetUserNumbers() {
    this.cellNumbers = [];
  }

  logDatabaseConn() {
    this.sqlStatement = `
                  CREATE TABLE IF NOT EXISTS ${this.log_db_table} (
                    log_id INTEGER PRIMARY KEY AUTOINCREMENT,
                    date varchar(255),
                    message varchar(255),
                    name varchar(255),
                    f_name varchar(255),
                    class varchar(255)
                  )`;
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: this.db_name,
        location: 'default'
      }).then((sqLite: SQLiteObject) => {
        //this.dbInstance = sqLite;
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
  public logAddItem(date, message, name, f_name, class_number) {
    this.dbInstance.executeSql(`
      INSERT INTO ${this.log_db_table} (date, message, name,f_name,class) VALUES
      ('${date}', '${message}', '${name}', '${f_name}', '${class_number}')`, [])
      .then(() => {
        alert("Success");
        this.getAllLogs();
      }, (e) => {
        console.log(e);
        alert(JSON.stringify(e.err));
      });
  }

  getAllLogs() {
    return this.dbInstance.executeSql(`SELECT * FROM ${this.log_db_table}`, []).then((res) => {
      this.LOGS = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.LOGS.push(res.rows.item(i));
        }
        console.log(this.LOGS);
        return this.LOGS;
      }
    }, (e) => {
      console.log(e);
      alert(JSON.stringify(e));
    });
  }

  deleteLog(log) {
    this.dbInstance.executeSql(`
      DELETE FROM ${this.log_db_table} WHERE log_id = ${log}`, [])
      .then(() => {
        alert("Log deleted!");
        this.getAllLogs();
      })
      .catch(e => {
        alert(JSON.stringify(e))
      });
  }

  loadPreData() {
    this.dbInstance.executeSql(`
      INSERT INTO ${this.db_table} (name, fName, class, phone,isChecked) VALUES
      ${this.util.preDataLoadStatement()}`, [])
      .then(() => {
        alert("Success");
        this.getAllUsers();
      }, (e) => {
        console.log(e);
        alert(JSON.stringify(e.err));
      });
  }
}
function writeToFile(fileEntry, dataObj, file_name, isAppend) {
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
    // if (!dataObj) {
    //   dataObj = new Blob([dataObj], { type: 'text/plain' });
    // }
    // If we are appending data to file, go to the end of the file.
    if (isAppend) {
      try {
        fileWriter.seek(fileWriter.length);
      }
      catch (e) {
        console.log("file doesn't exist!");
      }
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

function createMyFile(dirEntry, data, fileName, isAppend) {
  // Creates a new file or returns the file if it already exists.
  dirEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {

    writeToFile(fileEntry, data, null, isAppend);

  }, (error) => { console.log('onErrorCreateFile', error) });

}

//  downloadFileFromData() {
//   const fileTransfer: FileTransferObject = this.transfer.create();
//   // let path = 'file:///android_asset/www/';
//   let path = 'cdvfile://localhost/persistent/';
//   // let path = 'F:/'
//   // let dir_name = 'Download'; // directory to download - you can also create new directory
//   // let file_name = 'file.txt'; //any file name you like


//   // let result = this.file.createDir(path + file_name, dir_name, true);
//   document.addEventListener("deviceready", function () {


//     window['requestFileSystem'](window['PERSISTENT'], 10000, function (fs) {

//       console.log('file system open: ' + fs.name);
//       fs.root.getFile("newPersistentFile.txt", { create: false, exclusive: false }, function (fileEntry) {

//         console.log("fileEntry is file?" + fileEntry.isFile.toString());


//         // result.then((resp) => {
//         // path = resp.toURL();
//         // console.log(path);
//         fileTransfer.download(path, fileEntry.name, true).then((entry) => {
//           console.log('download complete: ' + entry.toURL());
//         }, (error) => {
//           console.log(error)
//         });
//         // }, (err) => {
//         //   console.log('error on creating path : ' + err);
//         // });
//       }, (err) => { console.log('onErrorCreateFile', err) }
//       );

//     }, (err) => { console.log('onErrorLoadFs', err) });
//   }, false);

// }


// createFile(data) {      with REQUESTFILESYSTEM
  //   document.addEventListener("deviceready", function () {


  //     window['requestFileSystem'](window['PERSISTENT'], 10000, function (fs) {

  //       console.log(fs);
  //       fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, function (fileEntry) {

  //         console.log("fileEntry is file?" + fileEntry.isFile.toString()); console.log(fileEntry.fullPath)
  //         writeToFile(fileEntry, data);
  //       }, (err) => { console.log('onErrorCreateFile', err) }
  //       );

  //     }, (err) => { console.log('onErrorLoadFs', err) });
  //   }, false);
  // }
