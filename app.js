const express = require('express');
const app = express();
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).send('Task is required');
  todos.push(task);
  res.status(201).send('Task added');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;