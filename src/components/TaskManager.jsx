import React, { useState } from 'react';
import Button from './Button';
import useLocalStorage from '../hooks/useLocalStorage';

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all'); // all | active | completed

  const addTask = () => {
    if (input.trim() === '') return;
    const newTask = { id: Date.now(), text: input.trim(), completed: false };
    setTasks([newTask, ...tasks]);
    setInput('');
  };

  const toggleComplete = id => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Task Manager</h2>

      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l dark:bg-gray-700 dark:text-white"
          placeholder="Add a new task"
        />
        <Button variant="primary" onClick={addTask}>Add</Button>
      </div>

      <div className="flex justify-between mb-4">
        <Button variant="secondary" onClick={() => setFilter('all')}>All</Button>
        <Button variant="secondary" onClick={() => setFilter('active')}>Active</Button>
        <Button variant="secondary" onClick={() => setFilter('completed')}>Completed</Button>
      </div>

      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} className="flex items-center justify-between mb-2">
            <span
              onClick={() => toggleComplete(task.id)}
              className={`cursor-pointer ${task.completed ? 'line-through text-gray-400' : 'text-gray-800 dark:text-gray-100'}`}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
          </li>
        ))}
      </ul>

      {filteredTasks.length === 0 && (
        <p className="text-gray-500 dark:text-gray-300 mt-4">No tasks here!</p>
      )}
    </div>
  );
}
