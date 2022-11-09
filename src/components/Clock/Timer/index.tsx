
import style from './Timer.module.scss';

export default function Timer() {
  return (
    <>
      <span className={style.timerNumber}>0</span>
      <span className={style.timerNumber}>0</span>

      <span className={style.timerSeparator}>:</span>

      <span className={style.timerNumber}>0</span>
      <span className={style.timerNumber}>0</span>
    </>
  )
}
