import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/ITask";
import Button from "../Button";
import style from './Clock.module.scss';
import Timer from "./Timer";


interface Props {
  selected: ITask | undefined,
  finishTask: () => void

}

export default function Clock({selected, finishTask} : Props) {

  const [ time, setTime] = useState<number>();

  useEffect(() => {
      if (selected?.time) {
        setTime(timeToSeconds(selected.time));
      }
    }, [selected]
  );

  function recursive(counter: number = 0 ) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return recursive(counter - 1)
      }
      finishTask();
    }, 1000)
  }

  return (
   
   <div className={style.clock}>

      <p className={style.title} >Escolha um card e inicie o cronometro</p>

      <div className={style.timerWrapper}>
        <Timer
          time={time}
        />
      </div>

      <Button onClick={() => recursive(time)}>Começar!</Button>
   </div>

  )
}