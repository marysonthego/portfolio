const path = require('path');
require("dotenv").config();
const express = require("express");
const server = express();
const pool = require("./dbConfig.mysql");
const session = require("express-session");
const MemoryStore = require('memorystore')(session);

const PORT = process.env.PORT || 4000;

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

var router = express.Router({mergeParams: true});

server.use(router);
console.log(`process.env.NODE_ENV =`,process.env.NODE_ENV);

if(process.env.NODE_ENV === 'dev') {
  router.use(express.static(path.join(__dirname, '/client/build')));
} else {
  router.use(express.static(path.join(__dirname, '/public')));
}

// const putResponseInRequest = function(req, res, next) {
//   console.log('putResponseInRequest');
//   res.response = function (obj) {
//       req.res = obj;
//   }
//   next();
// }

// const beforeMiddleware = function(req, res, next) {
// console.log('beforeMiddleware');
// next();
// }

// const responseHandler = function(req, res, next) {
//   console.log('responseHandler');
//   console.log(`req.res `,req.res);
// }

// const handler = function(req, res, next) {
//   console.log('handler');
//   let sql = 'SELECT * FROM todos';
//   pool.execute(sql, (error, results) => {
//     if(error) throw error;
//     res.response({results});
//     responseHandler(req, res, next);
//     next();
//   });
// };

// const afterMiddleware = function(req, res, next) {
//   console.log('afterMiddleware');
//   next();
// }

// const finalResponseHandler = function(req, res, next) {
//   console.log('finalResponseHandler');
//   console.log(`req.res: `, req.res);
//   res.status(200).send(req.res);
// };

//router.get("/api/todos/all", putResponseInRequest, beforeMiddleware, handler, afterMiddleware, finalResponseHandler);

