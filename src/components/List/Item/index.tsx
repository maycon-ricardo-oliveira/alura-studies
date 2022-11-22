import React from "react";
import { ITask } from "../../../types/ITask";
import style from './Item.module.scss';

interface Props extends ITask {	
  selectTask: (selectedTask:ITask) => void
}

export default function Item({
  task,
  time,
  selected,
  completed,
  id,
  selectTask} : Props) {

  return (
    <li 
      className={`${style.item} ${selected ? style.selectedItem : ''} ${style.item} ${completed ? style.doneItem : ''}`}
      onClick={() => !completed && selectTask({
        task,
        time,
        selected,
        completed,
        id,
    })}>
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <span className={style.concluido} aria-label="tarefa completada"></span>}
    </li>
  )
}