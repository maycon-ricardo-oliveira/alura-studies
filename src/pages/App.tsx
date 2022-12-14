import React, { useState } from 'react';
import Clock from '../components/Clock';
import Form from '../components/Form';
import List from '../components/List';
import { ITask } from '../types/ITask';
import style from './App.module.scss';


function App() {

  const [tasks, setTasks] = useState <ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();
  
  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: selectedTask.id === task.id
    })))
  }

  function finishTask() {
    if (selected) {

      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true,
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List 
       tasks={tasks}  
       selectTask={selectTask}
      />
      <Clock 
        selected={selected}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
