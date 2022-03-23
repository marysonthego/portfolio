// Import express
const express = require('express')

// Import controller
const dbrouter = require('./controller.js');

// Create router
const router = express.Router();

router.get('/todos/all', dbrouter.todosAll)

router.post('/todos/create', dbrouter.todosCreate)

router.put('/todos/update', dbrouter.todosUpdate)

router.put('/todos/delete', dbrouter.todosDelete)

// Export router
module.exports = router
