// backend/controllers/todoController.js
const { Todo } = require('../models');

exports.getTodos = async (req, res) => {
  const todos = await Todo.findAll({ where: { user_id: req.user.id } });
  res.json(todos);
};

exports.createTodo = async (req, res) => {
  const { title, description } = req.body;
  const todo = await Todo.create({ title, description, user_id: req.user.id });
  res.status(201).json(todo);
};

exports.updateTodoStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  await Todo.update({ status }, { where: { id, user_id: req.user.id } });
  res.json({ message: "Status updated" });
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.destroy({ where: { id, user_id: req.user.id } });
  res.json({ message: "Todo deleted" });
};
