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
    .where({id}, id) // find record based on id
    .del() // delete the record
    .then(() => {
      res.json({ message: `todo ${id} deleted.` })
    })
    .catch(err => {
      res.json({ message: `error deleting ${id} error: ${err}` })
    })
}