// get entry by entryName
router.get("/api/blog/entry/:entryname", async (req, res, next) => {
  let entryname = req.params.entryname;
  try
  {
    let sql = 'SELECT entryId, entryName, entryTitle, pubDate, updateDate, category FROM entry WHERE entryName = ?';

    pool.execute(sql, [entryname], (error, results) => {
      if(error) throw error;
      if(results.length > 0) {
        req.session.id = results[0].entryId;
        next();
        //return res.status(200).json(results);
      }
      return res.status(404).json(error);
    })
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

// get all sections for entryId
router.get("/api/blog/entry", (req, res) => {
  try {
    console.log(`in /api/blog/entry next`);
    let sql = 'SELECT * FROM section WHERE entryId = ?';

    pool.execute(sql, [req.session.id], (error, results) => {
      if(error) throw error;
      if(results.length > 0){
        res.status(200).json(results);
      } else {
        res.status(404).send('No records found');
      }
    })
  } catch (error) {
    return res.status(500).json(error.message);
     }
 });

// get customer by custid
router.get("/api/getcustomerbycustid/:custid", async (req, res) => {
  let custid = req.params.custid;
  try
  {
    let sql = 'SELECT custid, firstname, lastname, email, cell, addr1, addr2, city, st, zip, usertype, username, createdate FROM customer WHERE custid = ?';

    pool.execute(sql, [custid], (error, results) => {
      if(error) throw error;
      if(results.length > 0) {
        return res.status(200).json(results);
      }
      return res.status(404).json(error);
    })
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

router.get("/api/todos/all", (req, res) => {
  try {
    console.log(`in /api/todos/all`);
    let sql = 'SELECT * FROM todos';

    pool.execute(sql, (error, results) => {
      if(error) throw error;
      if(results.length > 0){
        res.status(200).json(results);
      } else {
        res.status(404).send('No records found');
      }
    })
  } catch (error) {
    return error;
     }
 });

router.post("/api/todos/create", async (req, res) => {
  try {
    console.log(`in /api/todos/create`);
    const {
      title,
      description,
      category,
      priority
    } = req.body;
    let sql = 'INSERT INTO todos (title, description, category, priority) VALUES (?,?,?,?)';

    pool.execute(sql, [title, description, category, priority], (error, results) => {
      if(error) throw(error);
      res.status(200).json(results);
    })
  } catch (error) {
    return error;
  }
});

router.put("/api/todos/update", async (req, res) => {
  try {
    console.log(`in /api/todos/update`);
    const {
      id,
      column,
      value
    } = req.body;
    let sql = 'UPDATE todos SET ' + column + ' =? WHERE id=?';
    console.log(`sql`, sql);
    pool.execute(sql, [value, id], (error, results) => {
      if (error) throw error;
      res.status(200).json(results);
    });
  } catch (error) {
    return error;
  }
});

router.post("/api/todos/delete", async (req, res) => {
  try {
    console.log(`in /api/todos/delete`);
    const {id} = req.body;
    let sql = 'DELETE from todos WHERE id = ?';
    pool.execute(sql, [id], (error, results) => {
      if (error) throw error;
      res.status(200).json(results);
    });
  } catch (error) {
    return error;
  }
});

router.get("/api/events/all", async (req, res) => {
  try {
    console.log(`in /api/events/all`);
    let sql = 'SELECT * FROM events';

    pool.execute(sql, (error, results) => {
      if(error) throw error;
      if(results.length > 0) {
        return res.status(200).json(results);
      }
      res.status(404).send('not found');
    })
  } catch (err) {
    return err;
    }
});

router.post("/api/events/create", async (req, res) => {
  try {
    console.log(`in /api/events/create`);
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
    let sql = 'INSERT INTO events (start, end, until, occurrenceid, title, description, category, priority, allday, done, `interval`, every, sun, mon, tue, wed, thu, fri, sat) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

    pool.execute(sql, [start, end, until, occurrenceId, title, description, category, priority, allDay, done, interval, every, Sun, Mon, Tue, Wed, Thu, Fri, Sat], (error, results) => {
      if (error) throw error;
      res.status(200).json(results);
    });
  } catch (error) {
    return error;
  }
});

router.post("/api/events/createfromtodo", async (req, res) => {
  try {
    console.log(`in /api/events/createfromtodo`);
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
    let sql = 'INSERT INTO events (start, end, until, occurrenceid, title, description, category, priority, allday, done, `interval`, every, sun, mon, tue, wed, thu, fri, sat) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

    pool.execute(sql, [start, end, until, occurrenceId, title, description, category, priority, allDay, done, interval, every, Sun, Mon, Tue, Wed, Thu, Fri, Sat], (error, results) => {
      if (error) throw error;
      res.status(200).json(results);
    });
  } catch (error) {
    return error;
  }
});

router.post("/api/events/update", async (req, res) => {
  try {
    console.log(`in /api/events/update`);
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

    let sql = 'UPDATE events SET start=?, end=?, until=?, occurrenceid=?, title=?, description=?, category=?, priority=?, allday=?, done=?, `interval`=?, every=?, sun=?, mon=?, tue=?, wed=?, thu=?, fri=?, sat=? WHERE id = ?';

    pool.execute(sql, [start, end, until, occurrenceId, title, description, category, priority, allDay, done, interval, every, Sun, Mon, Tue, Wed, Thu, Fri, Sat, id], (error, results) => {
      if (error) throw error;
      res.status(200).json(results);
    });
  } catch (error) {
    return error;
  }
});

router.post("/api/events/delete", async (req, res) => {
  try {
    console.log(`in /api/events/delete`);
    const {id} = req.body;
    let sql = 'DELETE from events WHERE id = ?';
    pool.execute(sql, [id], (error, results) => {
      if (error) throw error;
      res.status(200).json(results);
    });
  } catch (error) {
    return error;
  }
});

router.post("/api/events/occurrencedelete", async (req, res) => {
  try {
    console.log(`in /api/events/occurrencedelete`);
    let occurrenceId = req.body;
    let sql =  'DELETE from events WHERE occurrenceid = ?';

    pool.query(sql,[occurrenceId], (error, results) => {
      if (error) throw error;
      res.status(200).json(results);
    });
  } catch (error) {
    return error;
  }
});

router.post("/api/events/recurring", async (req, res) => {
  try {
    console.log(`in /api/events/recurring`);
    let {occurrenceId} = req.body;
    let sql = 'SELECT * FROM events WHERE occurrenceid = ?';

    pool.execute(sql, [occurrenceId], (error, results) => {
      if(error) throw error;
      res.status(200).json(results);
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
  console.error(`CORS disabled. Running MySQL on port ${PORT} process.env.NODE_ENV = ${process.env.NODE_ENV}\n`);
});
