import { MINUTES_SECONDS } from '../../../common/utils/time';
import style from './Timer.module.scss';

interface Props {
  time: number | undefined
}
export default function Timer({time = 0}: Props) {

  const [minutesDez, minutesUni] = String(Math.floor(time / MINUTES_SECONDS)).padStart(2, '0');
  const [secondsDez, secondsUni] = String(time % MINUTES_SECONDS).padStart(2, '0');


  return (
    <>
      <span className={style.timerNumber}>{minutesDez}</span>
      <span className={style.timerNumber}>{minutesUni}</span>

      <span className={style.timerSeparator}>:</span>

      <span className={style.timerNumber}>{secondsDez}</span>
      <span className={style.timerNumber}>{secondsUni}</span>
    </>
  )
}
