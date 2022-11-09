import Button from "../Button";
import style from './Clock.module.scss';
import Timer from "./Timer";

export default function Clock() {

  return (
   
   <div className={style.clock}>

      <p className={style.title} >Escolha um card e inicie o cronometro</p>

      <div className={style.timerWrapper}>
        <Timer />
      </div>

      <Button 
        title="Começar!"
      />
   </div>

  )
}