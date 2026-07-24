const express = require('express');
const Task = require('../models/Task');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// All routes below require a valid token - apply the middleware to every route in this file
router.use(authMiddleware);

// CREATE a task
router.post('/', async (req, res) => {
  try {
    const { title, description, tag } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const task = new Task({
      title,
      description,
      tag,
      user: req.user.id // comes from the decoded JWT in authMiddleware
    });

    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// READ all tasks for the logged-in user (optionally filter by tag)
router.get('/', async (req, res) => {
  try {
    const filter = { user: req.user.id };
    if (req.query.tag) {
      filter.tag = req.query.tag;
    }

    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// UPDATE a task (edit fields or toggle done)
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, user: req.user.id });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    const { title, description, tag, done } = req.body;
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (tag !== undefined) task.tag = tag;
    if (done !== undefined) task.done = done;

    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// DELETE a task
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;