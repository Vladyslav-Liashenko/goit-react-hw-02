import styles from './Feedback.module.css';
export const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <div className={styles.divfeedback}>
      <p className={styles.p}>Good: {good}</p>
      <p className={styles.p}>Neutral: {neutral}</p>
      <p className={styles.p}>Bad: {bad}</p>
      <p className={styles.p}>Total: {total}</p>
      <p className={styles.p}>Positive: {positive} %</p>
    </div>
  );
};
