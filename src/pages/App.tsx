import React, { useState } from 'react';
import Clock from '../components/Clock';
import Form from '../components/Form';
import List from '../components/List';
import { ITask } from '../types/ITask';
import style from './App.module.scss';


function App() {

  const [tasks, setTasks] = useState <ITask[]>([])
  
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Clock />
    </div>
  );
}

export default App;
