// Import database
const db = require('./db')

exports.todosAll = async (req, res) => {
  db
    .select('*') // select all records
    .from('todos') // from 'todos' table
    .then(data => {
      if (!Array.isArray(data) || !data.length) {
        res.status(404).json({message: "No records found"})
      } else {
        res.status(200).json(data)
      }
    })
    .catch(err => {
      res.json({ message: `error retrieving todos: ${err}` })
    })
}

exports.todosCreate = async (req, res) => {
  db('todos')
    .insert({ // insert new record
      'title': req.body.title,
      'description': req.body.description,
      'createdDate': db.fn.now(),
      'category': req.body.category,
      'priority': req.body.priority,
    })
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({ message: `error creating ${req.body.title} todo: ${err}` })
    })
}

exports.todosUpdate = async (req, res) => {
  const id = req.body.id;
  const changes = req.body;
  try {
    const count = await db('todos').where({id}, id).update(changes);

    if (count > 0) {
      res.status(200).json({updated: count})
    } else {
      res.status(404).json({message: "Record not found"})
    } 
  } catch (err) {
    res.status(500).json({message: "Error updating todo", error: err})
  }
}

exports.todosDelete = async (req, res) => {
  const id = parseInt(req.body.id)
  db('todos')
    .where({id}, id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      res.json({ message: `todo ${id} deleted.` })
    })
    .catch(err => {
      res.json({ message: `error deleting ${id} error: ${err}` })
    })
}

exports.todosReset = async (req, res) => {
  db
    .select('*') // select all records
    .from('todos') // from 'todos' table
    .truncate() // remove the selection
    .then(() => {
      res.json({ message: 'todos table cleared.' })
    })
    .catch(err => {
      res.json({ message: `error resetting todos table: ${err}.` })
    })
}

exports.eventsAll = async (req, res) => {
  db
    .select('*') // select all records
    .from('events') // from 'events' table
    .then(data => {
      if (!Array.isArray(data) || !data.length) {
        res.status(404).json({message: "No records found"})
      } else {
        res.status(200).json(data)
      }
    })
    .catch(err => {
      res.status(500).json({ message: `error retrieving events: ${err}` })
    })
}

exports.eventsCreate = async (req, res) => {
  await db('events')
    .insert({ // insert new record
      'start': req.body.start,
      'end': req.body.end,
      'until': req.body.until,
      'occurrenceId': req.body.occurrenceId,
      'title': req.body.title,
      'description': req.body.description,
      'category': req.body.category,
      'priority': req.body.priority,
      'allDay': req.body.allDay,
      'done': req.body.done,
      'interval': req.body.interval,
      'every': req.body.every,
      'Sun': req.body.Sun,
      'Mon': req.body.Mon,
      'Tue': req.body.Tue,
      'Wed': req.body.Wed,
      'Thu': req.body.Thu,
      'Fri': req.body.Fri,
      'Sat': req.body.Sat,
    })
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({ message: `error creating event ${req.body.title} ${err}` })
    })
}

exports.eventsUpdate = async (req, res) => {
  const id = req.body.id;
  const changes = req.body;
  try {
    const count = await db('events').where({id}, id).update(changes);

    if (count > 0) {
      res.status(200).json({changes: changes})
    } else {
      res.status(404).json({message: "Record not found"})
    } 
  } catch (err) {
    res.status(500).json({message: "Error updating event", error: err})
  }
}

exports.eventsDelete = async (req, res) => {
  const id = parseInt(req.body.id)
  db('events')
    .where({id}, id) 
    .del() 
    .then(() => {
      res.json({ message: `Event id ${id} deleted.` })
    })
    .catch(err => {
      res.json({ message: `error deleting event id ${id} error: ${err}` })
    })
}

exports.eventsOccurrenceDelete = async (req, res) => {
  const occurrenceId = parseInt(req.body.id)
  console.log(`occurrenceId: `, occurrenceId);
  db('events')
    .where({occurrenceId}, occurrenceId) 
    .del() 
    .then(() => {
      res.json({ message: `occurrenceId ${occurrenceId} deleted.` })
    })
    .catch(err => {
      res.json({ message: `error deleting occurrenceId ${occurrenceId} error: ${err}` })
    })
}

exports.eventsReset = async (req, res) => {
  db
    .select('*') // select all records
    .from('events') // from 'events' table
    .truncate() // remove the selection
    .then(() => {
      res.json({ message: 'Calendar events cleared.' })
    })
    .catch(err => {
      res.json({ message: `error resetting event list: ${err}.` })
    })
}

exports.eventsRecurring = async (req, res) => {
  const occurrenceId = parseInt(req.body.occurrenceId)
  db
    .select('*') // select all records
    .from('events') // from 'events' table
    .where({occurrenceId}, occurrenceId)
    .then(data => {
      if (!Array.isArray(data) || !data.length) {
        res.status(404).json({message: "No records found"})
      } else {
        res.status(200).json(data)
      }
    })
    .catch(err => {
      res.status(500).json({ message: `error retrieving recurringEvents: ${err}` })
    })
}

