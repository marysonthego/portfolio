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

router.put('/todos/reset', dbrouter.todosReset)


router.get('/events/all', dbrouter.eventsAll)

router.post('/events/recurring', dbrouter.eventsRecurring)

router.post('/events/create', dbrouter.eventsCreate)

router.put('/events/update', dbrouter.eventsUpdate)

router.put('/events/delete', dbrouter.eventsDelete)

router.put('/events/reset', dbrouter.eventsReset)

router.put('/events/occurrenceDelete', dbrouter.eventsOccurrenceDelete)

// Export router
module.exports = router
