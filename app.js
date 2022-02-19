const path = require('path');
require("dotenv").config();
const express = require("express");
const server = express();
const { pool } = require("./dbConfig.mysql");
const session = require("express-session");
const MemoryStore = require('memorystore')(session);
const passport = require("passport");

const PORT = process.env.PORT || 4001;

server.set("view engine", "ejs");

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(
  session({
    secret: `${process.env.secret}`,
    resave: false,
    saveUninitialized: false,
    sameSite: "none",
    cookie: { httpOnly: false, maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
  })
);

server.use(passport.initialize());
server.use(passport.session());
require(`./passportConfig`)(passport);

var router = express.Router({mergeParams: true});

server.use(router);

if(process.env.NODE_ENV === 'dev') {
  router.use(express.static(path.join(__dirname, '/client/build')));
} else {
  router.use(express.static(path.join(__dirname, '/public')));
}

router.get("/api/todos/all", async (req, res) => {
  try {
    let sql = 'SELECT * FROM todos';
    
    await pool.execute(sql, (error, results) => {
      if(error) throw error;
      if(results.length > 0){
        return res.status(200).send(results);
      }
      return res.status(404).send('No records found');
    })
  } catch (error) {
    return error;
    }
});

router.post("/todos/create", async (req, res) => {
  try {
    const {
      title,
      description, 
      createdDate,
      category,
      priority
    } = req.body;
    let sql = 'INSERT INTO todos (title, description, createdDate, category, priority) VALUES (?,?,?,?,?)';

    await pool.execute(sql, [title, description, createdDate, category, priority], (error, results) => {
      if(error) throw(error);
      return res.status(200).json(results);
    })
  } catch (error) {
    return error;
  }
});

router.post("/todos/update", async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      priority,
      id
    } = req.body;
    let sql = 'UPDATE todos SET title=?, description=?, category=?, priority=? WHERE id=?';
    await pool.execute(sql, [title, description, category, priority, id], (error, results) => {
      if (error) throw error;
      return res.status(200).json(results);
    });
  } catch (error) {
    return error;
  }
});

router.post("/todos/delete", async (req, res) => {
  try {
    const {id} = req.body.id;
    let sql = 'DELETE from todos WHERE id = ?';
    await pool.execute(sql, [id], (error, results) => {
      if (error) throw error;
      return res.status(200).json(results);
    });
  } catch (error) {
    return error;
  }
});

router.get("/events/all", async (req, res) => {
  try {
    let sql = 'SELECT * FROM events';
    
    await pool.execute(sql, (error, results) => {
      if(error) throw error;
      return res.status(200).json(results);
    })
  } catch (err) {
    return err;
    }
});

router.post("/events/create", async (req, res) => {
  try {
    const {
      start,
      end,
      until,
      occurrenceId,
      title,
      description,
      category,
      priority,
      allDay,
      done,
      interval,
      every,
      Sun, Mon, Tue, Wed, Thu, Fri, Sat
    } = req.body;
    let sql = 'INSERT INTO events (start, end, until, occurrenceId, title, description, category, priority, allDay, done, interval, every, Sun, Mon, Tue, Wed, Thu, Fri, Sat) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    await pool.execute(sql, [start, end, until, occurrenceId, title, description, category, priority, allDay, done, interval, every, Sun, Mon, Tue, Wed, Thu, Fri, Sat], (error, results) => {
      if (error) throw error;
      return res.status(200).json(results);
    });
  } catch (error) {
    return error;
  }
});

router.post("/events/update", async (req, res) => {
  try {
    const {
      id,
      start,
      end,
      until,
      occurrenceId,
      title,
      description,
      category,
      priority,
      allDay,
      done,
      interval,
      every,
      Sun, Mon, Tue, Wed, Thu, Fri, Sat
    } = req.body;

    let sql = 'UPDATE events SET start=?, end=?, until=?, occurrenceId=?, title=?, description=?, category=?, priority=?, allDay=?, done=?, interval=?, every=?, Sun=?, Mon=?, Tue=?, Wed=?, Thu=?, Fri=?, Sat=? WHERE id = ?';

    await pool.execute(sql, [start, end, until, occurrenceId, title, description, category, priority, allDay, done, interval, every, Sun, Mon, Tue, Wed, Thu, Fri, Sat, id], (error, results) => {
      if (error) throw error;
      return res.status(200).json(results);
    });
  } catch (error) {
    return error;
  }
});

router.post("/events/delete", async (req, res) => {
  try {
    const {id} = req.body.id;
    let sql = 'DELETE from events WHERE id = ?';
    await pool.execute(sql, [id], (error, results) => {
      if (error) throw error;
      return res.status(200).json(results);
    });
  } catch (error) {
    return error;
  }
});

router.post("/events/occurrenceDelete", async (req, res) => {
  try {
    let occurrenceId = req.body.id;
    let sql =  'DELETE from events WHERE occurrenceId = ?';

    await pool.query(sql,[occurrenceId], (error, results) => {
      if (error) throw error;
      return res.status(200).json(results);
    });
  } catch (error) {
    return error;
  }
});

router.get("/events/recurring", async (req, res) => {
  try {
    let {occurrenceId} = req.body.occurrenceId;
    let sql = 'SELECT * FROM events WHERE occurrenceId = ?';

    await pool.execute(sql, [occurrenceId], (error, results) => {
      if(error) throw error;
      return res.status(200).json(results);
    })
  } catch (err) {
    return err;
    }
});

server.get('/*', (req, res) => {
  if(process.env.NODE_ENV === 'dev') {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
  } else {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
  }
  
});

server.listen(PORT, () => {
  //console.error(CORS enabled Server with whitelist is running on port ${PORT}\n);
  console.error(`CORS disabled. Running MySQL on port ${PORT}\n`);
});
