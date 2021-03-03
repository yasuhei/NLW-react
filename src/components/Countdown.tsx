
import { useContext } from 'react';
import { CountdownContext } from '../context/CountdownContext';
import styles from '../styles/components/Countdown.module.css';



export function Countdown() {
 const { minutes,
   seconds, 
   isActive,
   hasFinished,
    startCountdown,
     resetCountdown} = useContext(CountdownContext);
     
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  

  return(
    <div>
<div className={styles.CountdownContainer}>
  <div>
    <span>{minuteLeft}</span>
    <span>{minuteRight}</span>
  </div>
  <span>:</span>
  <div>
  <span>{secondLeft}</span>
  <span>{secondRight}</span>

  </div>
</div>

{ hasFinished ? (
   <button 
   disabled
   className={styles.CountdownButton}>
     Ciclo encerrado
   </button>
): (
  <>
      { isActive ? (
         <button 
          type="button" 
          className={` ${styles.CountdownButton} ${styles.CountdownButtonActive}`}
          onClick={resetCountdown}>
          Abandonar o ciclo
        </button>
            ) : (
              <button type="button" 
        className={styles.CountdownButton}
        onClick={startCountdown}>
          Iniciar um ciclo
        </button>
            ) }
   </>
        )}

  




</div>
  );
}