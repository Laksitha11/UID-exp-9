import React, { useState } from 'react';
import './TodoList.css'; // For custom styling

const TodoList = () => {
  const [tasks, setTasks] = useState([]); // Task list state
  const [task, setTask] = useState(''); // Single task state

  // Function to add a task
  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return; // Avoid adding empty tasks
    // Add new task with isCompleted set to false
    setTasks([...tasks, { text: task, isCompleted: false }]);
    setTask(''); // Clear input
  };

  // Function to toggle task completion status
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted; // Toggle the completion status
    setTasks(newTasks); // Update tasks
  };

  // Function to remove a task
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks); // Remove the task at the given index
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <form onSubmit={addTask}>
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Enter a new task" 
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.isCompleted ? 'completed' : ''}>
            <span onClick={() => toggleTask(index)}>
              {task.text}
            </span>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
