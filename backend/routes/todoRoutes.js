// backend/routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const { authenticate } = require('../middlewares/authMiddleware');

router.use(authenticate);

router.get('/', todoController.getTodos);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodoStatus);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
