const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const Task = require('../models/Task');

router.get('/', auth, async (req, res) => {
  const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(tasks);
});

router.post('/', auth, async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ user: req.user._id, title, description });
  await task.save();
  res.json(task);
});

router.put('/:id', auth, async (req, res) => {
  const { title, description, done } = req.body;
  const task = await Task.findOneAndUpdate({ _id: req.params.id, user: req.user._id }, { title, description, done }, { new: true });
  res.json(task);
});

router.delete('/:id', auth, async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  res.json({ msg: 'Deleted' });
});

module.exports = router;
