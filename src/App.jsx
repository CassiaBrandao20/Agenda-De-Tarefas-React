import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

import Header from './components/Header';
import Tasks from './components/Tasks';
import './App.css'
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    }
  ]);

  const handleTaskClick = (taskid) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskid) return {... task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks);

  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [... tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks);

  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(tasks => tasks.id != taskId)
    setTasks(newTasks)
  }


  return (
    <>
      <div className="container">
        <Header />
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks 
        tasks={tasks} 
        handleTaskClick={handleTaskClick} 
        handleTaskDeletion={handleTaskDeletion}
        />
      </div>
    </>
  );
}

export default App;
