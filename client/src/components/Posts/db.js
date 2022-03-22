const path = require('path')
const sqlite3 = require('sqlite3')
// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, './database.sqlite');

let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if(err && err.code == "SQLITE_CANTOPEN") {
      createDatabase();
      return;
    } else if (err) {
      console.log("OPEN error " + err);
      return(1);
    }
    runQueries(db);
  });


function createDatabase() {
  const newdb = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.log("CREATE error " + err);
        return(1);
    }
    createTables(newdb);
  });
};

function createTables(newdb) {
  newdb.exec (`
    create table todos (
      created_at datetime defaultTo(now()),
      id increments primary key not null,
      title text not null,
      description text,
      createdDate datetime,
      category text,
      priority int 
    );

    create table events (
      id int increments primary key not null,
      start datetime defaultTo(now()),
      end datetime defaultTo(now()),
      until datetime defaultTo(now()),
      occurrenceId int,
      title text,
      description text,
      category text,
      priority int,
      allDay int,
      done int,
      interval int,
      every text
      Sun int,
      Mon int, 
      Tue int,  
      Wed int, 
      Thu int,  
      Fri int, 
      Sat int
    );
  }`);
};

 function runQueries(db) {
   //db.all returns a single array
   db.all(`select * from todos`, (err, rows) => {
     rows.forEach(row => {
       console.log(row);
     });
   });
 };

console.log('Initialization done');

// Export the database
module.exports = db;
