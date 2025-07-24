const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let tasks = [];
let taskId = 1;

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    return res.json({ token: 'mock-token' });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
});

app.get('/tasks', (req, res) => res.json(tasks));
app.post('/tasks', (req, res) => {
  const newTask = { id: taskId++, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});
app.put('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);
  tasks[index] = { ...tasks[index], ...req.body };
  res.json(tasks[index]);
});
app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.status(204).send();
});

// Export the app for testing
module.exports = app;

if (require.main === module) {
  const PORT = 5000;
  app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
}

