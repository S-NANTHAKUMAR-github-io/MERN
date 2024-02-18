const express = require('express')

const router = express.Router()

const { createTask, getTasks, getSingleTask, updateTask, deleteTask } = require('../controller/taskController');

router.post('/create', createTask);
router.get('/details', getTasks);
router.get('/details/:id', getSingleTask)
router.patch('/update/:id', updateTask)
router.delete('/delete/:id', deleteTask)

module.exports = router;