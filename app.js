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

router.use(express.static(path.join(__dirname, '/public')));

router.get("/todos/all", async (req, res) => {
  try {
    await pool.execute('SELECT * FROM `todos`',
    function(err, results, fields) {
      console.log(`results: `, results);
      console.log(`fields: `, fields);
      console.log(`err:`, err);
      return res.status(200).send(results, fields);
    })
  } catch (err) {
    return err;
    }
});

router.post("/todos/create", async (req, res) => {
  try {
    await pool.execute('INSERT INTO `todos` (`title`, `description`, `createdDate`, `category`, `priority`',
     [req.body.title, req.body.description, req.body.createdDate, req.body.category, req.body.priority],
    function (error, results, fields) {
      if (error) throw error;
      else {
        return res.status(200).send(results, fields);
      }
    });
    return res.status;
  } catch (error) {
    return error;
  }
});

router.post("/todos/update", async (req, res) => {
  try {
    await pool.execute( 'UPDATE `todos` SET title=req.body.title, description=req.body.description, category=req.body.category, priority=req.body.priority WHERE todos.id = req.body.id',
    function (error, results, fields) {
      if (error) throw error;
      else {
        return res.status(200).send(results, fields);
      }
    });
  } catch (error) {
    return error;
  }
});

router.post("/todos/delete", async (req, res) => {
  try {
    await pool.execute('DELETE from `todos` WHERE todos.id = req.body.id',
    function (error, results, fields) {
      if (error) throw error;
      else {
        return res.status(200).send(results, fields);
      }
    });
  } catch (error) {
    return error;
  }
});


router.get("/events/all", async (req, res) => {
  try {
    const response = await pool.execute('SELECT * FROM `events`',
    function(err, results, fields) {
      console.log(`results: `, results);
      console.log(`fields: `, fields);
      console.log(`err:`, err);
      return res.status(200).send(results, fields);
    })
  } catch (err) {
    return err;
    }
});

router.post("/events/create", async (req, res) => {
  try {
    await pool.execute('INSERT INTO `events` (`start`, `end`, `until`, `occurrenceId`, `title`, `description`, `category`, `priority`, `allDay`, `done`, `interval`, `every`, `Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`', [req.body.start, req.body.end, req.body.until, req.body.occurrenceId, req.body.title, req.body.description, req.body.category, req.body.priority, req.body.allDay, req.body.done, req.body.interval, req.body.every, req.body.Sun, req.body.Mon, req.body.Tue, req.body.Wed, req.body.Thu, req.body.Fri, req.body.Sat],
    function (error, results, fields) {
      if (error) throw error;
      else {
        return res.status(200).send(results, fields);
      }
    });
    return res.status;
  } catch (error) {
    return error;
  }
});

router.post("/events/update", async (req, res) => {
  try {
    await pool.execute( 'UPDATE `events` SET start=req.body.start, end=req.body.end, until=req.body.until, occurrenceId=req.body.occurrenceId, title=req.body.title, description=req.body.description, category=req.body.category, priority=req.body.priority, allDay=req.body.allDay, done=req.body.done, interval=req.body.interval, every=req.body.every, Sun=req.body.Sun, Mon=req.body.Mon, Tue=req.body.Tue, Wed=req.body.Wed, Thu=req.body.Thu, Fri=req.body.Fri, Sat=req.body.Sat WHERE events.id = req.body.id', 
    function (error, results, fields) {
      if (error) throw error;
      else {
        return res.status(200).send(results, fields);
      }
    });
  } catch (error) {
    return error;
  }
});
router.post("/events/delete", async (req, res) => {
  try {
    await pool.execute('DELETE from `events` WHERE events.id = req.body.id',
    function (error, results, fields) {
      if (error) throw error;
      else {
        return res.status(200).send(results, fields);
      }
    });
  } catch (error) {
    return error;
  }
});

router.post("/events/occurrenceDelete", async (req, res) => {
  try {
    let occurrenceId = req.body.id;
    await pool.query(`DELETE from events WHERE events.occurrenceId = $1 RETURNING occurrenceId`, [occurrenceId],
    (err, results) => {
      if (err) {
        let msg = err.message;
        return res.status(409).send({msg});
      } else {
        let msg = results;
        return res.status(200).send({msg});
      } 
    });
  } catch (error) {
    return error;
  }
});

router.get("/events/recurring", async (req, res) => {
  try {
    let occurrenceId = req.body.occurrenceId;
    const response = await pool.execute('SELECT * FROM `events` WHERE events.occurrenceId = req.body.occurrenceId',
    function(err, results, fields) {
      console.log(`results: `, results);
      console.log(`fields: `, fields);
      console.log(`err:`, err);
      return res.status(200).send(results, fields);
    })
  } catch (err) {
    return err;
    }
});

server.get('/*', (req, res) => {
  //res.sendFile(path.join(__dirname, 'build', 'index.html'));
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

server.listen(PORT, () => {
  //console.error(`CORS enabled Server with whitelist is running on port ${PORT}\n`);
  console.error(`CORS disabled. Running MySQL on port ${PORT}
  \n`);
});

