import React from "react";
import { ITask } from "../../types/ITask";
import Button from "../Button";
import style from './Form.module.scss';
import {v4 as uuidv4} from 'uuid';
import { useState } from "react";

interface Props {
	setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({setTasks}: Props) {

	const [task, setTask] = useState("");
	const [ time, setTime] = useState('00:00');

	function addTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setTasks(oldTasks => [...oldTasks, {
			task,
			time,
			selected: false,
			completed: false,
			id: uuidv4()
		}]);

		setTask("");
		setTime("00:00");

	}

	return (
		<form className={style.newTask} onSubmit={addTask} >
			<div className={style.inputContainer}>
				<label htmlFor="task">
					Adicione um novo estudo
				</label>
				<input
					type="text"
					name="task"
					id="task"
					placeholder="O que você quer estudar"
					required
					value={task}
					onChange={event => setTask(event.target.value)}
				/>
			</div>

			<div className={style.inputContainer}>
				<label htmlFor="time">
					Tempo
				</label>
				<input
					type="time"
					step="1"
					name="time"
					id="time"
					min="00:00:00"
					max="01:30:00"
					required
					value={time}
					onChange={event => setTime(event.target.value)}
				/>
			</div>

			<Button type="submit">Adicionar</Button>
		</form>
	)

}

export default Form;