import styles from './Options.module.css';
export const Options = ({handleClickReset, heandleLeaveFeedback}) => {
  return (
    <div className={styles.divbtn}>
      <button className={styles.btn} 
      onClick={() => heandleLeaveFeedback("good")}>Good 😁</button>
      <button className={styles.btn} onClick={() => heandleLeaveFeedback("neutral")}>Neutral 🤔</button>
      <button className={styles.btn} onClick={() => heandleLeaveFeedback("bad")}>Bad 😒</button>
      <button className={styles.btn} onClick={handleClickReset}>Reset 🗑</button>
    </div>
  );
};
