import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/tasks');
    setTasks(res.data);
  };

  useEffect(() => { fetchTasks(); }, []);

  const createTask = async () => {
    await axios.post('http://localhost:5000/tasks', { title });
    setTitle('');
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task title" />
      <button onClick={createTask}>Add Task</button>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.title} <button onClick={() => deleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
